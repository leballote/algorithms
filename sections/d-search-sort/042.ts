export default function findMissingNumber(numbers: number[]) {
  const n = numbers.length + 1;
  const target = (n * (n + 1)) / 2; //this could overflow, I don't know if I have to worry about this
  console.log(target);
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return target - total;
}

const ex = [3, 1];
const ans = findMissingNumber(ex);
console.log("ans", ans);
