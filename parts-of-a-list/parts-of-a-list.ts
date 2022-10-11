class PartList {
  display(arr: string[]): string[][] {
    let list = [...arr];
    let lista = arr.map((i, index) => [
      arr.slice(0, index + 1).join(" "),
      arr.slice(index + 1, arr.length).join(" "),
    ]);
    return lista.splice(0, lista.length - 1);
  }
}

const part = new PartList();
console.log(part.display(["az", "toto", "picaro", "zone", "kiwi"]));
