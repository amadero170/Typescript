class Roman {
  solution(number: number): string {
    const reference = ["I", "V", "X", "L", "C", "D", "M"];

    function indCase(num: number, pos: number): string | undefined {
      switch (true) {
        case num == 0: {
          break;
        }
        case num < 4: {
          return reference[pos].repeat(num);
        }
        case num < 6: {
          return reference[pos].repeat(5 - num) + reference[pos + 1];
        }
        case num < 9: {
          return reference[pos + 1] + reference[pos].repeat(num - 5);
        }
        case num == 9: {
          return reference[pos] + reference[pos + 2];
        }
      }
    }

    let res = number
      .toString()
      .split("")
      .map((item, index, arr) => {
        let refBase: number = (arr.length - 1 - index) * 2;
        let i = Number(item);
        return indCase(i, refBase);
      });
    return res.join("");
  }
}
const test = new Roman();
console.log(test.solution(125));
