// this one is a really raw implementation which is O(N) in space because of the answer, but it doesn't need to keep track of currWord of the main implementation in index.ts
export default function reverseOddWords(s: string): string {
  let out = "";
  let i = 0;
  let j = 0;

  while (j < s.length + 1) {
    const ch = s[j];
    if (ch == " " || ch == undefined) {
      const currLength = j - i;
      a: if (currLength % 2 == 0) {
        for (let k = 0; k < currLength; k++, i++) {
          out += s[i];
        }
        if (ch !== undefined) {
          out += ch;
        }
        j++;
        i = j;
      } else {
        for (let k = j - 1; k >= i; k--) {
          out += s[k];
        }
        if (ch != undefined) {
          out += ch;
        }
        j++;
        i = j;
      }
    } else {
      j++;
    }
  }
  return out;
}

const s = "hi dude  how    is your dayhe";
const ans = reverseOddWords(s);
console.log("ans", ans);
