class Balanced {
  validate(number: number): string {
    const arr: string[] = number.toString().split("");
    let res: string;

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
}

const balancedNumber = new Balanced();
console.log(balancedNumber.validate(56239824));
