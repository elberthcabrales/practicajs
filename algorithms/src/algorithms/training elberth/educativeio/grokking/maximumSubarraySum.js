function maximumSubarraySum(nums, k){
  const frequencies = new Map();
  let maxValue = 0;
  let currentSum = 0;
  let idx = 0;
  for(idx; idx < k; idx++){
    const num = nums[idx];
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
    currentSum += num;
  }
  if(frequencies.size === k){
    maxValue = Math.max(maxValue, currentSum);
  }
  while(idx < nums.length){
    const numToSlide = nums[idx - k];
    currentSum -= numToSlide;
    frequencies.set(numToSlide, (frequencies.get(numToSlide) || 0) - 1);

    if(frequencies.get(numToSlide) === 0){
      frequencies.delete(numToSlide);
    }

    const num = nums[idx];
    currentSum += num;

    frequencies.set(num, (frequencies.get(num) || 0) + 1);

    if(frequencies.size === k){
      maxValue = Math.max(maxValue, currentSum);
    }

    idx++;
  }


  return maxValue;
}


const nums = [1,5,4,2,9,9,9,1,2]; // 20 expected
const k = 4;

console.log(maximumSubarraySum(nums, k))
