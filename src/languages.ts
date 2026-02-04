import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.json({
    languages: [
      { code: "en", nativeName: "English" },
      { code: "el", nativeName: "Ελληνικά" }
    ]
  });
}