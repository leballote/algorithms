// I'll assume they all travel at the same speed, because if they don't a "right fish", could eat another "right fish"

type Size = number;
type Direction = 1 | -1;
type Fish = [Size, Direction];

export default function findRemainingFishes(fishArray: Fish[]) {
  const n = fishArray.length;
  let currentBiggest = -Infinity;
  let remaining = n;
  for (let i = 0; i < n; i++) {
    const [size, dir] = fishArray[i];
    if (dir == 1) {
      if (size > currentBiggest) {
        currentBiggest = size;
      }
    } else {
      if (currentBiggest > size) {
        remaining--;
      } else {
        currentBiggest = -Infinity;
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    const [size, dir] = fishArray[i];
    if (dir == -1) {
      if (size > currentBiggest) {
        currentBiggest = size;
      }
    } else {
      if (currentBiggest > size) {
        remaining--;
      } else {
        currentBiggest = -Infinity;
      }
    }
  }
  return remaining;
}

const ex: Fish[] = [
  [2, -1],
  [6, 1],
  [1, 1],
  [7, -1],
  [5, -1],
  [4, 1],
  [3, -1],
];

const res = findRemainingFishes(ex);
console.log("res", res);
