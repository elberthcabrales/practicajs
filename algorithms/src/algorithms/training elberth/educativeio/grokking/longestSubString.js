var findLongestSubstring = function (inputString) {
  if(inputString.length === 0) return 0;
  let idx = 0;
  let subStrIdx = 0 ; // key of calculated
  let windowSize = -Infinity;
  const charIdxCollector = {};

  while(idx < inputString.length){
    const char = inputString[idx];

    if(charIdxCollector[char] >= 0){
      if(charIdxCollector[char] >= subStrIdx){
        const currLen = idx - subStrIdx;
        if(windowSize < currLen){
          windowSize = currLen;
        }
        //move one position in front
        subStrIdx = charIdxCollector[char] + 1;
      }

      charIdxCollector[char] = idx;
    }else{
      charIdxCollector[char] = idx;
    }

    idx++;
  }

  const currLen = idx - subStrIdx;
  if(windowSize < currLen){
    windowSize = currLen;
  }

  return windowSize !== -Infinity ? windowSize : 0;
};

function main() {
  let inputString = [
    "abcdbea",
    "ABCDEDCBA",
    "pwwkew",
    "abcabcbb",
    "bbbbb",
    "ababababa",
    "",
    "ABCDEFGHI",
    "AAAABBBBCCCCDDDD",
  ];

  for (let i = 0; i < inputString.length; i++) {
    console.log(i + 1 + ". \t Input String:", inputString[i]);
    console.log(
      "\t Length of longest substring:",
      findLongestSubstring(inputString[i])
    );
    console.log("-".repeat(100));
  }
}

main();
