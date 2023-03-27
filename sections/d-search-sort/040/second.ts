// I do think that this optimal solution the best for both stream and array formed data
export default function findSecondLargestInStream(
  numbersGen: Generator<number>
) {
  let max = -Infinity;
  let sec = -Infinity;
  for (const el of numbersGen) {
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

function* gen(nums: number[]) {
  for (const num of nums) {
    yield num;
  }
}

const g = gen([4, 3, 7, 2, 5, 1]);

const ans = findSecondLargestInStream(g);
console.log("ans", ans);
