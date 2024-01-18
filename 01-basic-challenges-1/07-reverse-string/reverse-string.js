function reverseString(str) {
  let arr = str.split("");
  let reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    //reverse.push(arr[i]);
    reverse += arr[i];
  }
  return reverse.join("");
}

module.exports = reverseString;

// const name = "priyanshu";

// let arr = name.split("");
// let reverse = [];
// for (let i = name.length - 1; i >= 0; i--) {
//   reverse.push(arr[i]);
// }
// console.log(reverse.join(""));
