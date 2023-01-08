function findRepeatedSequences(s, k) {
  const mapping = { A: 1, C: 2, G: 3, T: 4};
  const base = Object.keys(mapping).length;
  const window = k;
  const valuesInNumber = [];
  for(let i = 0; i < s.length; i++){
    valuesInNumber.push(mapping[s[i]]);
  }
  const setOfHashing = new Set();
  const result = new Set();
  let hashValue = 0;
  for(let i = 0; i < window; i++){
    hashValue += mapping[s[i]] * Math.pow(base,window-1-i);
  }
  setOfHashing.add(hashValue);
  for(let i = window; i < s.length; i++){
    const slideRemoved = (hashValue  -  (valuesInNumber[i - window] * Math.pow(base,window-1))) * base;
    hashValue = slideRemoved + (valuesInNumber[i] * (Math.pow(base, 0)));// Math.pow(base, 0) is 1 but only to be explicit
    if(setOfHashing.has(hashValue)){
      // todo find index for substring
      result.add(s.substring(i-window+1, i+1));
    }
    setOfHashing.add(hashValue);
  }

  return [...result];
}


function main() {
  let inputStrings = [
    "AGACCTAGAC",
    "ACGT",
    "AAAAACCCCCAAAAACCCCCC",
    "GGGGGGGGGGGGGGGGGGGGGGGGG",
    "TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT",
    "TTTTTGGGTTTTCCA",
    "",
    "AAAAAACCCCCCCAAAAAAAACCCCCCCTG",
    "ATATATATATATATAT",
  ];
  const inputK = [3, 3, 8, 12, 10, 14, 10, 10, 6];

  for (let i = 0; i < inputK.length; i++) {
    console.log(i + 1 + ".\tInput Sequence: '" + inputStrings[i] + "'");
    console.log("\tk:", inputK[i]);
    console.log(
      "\tRepeated Subsequence:",
      console.log(JSON.stringify(findRepeatedSequences(inputStrings[i], inputK[i])))
    );
    console.log("-".repeat(100));
  }
}

main();
