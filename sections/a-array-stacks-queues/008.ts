function addArrayNumbers(a: number[], b: number[]): number[] {
  if (b.length > a.length) {
    return addArrayNumbers(b, a);
  }
  const result: number[] = [];
  let r = 0;
  for (let i = 0; i < a.length; i++) {
    const a1 = a[a.length - 1 - i];
    const b1 = b[b.length - 1 - i] ?? 0;
    const sum = a1 + b1 + r;
    const modSum = sum % 10;
    r = Number(sum >= 10);
    result.push(modSum);
  }
  if (r == 1) {
    result.push(r);
  }
  result.reverse();
  return result;
}

const res = addArrayNumbers([9, 9], [1]);
console.log("res", res);
