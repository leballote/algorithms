type OpeningBracket = "(" | "[" | "{";
type ClosingBracket = ")" | "]" | "}";

export default function isBalanced(str: string): boolean {
  if (str.length == 0) {
    return true;
  }
  const stack: OpeningBracket[] = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i] as OpeningBracket | ClosingBracket;
    if (isOpening(ch)) {
      stack.push(ch);
    } else {
      if (stack.length <= 0) {
        return false;
      }
      const op = stack.pop()!;
      if (closingBrace(op) !== ch) {
        return false;
      }
    }
  }
  return stack.length <= 0;
}

function closingBrace(opening: OpeningBracket): ClosingBracket {
  switch (opening) {
    case "(":
      return ")";

    case "[":
      return "]";

    case "{":
      return "}";

    default: {
      throw new Error("Unexpected symbol");
    }
  }
}

function isOpening(x: string): x is OpeningBracket {
  return ["(", "[", "{"].includes(x);
}
