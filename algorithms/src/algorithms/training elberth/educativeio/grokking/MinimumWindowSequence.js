function minWindow(firstStr, secondStr) {
 const secondSizeStr = secondStr.length;
 const firstSizeStr = firstStr.length;

 let windowSize = Infinity;
 let firstIdx = 0;
 let secondIdx = 0;
 let minimumSubStr = '';

 //traverse firstStr
 for(firstIdx = 0; firstIdx < firstSizeStr; firstIdx++){
   if(firstStr[firstIdx] === secondStr[secondIdx]){
     secondIdx++;
     if(secondIdx === secondSizeStr){
       //go back and reduce the window from 0 to firstIdx to n(figure out) to firstIdx
       let fistEndIdx = firstIdx;
       let secondEndIdx = secondIdx;

       while(fistEndIdx >= 0){
         if(firstStr[fistEndIdx] === secondStr[secondEndIdx-1]){
           secondEndIdx--;
           if(secondEndIdx ===0) break;
         }
         fistEndIdx--;
       }

       //validate window smallest
       if((firstIdx-fistEndIdx+1) < windowSize){
         windowSize = (firstIdx-fistEndIdx+1);
         minimumSubStr = firstStr.substring(fistEndIdx, firstIdx+1);
       }
       secondIdx = 0;
       firstIdx--;
     }
   }
}

 return minimumSubStr;
}

function main() {
  let str1 = [
    "wwteyawty",
    "abcdebdde",
    "fgrqsqsnodwmxzkzxwqegkndaa",
    "aaabbcbq",
    "zxcvnhss",
    "alpha",
    "beta",
    "asd",
    "abcd",
  ];
  let str2 = ["wty", "bde", "kzed", "abc", "css", "la", "ab", "as", "pp"];

  for (let i = 0; i < str1.length; i++) {
    console.log(
      i + 1 + ". \tInput string: (" + str1[i] + ", " + str2[i] + ")"
    );
    console.log("\tSubsequence string:", minWindow(str1[i], str2[i]));
    console.log("-".repeat(100));
  }
}

main();
