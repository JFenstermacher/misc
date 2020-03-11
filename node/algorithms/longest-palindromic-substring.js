// https://leetcode.com/problems/longest-palindromic-substring
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let res = `${s[0]}`;
  for (let i = 1; i < s.length - 1; i++) {
    const odd = helper(s, i, i);
    const even = helper(s, i, i + 1);

    const curr = odd.length > even.length ? odd : even;

    res = curr.length > res.length ? curr : res;
  }

  return res;
}

/**
 * Helper, move outwards from index to detect palindrome.
 * If odd palindrome, i & j start at same initial value.
 * If even palindrome, j = i + 1 
 * @param {string} s 
 * @param {number} i 
 * @param {number} j 
 */
const helper = (s, i, j) => {
  for (; i >= 0 && j < s.length && s[i] === s[j]; i--, j++);

  return s.slice(i + 1, j);
}