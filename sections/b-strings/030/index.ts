export default function reverseOddWords(s: string): string {
  let out = "";
  let i = 0;
  let currWord = "";

  while (i < s.length + 1) {
    const ch = s[i++];
    if (ch == " " || ch == undefined) {
      if (currWord.length % 2 == 0) {
        out += currWord;
      } else {
        for (let k = currWord.length - 1; k >= 0; k--) {
          out += currWord[k];
        }
      }
      currWord = "";
      out += ch ?? "";
    } else {
      currWord += ch;
    }
  }
  return out;
}

const s = "hi dude  how    is your dayhe";
const ans = reverseOddWords(s);
console.log("ans", ans);
