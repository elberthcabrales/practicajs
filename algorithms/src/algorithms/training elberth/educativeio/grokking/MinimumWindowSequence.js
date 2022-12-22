function minWindow(str1, str2) {
  // Save the size of str1 and str2
  let sizeStr1 = str1.length,
    sizeStr2 = str2.length;

  // Initialize length to a very large number (infinity)
  let length = Infinity;
  // Initialize pointers to zero and the minSubsequence to an empty string
  let indexS1 = 0,
    indexS2 = 0,
    minSubsequence = "";

  // Process every character of str1
  while (indexS1 < sizeStr1) {
    // Check if the character pointed by indexS1 in str1
    // is the same as the character pointed by indexS2 in str2
    if (str1[indexS1] === str2[indexS2]) {
      // If the pointed character is the same
      // in both strings increment indexS2
      indexS2++;
      // Check if indexS2 has reached the end of str2
      if (indexS2 === sizeStr2) {
        // At this point the str1 contains all characters of str2
        let start = indexS1,
          end = indexS1+1;
        // Initialize start to the index where all characters of
        // str2 were present in str1
        indexS2--;
        // Decrement pointer indexS2 and start a reverse loop
        while (indexS2 >= 0) {
          // Decrement pointer indexS2 until all characters of
          // str2 are found in str1
          if (str1[start] == str2[indexS2]) indexS2 -= 1;
          // Decrement start pointer everytime to find the
          // starting point of the required subsequence
          start -= 1;
        }
        start++;

        // Check if length of sub sequence pointed
        // by start and end pointers is less than current min length
        if (end - start < length) {
          // Update length if current sub sequence is shorter
          length = end - start;
          // Update minimum subsequence string
          // to this new shorter string
          minSubsequence = str1.substring(start, end);
        }

        // Set indexS1 to start to continue checking in str1
        // after this discovered subsequence
        indexS1 = start
        indexS2 = 0
      }
    }
    // Increment pointer indexS1 to check next character in str1
    indexS1++;
  }
  return minSubsequence;
}

function main() {
  let str1 = [
    "qwewerrty",
    "abcdebdde",
    "fgrqsqsnodwmxzkzxwqegkndaa",
    "aaabbcbq",
    "zxcvnhss",
    "alpha",
    "beta",
    "asd",
    "abcd",
  ];
  let str2 = ["werty", "bde", "kzed", "abc", "css", "la", "ab", "as", "pp"];

  for (let i = 0; i < str1.length; i++) {
    console.log(
      i + 1 + ". \tInput string: (" + str1[i] + ", " + str2[i] + ")"
    );
    console.log("\tSubsequence string:", minWindow(str1[i], str2[i]));
    console.log("-".repeat(100));
  }
}

main();
