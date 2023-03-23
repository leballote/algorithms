export default function lev(a: string, b: string): number {
  if (b.length == 0) {
    return a.length;
  }
  if (a.length == 0) {
    return b.length;
  }
  if (a[0] == b[0]) {
    return lev(a.slice(1), b.slice(1));
  }
  return (
    1 +
    Math.min(
      lev(a.slice(1), b),
      lev(a, b.slice(1)),
      lev(a.slice(1), b.slice(1))
    )
  );
}
