export function zeroRowsAndCols2(matrix: number[][]) {
  const H = matrix.length;
  const W = matrix[0]?.length || 0;
  if (H == 0 || W == 0) {
    return [];
  }
  let fillFirstCol = false;
  let fillFirstRow = false;

  //checking first col
  for (let i = 0; i < H; i++) {
    if (matrix[i][0] == 0) {
      fillFirstCol = true;
      break;
    }
  }

  for (let j = 0; j < W; j++) {
    if (matrix[0][j] == 0) {
      fillFirstRow = true;
      break;
    }
  }

  //label first col and first row
  for (let i = 1; i < H; i++) {
    for (let j = 1; j < W; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  //fill zeroes inside inner matrix
  for (let i = 1; i < H; i++) {
    for (let j = 1; j < W; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (fillFirstCol) {
    for (let i = 0; i < H; i++) {
      matrix[i][0] = 0;
    }
  }

  if (fillFirstRow) {
    for (let j = 0; j < W; j++) {
      matrix[0][j] = 0;
    }
  }
}

const matrix = [[1, 0]];

console.log("1:", matrix);

zeroRowsAndCols2(matrix);

console.log("2:", matrix);
