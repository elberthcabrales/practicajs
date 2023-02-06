function countWays(coins, n){
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; // base case
  for(let i = 1; i <= coins.length; i++){
    const coin = coins[i-1];

    for(let amount = 1; amount <= n; amount++){
      if(coin <= amount){
        dp[amount] += dp[amount - coin];
        console.log(`${JSON.stringify(dp)} coin:${coin} amount:${amount}`);
      }
    }
  }

  return dp[n];
}

const result = countWays([10,20,50], 50)
console.log(result===4);
