/**
 * Input:
 * S = "aabacbebebe", K = 3
 * Output: 7
 * Explanation: "cbebebe" is the longest
 * substring with K distinct characters.
 *
 * Input:
 * S = "aaaa", K = 2
 * Output: -1
 * Explanation: There's no substring with K
 * distinct characters.
 *
 * input:
 * S = 2aabbacbaa
 * output: aabba
 */

function kUniqueSubstring(str){

  const k = Number(str.slice(0,1));
  str = str.slice(1);
  let map = new Map();
  let arr = [];
  let maxValue = -1;
  let start = 0;
  for(let i = 0; i < str.length; i++){



  }
  return maxValue;
}

function longestKUniqueSubstring(s, k) {
  let left = 0, right = 0;
  let maxLength = 0;
  let charCount = new Map();
  let uniqueCount = 0;
  let start = 0;
  while (right < s.length) {
    if (!charCount.has(s[right])) {
      uniqueCount++;
    }
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
    while (uniqueCount > k) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) {
        uniqueCount--;
      }
      left++;
    }
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
    }
    right++;
  }
  return s.substring(start, start + maxLength);
}
console.log(longestKUniqueSubstring("aabacbebebe", 3));
// Output: "cbebebe"


const input1 = '2aabbacbaa';
console.log(
  kUniqueSubstring(input1),
)
