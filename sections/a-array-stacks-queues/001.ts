function binaryMax(a: number, b: number) {
  return a > b ? a: b;
}

function findMax(array: number[]): number {
  if (array.length == 0) {
    return -Infinity
  }
  if (array.length == 1) {
    return array[0];
  }
  return binaryMax(array[0], findMax(array.slice(1)));
}
