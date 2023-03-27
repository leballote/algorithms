export default function findKLargest(numbers: number[], k: number): number[] {
  const largests = new Heap(k);
  for (const num of numbers) {
    if (largests.length < k) {
      largests.push(num);
    } else {
      if (largests.peak()! < num) {
        largests.pop();
        largests.push(num);
      }
    }
  }
  return largests.array;
}

class Heap {
  public length: number;
  public capacity: number;
  public array: number[];
  constructor(k: number) {
    this.length = 0;
    this.capacity = k;
    this.array = Array(this.capacity);
  }
  push(item: number) {
    if (this.length == this.capacity) {
      throw new Error("Heap at maximum capacity");
    }
    this.array[this.length] = item;
    let i = this.length;
    while (i > 0 && this.array[i] < this.array[this.#parent(i)]) {
      this.#swap(i, this.#parent(i));
      i = this.#parent(i);
    }
    this.length++;
  }

  pop(): number | undefined {
    if (this.length <= 0) {
      return undefined;
    }
    this.length--;
    const value = this.array[0];
    this.#swap(0, this.length);
    this.array[this.length] = undefined as any;

    let i = 0;

    while (i < this.length) {
      const l = this.#left(i);
      const r = this.#right(i);
      let minIdx: number;
      if (l > this.length) {
        return value;
      } else if (r > this.length) {
        minIdx = l;
      } else {
        minIdx = this.array[l] > this.array[r] ? r : l;
      }
      if (this.array[i] < this.array[minIdx]) {
        // this.length--;
        return value;
      } else {
        this.#swap(i, minIdx);
        i = minIdx;
      }
    }

    // this.length--;
    return value;
  }

  peak(): number | undefined {
    return this.array[0];
  }

  #parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  #left(i: number) {
    return 2 * i + 1;
  }

  #right(i: number) {
    return 2 * i + 2;
  }

  #swap(i: number, j: number) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
}

// const x = new Heap(10);
// x.push(3);
// x.push(5);
// x.push(1);
// x.push(20);
// x.push(2);
// x.push(6);
// x.pop();
// console.log(x);

const ex = [5, 3, 7, 22, 1, 4, 3];
const ans = findKLargest(ex, 6);
console.log("ans", ans);
