import createLinkedListFromArray, { Node, print } from "../utils";

function mergeSortLinkedLists<T>(head: Node<T> | null): Node<T> | null {
  let curr = head;
  let n = 0;
  while (curr) {
    n++;
    curr = curr.next;
  }

  return aux(head, n);
}

function aux<T>(head: Node<T> | null, n: number): Node<T> | null {
  if (n == 0) {
    return null;
  }
  if (n == 1) {
    return head;
  }
  const n1 = Math.floor(n / 2);
  const n2 = n - n1;
  let curr = head;
  for (let i = 0; i < n1 - 1; i++) {
    curr = curr!.next;
  }
  const temp = curr!.next;
  curr!.next = null;
  curr = temp;

  const a = aux(head, n1);
  const b = aux(curr, n2);

  const x = merge(a, b);

  return x;
}

function merge<T>(head1: Node<T> | null, head2: Node<T> | null) {
  if (head1 == null) {
    return head2;
  }
  if (head2 == null) {
    return head1;
  }

  const cond = head1.value < head2.value;
  let head = cond ? head1 : head2;
  let tail = head;

  let p1 = cond ? head1.next : head1;
  let p2 = cond ? head2 : head2.next;

  while (p1 && p2) {
    let next: Node<T> | null;
    if (p1.value < p2.value) {
      next = p1;
      p1 = p1.next;
    } else {
      next = p2;
      p2 = p2.next;
    }
    tail.next = next;
    tail = tail.next;
  }
  if (p1) {
    tail.next = p1;
  }
  if (p2) {
    tail.next = p2;
  }
  return head;
}

// const head1 = createLinkedListFromArray([1, 3, 5, 7, 8]);
// const head2 = createLinkedListFromArray([2, 2, 4, 6]);
// const merged = merge(head1, head2);
// print(merged, "merged");

const head = createLinkedListFromArray([2, 5, 7, 3, 1, 8]);

const newHead = mergeSortLinkedLists(head);
print(newHead, "merge sorted");
