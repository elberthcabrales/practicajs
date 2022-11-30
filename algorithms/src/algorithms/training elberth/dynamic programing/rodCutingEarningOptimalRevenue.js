const memo = {}
function rodCutting(n, prices){
  if(n <= 0){
    return 0
  }
  if(memo[n]) {
    return memo[n]
  }
  let maxValue = 0;
  for(let i = 1; i <= n; i++){
    maxValue = Math.max(
      maxValue,
      prices[i-1]+rodCutting(n - i, prices, memo))
  }
  memo[n] = maxValue;
  return  memo[n]
}

function rodCuttingDp(n, pricesValue){
  // create array for save prevValues
  const dp = new Array(n).fill(0);

  for(let rodChunk = 1; rodChunk <= n; rodChunk++){
    let maxValue = 0;
    for(let amount=1; amount <= rodChunk; amount++){
      maxValue = Math.max(maxValue, pricesValue[amount-1] + dp[rodChunk - amount]);
    }
    dp[rodChunk] = maxValue;
  }
  console.log(dp);

  return dp[n];
}

const result = rodCuttingDp(4, [2,3,7,8]);
console.log(9 === result);
