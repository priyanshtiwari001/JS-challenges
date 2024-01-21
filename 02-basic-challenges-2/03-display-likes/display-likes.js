function displayLikes(arr) {
  let len = arr.length;
  switch (len) {
    case 0:
      return "no one likes this";
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}

module.exports = displayLikes;

console.log(displayLikes(["Peter"]));

// let len = arr.length;

// if (len == 0) return "no one likes this";
// else if (len == 1) return `${arr[0]} likes this`;
// else if (len == 2) return `${arr[0]} and ${arr[1]} like this`;
// else if (len == 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
// else return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
