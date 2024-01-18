function fizzBuzzArray(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    //let str = i.toString();
    //arr.push(replace);
    if (i % 3 == 0 && i % 5 != 0) {
      // let replace = str.replace(str, "Fizz");
      arr.push("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      // let replace = str.replace(str, "Buzz");
      arr.push("Buzz");
    } else if (i % 5 == 0 && i % 3 == 0) {
      //let replace = str.replace(str, "FizzBuzz");
      arr.push("FizzBuzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

module.exports = fizzBuzzArray;

// const i = "45";

// if (i % 3 == 0 && i % 5 != 0) {
//   console.log("FIZZ");
// } else if (i % 5 == 0 && i % 3 != 0) {
//   console.log("BUZZ");
// } else if (i % 5 == 0 && i % 3 == 0) {
//   console.log("FIZZBUZZ");
// } else {
//   console.log(i);
// }
