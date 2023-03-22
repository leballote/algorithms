type Pair = [number, number];

function findPossibleRoutes(start: Pair, end: Pair): Pair[][] {
  const out: Pair[][] = [];
  aux(start, end, out, []);
  console.log("out", out);
  return out;
}

function aux(start: Pair, end: Pair, paths: Pair[][], path: Pair[]) {
  const downTimes = end[0] - start[0];
  const leftTimes = end[1] - start[1];
  path.push([start[0], start[1]]);
  if (downTimes == 0 && leftTimes == 0) {
    paths.push(path.map((el) => el));
    path.pop();
    return;
  }

  if (downTimes > 0) {
    aux([start[0] + 1, start[1]], end, paths, path);
  }

  if (leftTimes > 0) {
    aux([start[0], start[1] + 1], end, paths, path);
  }
  path.pop();
}

findPossibleRoutes([0, 0], [2, 2]);
