class StringCleaner {
  clean(str: string): string {
    let res: string = str
      .split("")
      .reduce(
        (prev: string, curr: string) =>
          curr != "#" ? prev + curr : prev.substring(0, prev.length - 1),
        ""
      );
    return res;
  }
}

const cleaner1 = new StringCleaner();

console.log(cleaner1.clean("abc#d##c"));
