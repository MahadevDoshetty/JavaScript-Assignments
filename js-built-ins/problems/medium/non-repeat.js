/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  let newStr = "";
  if (str.trim() == "" || str.trim() == null || str.trim() == undefined) {
    newStr = null;
    return newStr;
  }
  for (let i = 0; i < str.length; i++) {
    let iterator = str.matchAll(str[i]);
    let arr = Array.from(iterator);
    if (arr.length == 1) {
      newStr += str[i];
    };
  };
  if (newStr.length > 1) {
    newStr = newStr[0];
  };
  if (newStr == "" || newStr == undefined) {
    newStr = null;
  }
  return newStr;
};
let res = nonrepeat("a!b@c#d$a");
console.log(res);
module.exports = nonrepeat;