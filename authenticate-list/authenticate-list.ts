export function authList(arr: string[]): boolean {
  function validateUser(str: string) {
    let a = str.split("");
    let result =
      5 < str.length &&
      str.length < 11 &&
      a.some(
        (i) => i === i.toLowerCase() && i.toUpperCase() != i.toLowerCase()
      ) &&
      a.some((i) => !isNaN(Number(i))) &&
      a.filter((i) => !isNaN(Number(i)) || i.toUpperCase() != i.toLowerCase())
        .length === str.length;

    return result;
  }
  arr.every((i) => validateUser(i));
  return arr.every((i) => validateUser(i));
}

const usernames1 = ["john123", "alex222", "sandra1"];
const usernames2 = ["john123", "alex222", "sandraW"];
const usernames3 = ["john_123", "alex222", "sandra1"];
const usernames4 = [""];
const usernames5 = ["123456"];
const usernames6 = ["abcdef"];
console.log(authList(usernames1));
