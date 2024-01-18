const isPalindrome = require("./palindrome");

test("Checking for palindrome strings", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("Hello")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("eye")).toBe(true);
  expect(isPalindrome("_eye")).toBe(true);
  expect(isPalindrome("race car")).toBe(true);
  expect(isPalindrome("not a palindrome")).toBe(false);
  expect(isPalindrome("nope")).toBe(false);
  expect(isPalindrome("almostomla")).toBe(false);
  expect(isPalindrome("My age is 0, 0 si ega ym.")).toBe(true);
  expect(isPalindrome("1 eye for of 1 eye.")).toBe(false);
  expect(isPalindrome("0_0 (: /- :) 0-0")).toBe(true);
  expect(isPalindrome("five|_/|four")).toBe(false);
});
