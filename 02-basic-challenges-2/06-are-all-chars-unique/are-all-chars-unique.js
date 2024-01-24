// function areAllCharactersUnique(str) {
//   let arr = str.split("");
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//       count++;
//     }
//   }

//   return count > 0 ? false : true;
// }

function areAllCharactersUnique(str) {
  let charSet = new Set();
  console.log(charSet);
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (charSet.has(element)) {
      return false;
    }
    charSet.add(element);
  }
  return true;
}
//module.exports = areAllCharactersUnique;
console.log(areAllCharactersUnique("abcdd"));
