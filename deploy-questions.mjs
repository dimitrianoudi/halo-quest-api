#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = dirname(fileURLToPath(import.meta.url));
const LOCAL_BANK_FILE = resolve(ROOT_DIR, "dist/data/bank.extra.js");

function printHelp() {
  console.log(`Deploy only the question bank to Hetzner.

Usage:
  pnpm deploy:questions -- --target root@89.167.2.211

Optional flags:
  --target <ssh-target>     SSH target, e.g. root@89.167.2.211 or deploy@api.haloquest.app
  --port <port>             SSH port
  --remote-dir <path>       Remote app dir (default: /var/www/haloquest-api)
  --owner <user[:group]>    File owner for the deployed bank file
  --service <name>          systemd service name (default: haloquest-api.service)
  --health-url <url>        Health URL to check after restart
  --dry-run                 Print commands without running them
  --help                    Show this help

Environment variables:
  HALOQUEST_API_SSH_TARGET
  HALOQUEST_API_SSH_PORT
  HALOQUEST_API_REMOTE_DIR
  HALOQUEST_API_REMOTE_OWNER
  HALOQUEST_API_SERVICE
  HALOQUEST_API_HEALTH_URL
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function shellEscape(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function formatArg(value) {
  return /^[A-Za-z0-9_@%+=:,./-]+$/.test(value) ? value : shellEscape(value);
}

function parseOwnerSpec(value) {
  if (!value) return null;

  const [user, group = user] = String(value).split(":");

  if (!user) {
    fail("Invalid owner value. Use user or user:group.");
  }

  return { user, group };
}

function parseArgs(argv) {
  const options = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--target") {
      options.target = argv[i + 1];
      i += 1;
      continue;
    }

    if (arg === "--port") {
      options.port = argv[i + 1];
      i += 1;
      continue;
    }

    if (arg === "--remote-dir") {
      options.remoteDir = argv[i + 1];
      i += 1;
      continue;
    }

    if (arg === "--service") {
      options.service = argv[i + 1];
      i += 1;
      continue;
    }

    if (arg === "--owner") {
      options.owner = argv[i + 1];
      i += 1;
      continue;
    }

    if (arg === "--health-url") {
      options.healthUrl = argv[i + 1];
      i += 1;
      continue;
    }

    fail(`Unknown argument: ${arg}`);
  }

  return options;
}

function run(command, args, description, dryRun, execOptions = {}) {
  if (dryRun) {
    console.log(`- ${description}`);
    const renderedCommand = [command, ...args].map(formatArg).join(" ");
    const renderedStdin = execOptions.stdinPathForDisplay
      ? ` < ${formatArg(execOptions.stdinPathForDisplay)}`
      : "";
    console.log(`  ${renderedCommand}${renderedStdin}`);
    return;
  }

  console.log(`\n> ${description}`);
  execFileSync(command, args, {
    cwd: ROOT_DIR,
    stdio: execOptions.input ? ["pipe", "inherit", "inherit"] : "inherit",
    input: execOptions.input,
  });
}

const options = parseArgs(process.argv.slice(2));

if (options.help) {
  printHelp();
  process.exit(0);
}

const target = options.target ?? process.env.HALOQUEST_API_SSH_TARGET;
const port = options.port ?? process.env.HALOQUEST_API_SSH_PORT;
const remoteDir =
  options.remoteDir ??
  process.env.HALOQUEST_API_REMOTE_DIR ??
  "/var/www/haloquest-api";
const remoteUser = target.includes("@") ? target.split("@")[0] : "";
const ownerSpec =
  options.owner ??
  process.env.HALOQUEST_API_REMOTE_OWNER ??
  (remoteUser === "root" ? "deploy:deploy" : undefined);
const owner = parseOwnerSpec(ownerSpec);
const service =
  options.service ?? process.env.HALOQUEST_API_SERVICE ?? "haloquest-api.service";
const healthUrl = options.healthUrl ?? process.env.HALOQUEST_API_HEALTH_URL;

if (!target) {
  fail("Missing SSH target. Pass --target or set HALOQUEST_API_SSH_TARGET.");
}

const sshArgs = port ? ["-p", port] : [];
const remoteBankPath = `${remoteDir}/dist/data/bank.extra.js`;
const remoteTempPath = "/tmp/haloquest-bank.extra.js";

run("pnpm", ["build"], "Build API", options.dryRun);

if (!options.dryRun && !existsSync(LOCAL_BANK_FILE)) {
  fail(`Built bank file not found: ${LOCAL_BANK_FILE}`);
}

const installCommand = owner
  ? `as_root install -m 644 -o ${shellEscape(owner.user)} -g ${shellEscape(owner.group)} ${shellEscape(remoteTempPath)} ${shellEscape(remoteBankPath)}`
  : `as_root install -m 644 ${shellEscape(remoteTempPath)} ${shellEscape(remoteBankPath)}`;

const verifyQuestionsUrl = (baseUrl) =>
  `${baseUrl}/questions?difficulty=easy&answers=10&lang=en&session=deploy-check&k=1`;

const verificationUrls = healthUrl
  ? [healthUrl]
  : [
      "http://127.0.0.1:3000/health",
      verifyQuestionsUrl("http://127.0.0.1:3000"),
      "http://127.0.0.1:4000/health",
      verifyQuestionsUrl("http://127.0.0.1:4000"),
      "https://api.haloquest.app/health",
      verifyQuestionsUrl("https://api.haloquest.app"),
    ];

const verificationCommand = [
  'check_url() { url="$1"; if curl -fsS "$url" >/dev/null 2>/dev/null; then echo "Verified: $url"; return 0; fi; return 1; }',
  `${verificationUrls.map((url) => `check_url ${shellEscape(url)}`).join(" || ")} || { echo "Post-deploy verification failed" >&2; exit 1; }`,
].join("; ");

const remoteCommand = [
  "set -e",
  `cat > ${shellEscape(remoteTempPath)}`,
  'as_root() { if [ "$(id -u)" -eq 0 ]; then "$@"; elif command -v sudo >/dev/null 2>&1; then sudo "$@"; else echo "sudo is required for non-root deploys" >&2; exit 1; fi; }',
  `as_root mkdir -p ${shellEscape(`${remoteDir}/dist/data`)}`,
  installCommand,
  `rm -f ${shellEscape(remoteTempPath)}`,
  `as_root systemctl restart ${shellEscape(service)}`,
  `as_root systemctl status ${shellEscape(service)} --no-pager --lines=3`,
  verificationCommand,
].join("; ");

run(
  "ssh",
  [...sshArgs, target, remoteCommand],
  "Upload, install, restart, and verify question bank",
  options.dryRun,
  {
    input: options.dryRun ? undefined : readFileSync(LOCAL_BANK_FILE),
    stdinPathForDisplay: LOCAL_BANK_FILE,
  }
);

console.log("\nQuestion bank deploy complete.");
