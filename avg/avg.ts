function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  let avg =
    classPoints.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      yourPoints
    ) /
    (classPoints.length + 1);

  return yourPoints > avg ? true : false;
}

console.log(betterThanAverage([4, 7, 5, 8, 9, 4, 4], 8));
