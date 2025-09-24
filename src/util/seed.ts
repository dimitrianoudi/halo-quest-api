// Deterministic PRNG from string seed
function sfc32(a: number, b: number, c: number, d: number) {
  return function () {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

export function hashSeed(seed: string) {
  let h1 = 0x9e3779b9, h2 = 0x243f6a88, h3 = 0xb7e15162, h4 = 0x8aed2a6b;
  for (let i = 0; i < seed.length; i++) {
    const k = seed.charCodeAt(i);
    h1 = (h2 ^ (h1 ^ k) * 2654435761) >>> 0;
    h2 = (h3 ^ (h2 ^ k) * 1597334677) >>> 0;
    h3 = (h4 ^ (h3 ^ k) * 974192513) >>> 0;
    h4 = (h1 ^ (h4 ^ k) * 271733879) >>> 0;
  }
  return sfc32(h1, h2, h3, h4);
}

export function seededPick<T>(arr: T[], seed: string): T {
  if (!arr.length) throw new Error("Empty bank");
  const rnd = hashSeed(seed)();
  return arr[Math.floor(rnd * arr.length)];
}

// Seeded permutation of [0..n-1] using sfc32 RNG
export function seededPermutation(n: number, seed: string): number[] {
  const rng = sfc32FromString(seed);
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// If you already export sfc32FromString, reuse it; otherwise:
export function sfc32FromString(s: string) {
  let h1 = 0x9e3779b9, h2 = 0x243f6a88, h3 = 0xb7e15162, h4 = 0x8aed2a6b;
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i);
    h1 = (h2 ^ (h1 ^ k) * 2654435761) >>> 0;
    h2 = (h3 ^ (h2 ^ k) * 1597334677) >>> 0;
    h3 = (h4 ^ (h3 ^ k) * 974192513) >>> 0;
    h4 = (h1 ^ (h4 ^ k) * 271733879) >>> 0;
  }
  const sfc32 = (a: number, b: number, c: number, d: number) => () => {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
  return sfc32(h1, h2, h3, h4);
}

