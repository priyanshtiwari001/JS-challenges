function countOccurrences(value, char) {
  const stringOfArray = value.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (stringOfArray[i] === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
