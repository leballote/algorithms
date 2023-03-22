type Direction = 1 | -1;
type Car = [number, Direction];

//I'll assume that there can't be two cars with the same x-coordinate and same direction
// the function could also take a list of directions, because the coordinates are almost irrelevant
function countCarEncounters(cars: Car[]): number {
  let leftCars = 0;
  // let rightCars = 0;
  let total = 0;
  //I don't know if we can asume input sorted by x-coordinate, so I sort it in case
  cars.sort((car1, car2) => car1[0] - car2[0]);

  for (const car of cars) {
    if (car[1] == -1) {
      leftCars++;
    }
  }

  for (const car of cars) {
    if (car[1] == 1) {
      total += leftCars;
    } else {
      leftCars--;
    }
  }
  return total;
}

const x = countCarEncounters([
  [0, 1],
  [1, -1],
  [2, 1],
  [3, 1],
  [4, -1],
  [5, -1],
  [6, 1],
]);

console.log("times: ", x);
