function balanced(number: number): string {
  const arr: string[] = number.toString().split("");
  let res: string;
  console.log(
    "case 1",
    arr
      .slice(0, arr.length / 2 - 1)
      .reduce((a, b) => (Number(a) + Number(b)).toString(), ""),
    "case 2",
    arr
      .slice(arr.length / 2)
      .reduce((a, b) => (Number(a) + Number(b)).toString(), "")
  );
  if (arr.length < 3) {
    return "Balanced";
  }
  if (arr.length % 2 != 0) {
    res =
      arr
        .slice(0, Math.floor(arr.length / 2))
        .reduce((a, b) => (Number(a) + Number(b)).toString(), "") ===
      arr
        .slice(Math.floor(arr.length / 2) + 1)
        .reduce((a, b) => (Number(a) + Number(b)).toString(), "")
        ? "Balanced"
        : "Not Balanced";
  } else {
    res =
      arr
        .slice(0, arr.length / 2 - 1)
        .reduce((a, b) => (Number(a) + Number(b)).toString(), "") ===
      arr
        .slice(arr.length / 2 + 1)
        .reduce((a, b) => (Number(a) + Number(b)).toString(), "")
        ? "Balanced"
        : "Not Balanced";
  }
  return res;
}

console.log(balanced(56239814));
