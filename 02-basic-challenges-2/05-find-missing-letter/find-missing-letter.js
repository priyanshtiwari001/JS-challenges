function findMissingLetter(arr) {
  if (!arr.length) return "";
  let start = arr[0].charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].charCodeAt(0); //prefer the first letter of word
    //let current = arr[i].charCodeAt(); //* same meaning aas above
    // console.log("current ", current);
    //console.log(current - start);
    //console.log(current - start > 1);
    if (current - start > 1) {
      // console.log(String.fromCharCode(start + 1));
      return String.fromCharCode(start + 1);
    }
    start = current;
    //console.log("start", start);
  }
}

module.exports = findMissingLetter;

// let a = "c".charCodeAt();
// let b = String.fromCharCode(a);
// console.log(a, b);
