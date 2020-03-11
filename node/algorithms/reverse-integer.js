// https://leetcode.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  const MAX = 0x7FFFFFFF;

  let reversed = 0;
  let sign = x < 0;
  x = Math.abs(x);

  while (x) {
    reversed = reversed*10 + (x % 10);
    x = x/10 | 0; // Math.floor but faster.
  }

  return reversed > MAX ? 0 : sign ? reversed : -reversed;
}