//* the problem in my approach is that i m removing only the spaces and commas . let's say if user add some special character then it willl not remove and we will get the error
/* function isPalindrome(str) {
  //remove the commoas and spaces
  const arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (arr[i] == ",") {
      arr[i] = arr[i].replace(",", "");
    } else if (arr[i] == " ") {
      arr[i] = arr[i].replace(" ", "");
    }
  }
  let newStr = arr.join("").toLowerCase();

  // reverese the string
  let arr1 = newStr.split("");
  let reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    //reverse = reverse + arr[i];
    reverse.push(arr1[i]);
  }

  if (reverse.join("") == newStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
 */

//* Better approach >>

function isPalindrome(str) {
  // remove all the special charcter from the original string
  let formattedStr = removeNonAplhaNumeric(str.toLowerCase()); //
  let reveresed = reverseString(formattedStr);

  return formattedStr === reveresed;
}

function removeNonAplhaNumeric(str) {
  let formatStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //console.log(i, char);
    if (isAplhaNumeric(char)) {
      formatStr += char;
    }
  }
  return formatStr;
}

// // to check wether we will get only numbers and aplha value in lower case
function isAplhaNumeric(char) {
  let code = char.charCodeAt(0);
  //console.log(code);
  return (
    (code >= 48 && code <= 57) || //? [0-9]
    (code >= 97 && code <= 122)
  ); //? [a-z]
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = isPalindrome;
