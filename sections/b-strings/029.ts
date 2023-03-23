export default function isPermutationOf(s: string, base: string): boolean {
  if (s.length != base.length) {
    return false;
  }
  const counter: { [char: string]: number } = {};
  for (const ch of base) {
    counter[ch] = (counter[ch] ?? 0) + 1;
  }

  for (const ch of s) {
    counter[ch] = (counter[ch] ?? 0) - 1;
    if (counter[ch] < 0) {
      return false;
    }
  }
  return true;
}

const base = "abcdeffx";
const s = "cabfedfa";
const ans = isPermutationOf(s, base);
console.log("ans", ans);
