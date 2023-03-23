import { inspect } from "util";

export type Node<T> = {
  value: T;
  next: Node<T> | null;
};

export default function createLinkedListFromArray<T>(
  array: T[]
): Node<T> | null {
  if (array.length === 0) {
    return null;
  }
  const head: Node<T> = {
    value: array[0],
    next: null,
  };

  let current: Node<T> = head;
  for (let i = 0; i < array.length - 1; i++) {
    const newNode: Node<T> = {
      value: array[i + 1],
      next: null,
    };
    current.next = newNode;
    current = current.next;
  }

  return head;
}

export function print(ob: any, tag?: string) {
  if (!tag) {
    tag = "";
  }
  console.log(
    tag,
    inspect(ob, { showHidden: false, depth: null, colors: true })
  );
}
