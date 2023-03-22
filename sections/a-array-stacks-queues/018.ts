export default class SparseMatrix {
  #points: Map<number, Map<number, number> | undefined> = new Map();
  #n: number;
  #m: number;
  constructor(n: number, m: number) {
    this.#n = n;
    this.#m = m;
  }

  get(i: number, j: number): number | undefined {
    if (i >= this.#n || j >= this.#m) {
      return undefined;
    }
    const row = this.#points.get(i);
    if (!row) {
      return 0;
    }
    return row.get(j);
  }
  set(i: number, j: number, val: number): void {
    if (i > this.#n || j > this.#m) {
      throw new Error("Trying to set out of boundaries");
    }
    if (val == 0) {
      return;
    }
    const m = this.#points.get(i);
    if (m == undefined) {
      this.#points.set(i, new Map());
    }
    this.#points.get(i)!.set(j, val);
  }
}

const sparse = new SparseMatrix(10, 10);

sparse.set(2, 2, 15);
const x = sparse.get(2, 2);
console.log("a: ", x);
