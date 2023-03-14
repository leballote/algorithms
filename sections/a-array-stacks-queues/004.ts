function createEmptyRow(n: number): number[] {
  const out = Array(n);
  return out;
}

function createEmptyMatrix(H: number, W: number): number[][] {
  const out = Array(H);
  for (let i = 0; i < H; i++) {
    out[i] = createEmptyRow(W);
  }
  return out;
}

function findGroups(matrix: number[][]): number[][] {
  const H = matrix.length;
  const W = matrix[0]?.length ?? 0;
  const groupMatrix = createEmptyMatrix(H, W);
  if (H == 0 || W == 0) {
    return groupMatrix;
  }
  let groupLabel = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      const isNewGroup = traverse(matrix, i, j, groupMatrix, groupLabel);

      if (isNewGroup) {
        groupLabel++;
      }
    }
  }
  return groupMatrix;
}

function traverse(
  matrix: number[][],
  i: number,
  j: number,
  groupMatrix: number[][],
  groupLabel: number
): boolean {
  const el = matrix[i][j];
  const isVisited = groupMatrix[i][j] != undefined;
  if (isVisited) {
    return false;
  }
  if (el === 0) {
    groupMatrix[i][j] = -1;
    return false;
  }
  groupMatrix[i][j] = groupLabel;
  matrix[i + 1] &&
    matrix[i + 1][j] &&
    traverse(matrix, i + 1, j, groupMatrix, groupLabel);
  matrix[i - 1] &&
    matrix[i - 1][j] &&
    traverse(matrix, i - 1, j, groupMatrix, groupLabel);
  matrix[i] &&
    matrix[i][j + 1] &&
    traverse(matrix, i, j + 1, groupMatrix, groupLabel);
  matrix[i] &&
    matrix[i][j - 1] &&
    traverse(matrix, i, j - 1, groupMatrix, groupLabel);
  return true;
}

function example() {
  const matrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  ];
  const groupMatrix = findGroups(matrix);
  console.log(groupMatrix);
}

example();
//-1 represents a 0, so groups starts from 0
