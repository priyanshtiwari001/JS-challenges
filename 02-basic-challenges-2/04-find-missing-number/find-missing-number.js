function findMissingNumber(arr) {
  if (!arr.length) {
    return undefined;
  }
  let n = arr.length + 1;
  let sumOfN = (n * (n + 1)) / 2;
  let sumOfArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i];
  }

  return sumOfN - sumOfArray;
}

module.exports = findMissingNumber;
function missingNumber(arr, n) {
  let N = n;
  let sumOfN = (N * (N + 1)) / 2;
  let sumOfArray = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArray += arr[i];
  }
  console.log(sumOfN);
  console.log(sumOfArray);
  console.log(sumOfN - sumOfArray);
}

missingNumber([1, 2, 3, 5], 5);
