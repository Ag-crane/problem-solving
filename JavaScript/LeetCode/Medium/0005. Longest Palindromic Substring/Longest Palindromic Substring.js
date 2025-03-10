/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0, maxLength = 0;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    // 홀수 길이 palindrome 체크
    let [left1, right1] = expandFromCenter(i, i);
    if (right1 - left1 + 1 > maxLength) {
      start = left1;
      maxLength = right1 - left1 + 1;
    }

    // 짝수 길이 palindrome 체크
    let [left2, right2] = expandFromCenter(i, i + 1);
    if (right2 - left2 + 1 > maxLength) {
      start = left2;
      maxLength = right2 - left2 + 1;
    }
  }

  return s.substring(start, start + maxLength);
};