// function removeDuplicates(arr) {
//   let unqiueData = new Set([...arr]);
//   return [...unqiueData];
// }

// module.exports = removeDuplicates;

function removeDuplicates(arr) {
  let unqiueData = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unqiueData.includes(arr[i])) {
      unqiueData.push(arr[i]);
    }
  }
  return unqiueData;
}

module.exports = removeDuplicates;
