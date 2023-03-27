export default function findSecondLargest(a: number[]) {
  let max = -Infinity;
  let sec = -Infinity;
  for (const el of a) {
    if (el >= max) {
      const temp = max;
      max = el;
      sec = temp;
    } else if (el > sec) {
      sec = el;
    }
  }
  return sec;
}

const ans = findSecondLargest([12, 35, 1, 10, 36, 1]);
console.log("ans", ans);
