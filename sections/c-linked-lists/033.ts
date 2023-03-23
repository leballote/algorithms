import createLinkedListFromArray, { Node } from "../utils";

//I am assuming the length is not self managed by the data structure
export default function getKthToLast<T>(
  head: Node<T> | null,
  k: number
): Node<T> | null {
  if (head == null || k < 0) {
    return null;
  }
  //find length
  let length = 0;
  let current: Node<T> | null = head;
  while (current) {
    current = current.next;
    length++;
  }

  current = head;
  if (length < k) {
    return null;
  }
  for (let i = 0; i < length - k - 1; i++) {
    current = current!.next;
  }
  return current;
}

const li = createLinkedListFromArray([0, 1, 2, 3, 4, 5, 6, 7]);
const ans = getKthToLast(li, 0);
console.log("ans", ans);
