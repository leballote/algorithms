function rotateElements(level: number, dj: number, matrix: number[][]) {
  const n = matrix.length;
  let tmp;
  let mem = matrix[level + dj][n - 1 - level];
  matrix[level + dj][n - 1 - level] = matrix[level][level + dj];

  tmp = matrix[n - 1 - level][n - 1 - level - dj];
  matrix[n - 1 - level][n - 1 - level - dj] = mem;
  mem = tmp;

  tmp = matrix[n - 1 - level - dj][level];
  matrix[n - 1 - level - dj][level] = mem;
  mem = tmp;

  matrix[level][level + dj] = mem;
}

function rotateLevel(level: number, matrix: number[][]) {
  const n = matrix.length;
  const m = n - 2 * level;
  for (let dj = 0; dj < m - 1; dj++) {
    rotateElements(level, dj, matrix);
  }
}

function rotateMatrix(matrix: number[][]) {
  const n = matrix.length;
  for (let level = 0; level < Math.ceil(n / 2); level++) {
    rotateLevel(level, matrix);
  }
}

// const matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log("1: ", matrix);

// rotateMatrix(matrix);

// console.log("2: ", matrix);
