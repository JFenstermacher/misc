// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  const MIN = 1 << 31;
  const MAX = 0x7FFFFFFF;

  const regex = /^\s*((\+|-)?\d+).*/;
  const match = str.match(regex);
  let res = 0;

  if (match) {
    res = Number(match[1]);

    if (res > MAX) res = MAX;
    else if (res < MIN) res = MIN;
  }

  return res;
};