export default function displayNumbers() {
  aux(1, 100);
}

function aux(k: number, n: number): boolean {
  console.log(k);
  // aux(k + 1, n)
  return k == n || aux(k + 1, n);
}

displayNumbers();
