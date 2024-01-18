// function arrayIntersection(arr1, arr2) {
//   let arrayIntersection = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1.includes(arr2[i]) && !arrayIntersection.includes(arr2[i])) {
//       arrayIntersection.push(arr2[i]);
//     }
//   }

//   return arrayIntersection;
// }

// module.exports = arrayIntersection;

//* If len of n and m is not same.

let arr1 = [1, 2, 3, 4, 5, 67, 2];
let arr2 = [2, 3, 45, 1, 3, 67];

let unique = new Set();

for (let i = 0; i < arr1.length; i++) unique.add(arr1[i]);
console.log(unique);
let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (unique.has(arr2[i])) {
    console.log("arr2[i]", arr2[i]);
    count++;
    unique.delete(arr2[i]);
  }
}
console.log(unique);
console.log(count);
