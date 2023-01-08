var minWindow = function (s, t) {
  // Empty string scenario
  if (t === "") return "";
  let windowSize = Infinity;
  let minimumSubString = '';
  let counter = 0;
  let l = 0;
  let r = 0;
  const targetMapped = {};
  const strMapped = {};

  for(let e of t){
    targetMapped[e] = 1 + (targetMapped[e] ? targetMapped[e] : 0);
  }

  const required = Object.keys(targetMapped).length;

  for(r; r < s.length; r++){
    const charRight = s[r];
    strMapped[charRight] = 1 + (strMapped[charRight] ? strMapped[charRight]: 0);

    if(strMapped[charRight] === targetMapped[charRight]){
      counter++;
    }

    while(required === counter){
      if(r - l + 1 < windowSize){
        windowSize = r - l + 1;
        minimumSubString = s.substring(l, r+1);
      }

      // decrease windowSize
      const charLeft = s[l];
      strMapped[charLeft] -= 1;
      if(targetMapped[charLeft] && targetMapped[charLeft] > strMapped[charLeft]){
        counter--;
      }
      l++;
    }

  }

  return minimumSubString;
};


function main() {
  let s = ["ABDOEDECOBE","PATTERN", "LIFE", "ABRACADABRA", "STRIKER", "DFFDFDFVD"],
    t = ["BC","TN", "I", "ABC", "RK", "VDD"];

  for (let i = 0; i < s.length; i++) {
    console.log(
      i + 1 + ".\ts:",
      s[i],
      "\n\tt:",
      t[i],
      "\n\tThe minimum substring containing",
      t[i],
      "is:",
      minWindow(s[i], t[i])
    );
    console.log("-".repeat(100));
  }
}

main();
