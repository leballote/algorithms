export default function strangeSwap(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    arraySwap(i, array[i], array);
  }
}

function arraySwap(i: number, j: number, array: number[]) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const example = [2, 3, 1, 0];
console.log("1: ", example);
strangeSwap(example);
console.log("2: ", example);
