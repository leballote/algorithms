class CircularQueue<T> {
  public readonly q: T[];
  public head: number = -1;
  public tail: number = -1;
  #size = 0;
  constructor(initialCapacity: number = 1) {
    this.q = Array(initialCapacity);
  }
  enqueue(item: T): void {
    if (this.size + 1 > this.capacity) {
      //reacomodate the array
      throw new Error("Capacity exceeded");
    }
    if (this.head == -1) {
      this.head = 0;
      this.tail = 0;
    } else {
      this.tail = (this.tail + 1) % this.capacity;
    }

    this.q[this.tail] = item;
    this.#size++;
  }

  dequeue(): T | undefined {
    if (this.size <= 0) {
      return undefined;
    }
    this.#size--;
    const out = this.q[this.head];
    this.head = (this.head + 1) % this.capacity;
    return out;
  }

  peak(): T | undefined {
    if (this.size <= 0) {
      return undefined;
    }
    return this.q[this.head];
  }

  get size(): number {
    return this.#size;
  }

  get capacity(): number {
    return this.q.length;
  }
}

const queue = new CircularQueue<number>(8);
queue.enqueue(1);
console.log("a: ", queue);
queue.enqueue(2);
console.log("b: ", queue);
queue.enqueue(3);
console.log("c: ", queue);
queue.dequeue();
console.log("d: ", queue);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(4);

console.log("e: ", queue);
