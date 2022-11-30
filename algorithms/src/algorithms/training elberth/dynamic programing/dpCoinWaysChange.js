const coins = [10, 20];
const target = 30;

const dp = new Array(target + 1).fill(0);
dp[0] = 1;

for(let idxCoin = 1; idxCoin < dp.length; idxCoin++){
  const coin = coins[idxCoin-1];
  for(let amount = 1; amount <= target; amount++){
    if(coin <= amount){
      dp[amount] = dp[amount] + dp[amount - coin];
    }
  }
}
console.log(dp);
