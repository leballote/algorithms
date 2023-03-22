export default function isBalanced(str: string): number {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      c++;
    } else {
      c--;
    }
    if (c < 0) {
      return -1;
    }
  }
  return c;
}

const x0 = ""; // 0
const x1 = "(())"; // 0
const x2 = "())("; // -1
const x3 = "(()(("; // 3
const x4 = "(()(())"; // 1
const x5 = "(()(()))"; // 0
console.log(isBalanced(x0));
console.log(isBalanced(x1));
console.log(isBalanced(x2));
console.log(isBalanced(x3));
console.log(isBalanced(x4));
console.log(isBalanced(x5));
