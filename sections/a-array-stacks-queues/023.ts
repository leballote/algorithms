export default function changeBase(x: number, base: number): string {
  let res = x;
  const stack: number[] = [];
  console.log("division", "quotient", "remainder");
  while (res > 0) {
    let mod = res % base;
    res = Math.floor(res / base);
    stack.push(mod);
  }
  let out = "";
  while (stack.length > 0) {
    out += String(stack.pop());
  }
  return out;
}

const x = changeBase(917, 5);
console.log("x", x);
