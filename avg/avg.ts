class BetterThanAverage {
  check(classPoints: number[], yourPoints: number): boolean {
    let avg =
      classPoints.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        yourPoints
      ) /
      (classPoints.length + 1);

    return yourPoints > avg ? true : false;
  }
}

const jack = new BetterThanAverage();

console.log(jack.check([4, 7, 5, 8, 9, 4, 4], 4));
