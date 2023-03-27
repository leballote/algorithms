// I let the user to choose a queue if a more efficient is prefered, I just went for an easy one
export default function hotPotatoGame(
  players: string[],
  queue?: IQueue<string>
) {
  if (queue == undefined) {
    queue = new Queue(players);
  }
  while (queue.length > 1) {
    let rand = getRandomInt(0, 50);
    for (let i = 0; i < rand; i++) {
      const x = queue.dequeue()!;
      queue.enqueue(x);
    }
    const x = queue.dequeue()!;
    console.log(`${x} has lost after ${rand} turns`);
  }
  console.log(`The winner is ${queue.peek()}`);
}

function getRandomInt(lo: number, hi: number) {
  return Math.floor(Math.random() * (hi - lo)) + lo;
}

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  length: number;
}

class Queue<T> implements IQueue<T> {
  #array: T[];

  constructor(initArray: T[] = []) {
    this.#array = initArray;
  }

  enqueue(item: T): void {
    this.#array.push(item);
  }
  dequeue(): T | undefined {
    return this.#array.shift();
  }
  peek(): T | undefined {
    return this.#array[0];
  }

  get length() {
    return this.#array.length;
  }
}

hotPotatoGame(["Luis", "Fer", "Jorge", "Carlos", "Juan", "Pedro", "Sara"]);
