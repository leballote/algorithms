function rotateMatrix(matrix: number[][]) {}

function rotateElements(level: number, j: number, matrix: number[][]) {
  const n = matrix.length;
  let tmp;
  let mem = matrix[level][n - 1 - level];
  matrix[level][n - 1 - level] = matrix[level][level];

  tmp = matrix[n - 1 - level][n - 1 - level];
  matrix[n - 1 - level][n - 1 - level] = mem;
  mem = tmp;

  tmp = matrix[n - 1 - level][level];
  matrix[n - 1 - level][level] = mem;
  mem = tmp;

  matrix[level][level] = mem;
}

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log("1: ", matrix);

rotateElements(0, 0, matrix);

console.log("2: ", matrix);
