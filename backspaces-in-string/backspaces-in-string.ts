function cleanString(s: string): string {
  let res: string = s
    .split("")
    .reduce(
      (prev: string, curr: string) =>
        curr != "#" ? prev + curr : prev.substring(0, prev.length - 1),
      ""
    );
  return res;
}

console.log(cleanString("abc#d##c"));
