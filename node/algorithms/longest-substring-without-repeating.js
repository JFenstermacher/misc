// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
  let lookup = {}, res = 0;

  for (let start = 0, end = 0; end < s.length; end++) {
    const curr = s[end];
    const last = lookup[curr];

    if (last !== undefined) start = Math.max(start, last + 1);
    
    lookup[curr] = end;

    res = Math.max(end - start + 1, res);
  }

  return res;
}