import { Node, print } from "../utils";

//This is a max priority queue, it is trivial to define its min counterpart
export default class PriorityQueueLinkedList<T> {
  public head: Node<T> | null;
  #length: number;
  constructor() {
    this.head = null;
    this.#length = 0;
  }

  push(val: T): void {
    const newNode: Node<T> = {
      value: val,
      next: null,
    };
    this.#length++;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (this.head.value < val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let curr: Node<T> | null = this.head;
    // console.log("head", this.head);

    while (curr) {
      if (!curr.next) {
        curr.next = newNode;
        return;
      }

      if (curr.next.value < val) {
        newNode.next = curr.next;
        curr.next = newNode;
        return;
      }
      curr = curr.next;
    }
  }

  top(): T | undefined {
    return this.head?.value;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.#length--;
    //you could cleanup this.#head.next first, but in the course they didn't do it, and I remmember that it is handeled by the garbage collector anyways
    const out = this.head.value;
    this.head = this.head.next;
    return out;
  }

  get length() {
    return this.#length;
  }
}

const pq = new PriorityQueueLinkedList();

pq.push(7);
pq.push(2);
pq.push(11);
pq.push(4);
const x = pq.pop();

print(pq);
console.log(x);
