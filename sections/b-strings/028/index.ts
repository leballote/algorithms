export default function isRotationOf(a: string, b: string): boolean {
  if (a.length != b.length) {
    return false;
  }

  const n = a.length;
  outside: for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[j] != b[(i + j) % n]) {
        continue outside;
      }
    }
    return true;
  }

  return false;
}

const s = "abcdx";
const goal = "cdeab";

const ans = isRotationOf(s, goal);
console.log("ans", ans);
