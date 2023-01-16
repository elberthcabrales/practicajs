const weights = [2, 1, 1, 3];
const prices = [2, 8, 1, 10];
const capacity = 4;
const expected = 18;
const numOfPrices = prices.length;
const dp = new Array(numOfPrices + 1).fill(0);

for(let i = 0; i < dp.length; i++){
  dp[i] = new Array(capacity + 1).fill(0);
}

for(let idx = 1; idx <= numOfPrices; idx++){
  for(let partialCapacity = 1; partialCapacity <= capacity; partialCapacity++){
    const currentWeight = weights[idx-1];
    const prevVal = dp[idx - 1][partialCapacity];

    if(partialCapacity >= currentWeight){
      dp[idx][partialCapacity] = Math.max(prices[idx - 1]+dp[idx-1][partialCapacity - currentWeight], prevVal);
    }else{
      dp[idx][partialCapacity] = prevVal;
    }
  }
}

console.log(dp)
