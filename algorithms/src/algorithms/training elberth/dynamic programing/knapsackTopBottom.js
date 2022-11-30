
const weights = [1, 3, 4, 5]; // The value of all available items
const prices = [1, 4, 5, 7]; // The weights of available items
const capacityFull = 7; // The maximum weight we can carry in our collection
const numOfPrices = prices.length;
const DP = new Array(numOfPrices + 1).fill(0);

for (let i = 0; i < numOfPrices + 1; i++) {
  DP[i] = new Array(capacityFull + 1).fill(0);
}

for (let priceIdx = 1; priceIdx <= numOfPrices; priceIdx++) {
  for (let capacity = 1; capacity <= capacityFull; capacity++) {
    const prevVal = DP[priceIdx - 1][capacity];
    const currentWeight = weights[priceIdx - 1];

   if (currentWeight <= capacity) {
     //[i - 1] es el row y [j - currentWeight] es el sobrante del peso para ver en que valor alcanza
     DP[priceIdx][capacity] = Math.max( prices[priceIdx - 1] + DP[priceIdx - 1][capacity - currentWeight], prevVal);
    } else {
      DP[priceIdx][capacity] = prevVal;
    }
  }
}

console.log(DP);
