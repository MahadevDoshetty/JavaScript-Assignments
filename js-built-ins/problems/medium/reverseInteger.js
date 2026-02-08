/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  let num1 = num.toString();
  let num2 = "";
  if (num == 0) {
    num2 = 0;
    return num2;
  }
  for (let i = 0; i < num1.length; i++) {
    num2 += num1[num1.length - 1 - i];
  };
  num2 = String(num2);
  if (num < 0) {
    num2 = "-" + num2.slice(0, num2.length - 1);
  }
  return Number(num2);
}
module.exports = reverseInteger;
