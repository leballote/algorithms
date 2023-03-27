// I do think that this optimal solution the best for both stream and array formed data
//node streams version

//TODO: finish this version
export default function findSecondLargestInStream(stream: ReadableStream) {
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
