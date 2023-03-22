export default function shuffleArray(array: number[]): void {
  const n = array.length;
  for (let i = n - 1; i >= 0; i--) {
    const j = randomInRange(0, i + 1);
    swap(i, j, array);
  }
}

function randomInRange(a: number, b?: number) {
  if (b == undefined) {
    b = a;
    a = 0;
  }
  return Math.floor(Math.random() * (b - a)) + a;
}

function swap(i: number, j: number, array: number[]) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const x = [1, 2, 3, 4, 5];
console.log("1:", x);
shuffleArray(x);
console.log("2:", x);
