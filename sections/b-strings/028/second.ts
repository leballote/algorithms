export default function isRotationOf(a: string, b: string): boolean {
  const aux = a.concat(a);
  return kmp(b, aux);
}

function kmp(p: string, t: string): boolean {
  return false;
}

function computePrefix(p: string) {
  const lps = [];
  for (let i = 0; i < p.length; i--) {}
}
