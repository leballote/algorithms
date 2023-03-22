// This solution is linear when the alphabet is finite
// Also you could use an array again if the alphabet is finite and you know the length of it
export default function findAnagrams(str: string, word: string): number[] {
  const anagrams = [] as number[];
  const letterCount: { [letter: string]: number } = {};
  const letterCountBase: { [letter: string]: number } = {};

  //I am not really sure of how to handle anagrams for "", so I return nothing
  if (str.length < word.length || word.length == 0) {
    return anagrams;
  }

  let i = 0;
  for (; i < word.length; i++) {
    if (letterCount[str[i]] == undefined) {
      letterCount[str[i]] = 1;
    } else {
      letterCount[str[i]]++;
    }

    if (letterCountBase[word[i]] == undefined) {
      letterCountBase[word[i]] = 1;
    } else {
      letterCountBase[word[i]]++;
    }
  }

  if (isAnagramOf(letterCount, letterCountBase)) {
    anagrams.push(0);
  }

  for (; i < str.length; i++) {
    const index0 = i - word.length;
    letterCount[str[index0]] = (letterCount[str[index0]] ?? 0) - 1;
    letterCount[str[i]] = (letterCount[str[i]] ?? 0) + 1;
    if (isAnagramOf(letterCount, letterCountBase)) {
      anagrams.push(index0 + 1);
    }
  }

  return anagrams;
}

/*
Complexity:
let n = str.length;
let m = word.length;

then it is O(n*m)
*/

function isAnagramOf(
  a: { [letter: string]: number },
  base: { [letter: string]: number }
): boolean {
  for (const letter in base) {
    if (Object.prototype.hasOwnProperty.call(base, letter)) {
      const countB = base[letter];
      const countA = a[letter] ?? 0;
      if (countA != countB) {
        return false;
      }
    }
  }

  for (const letter in a) {
    if (Object.prototype.hasOwnProperty.call(a, letter)) {
      const countA = a[letter];
      const countB = base[letter] ?? 0;
      if (countA != countB) {
        return false;
      }
    }
  }

  return true;
}

const example = "baa";
const p = "aa";

const res = findAnagrams(example, p);
console.log("res", res);
