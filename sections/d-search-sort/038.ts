const words: string[] = require("an-array-of-english-words");

export default function findLongestWord(letters: string[]) {
  const counter: { [letter: string]: number } = {};
  for (const letter of letters) {
    counter[letter] = (counter[letter] ?? 0) + 1;
  }

  let currMaxWord = "";

  outer: for (const word of words) {
    const wordCounter: { [letter: string]: number } = {};
    for (const ch of word) {
      wordCounter[ch] = (wordCounter[ch] ?? 0) + 1;
    }

    for (const ch in wordCounter) {
      const chCount = wordCounter[ch];
      if (chCount > (counter[ch] ?? 0)) {
        continue outer;
      }
    }

    //this word is available with our letters
    if (word.length > currMaxWord.length) {
      currMaxWord = word;
    }
  }
  return currMaxWord;
}

console.time();

const ans = findLongestWord([
  "b",
  "a",
  "c",
  "k",
  "z",
  "a",
  "h",
  "t",
  "s",
  "s",
  "t",
  "e",
]);
console.timeEnd();

console.log("ans", ans);
