export default class SymmetricMatrix {
  #matrix: number[][];
  constructor(matrix: number[][]) {
    const n = matrix.length;
    const m = matrix[0]?.length ?? 0;
    if (n !== m) {
      throw new Error("A symmetrix matrix can only be a square matrix");
    }
    this.#matrix = Array(n);
    for (let i = 0; i < n; i++) {
      this.#matrix[i] = Array(n - i);
      for (let j = i; j < m; j++) {
        this.#matrix[i][n - j - 1] = matrix[i][j];
      }
    }
  }

  get(i: number, j: number): number {
    const n = this.#matrix.length;
    if (i > j) {
      return this.get(j, i);
    }
    return this.#matrix[i][n - j - 1];
  }

  set(i: number, j: number, val: number): void {
    const n = this.#matrix.length;
    if (i > j) {
      return this.set(j, i, val);
    }
    this.#matrix[i][n - j - 1] = val;
  }

  //make it readonly via proxies, so you can see the underlying array but not modify it and break the ds invariant
  getMatrix() {
    const out = new Proxy(this.#matrix, {
      get(target, p) {
        const out = new Proxy(target[p as any], {
          set(..._args) {
            return true;
          },
        });
        return out;
      },
      set(..._args) {
        return false;
      },
    });
    return out;
  }
}

const example = [
  [1, 2, 17],
  [2, 5, -11],
  [17, -11, 9],
];
const symm = new SymmetricMatrix(example);
const a = symm.get(1, 2);
const b = symm.get(2, 1);
console.log("a: ", a);
console.log("b: ", b);

const under = symm.getMatrix();
console.log(under);
under[0][1] = 99;
console.log(under);
