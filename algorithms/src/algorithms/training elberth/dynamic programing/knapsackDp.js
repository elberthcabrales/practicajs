const weights = [1, 3, 4, 5]; // The value of all available items
const prices = [1, 4, 5, 7]; // The weights of available items
const capacity = 7; // The maximum weight we can carry in our collection
const numOfPrices = prices.length;
const dp = new Array(numOfPrices + 1).fill(0);

for(let i = 0; i < dp.length; i++){
  dp[i] = new Array(capacity + 1).fill(0);
}

for(let idxPrice = 1; idxPrice <= numOfPrices; idxPrice++){
  for(let partialCapacity = 1; partialCapacity <= capacity; partialCapacity++){
    const currentWeight = weights[idxPrice-1];
    const prevVal = dp[idxPrice - 1][partialCapacity];

    if(partialCapacity >= currentWeight){
      dp[idxPrice][partialCapacity] = Math.max(prices[idxPrice - 1]+dp[idxPrice-1][partialCapacity - currentWeight], prevVal);
    }else{
      dp[idxPrice][partialCapacity] = prevVal;
    }
  }
}

console.log(dp)
