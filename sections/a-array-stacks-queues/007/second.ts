export default function zeroRowsAndCols(matrix: number[][]) {
  const H = matrix.length;
  const W = matrix[0]?.length || 0;
  if (H == 0 || W == 0) {
    return [];
  }
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (matrix[i][j] == 0) {
        nanRow(i, matrix);
        nanCol(j, matrix);
      }
    }
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (Object.is(matrix[i][j], Number.NaN)) {
        matrix[i][j] = 0;
      }
    }
  }
}

function nanRow(i: number, matrix: number[][]): void {
  const W = matrix[0]?.length || 0;
  for (let j = 0; j < W; j++) {
    matrix[i][j] = matrix[i][j] === 0 ? 0 : Number.NaN;
  }
}

function nanCol(j: number, matrix: number[][]): void {
  const H = matrix.length;
  for (let i = 0; i < H; i++) {
    matrix[i][j] = matrix[i][j] === 0 ? 0 : Number.NaN;
  }
}
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log("1:", matrix);

zeroRowsAndCols(matrix);

console.log("2:", matrix);
