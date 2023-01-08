var findMaxSlidingWindow = function (nums, windowSize) {

  let result = [],
    window = [];

  if (nums.length == 0) return result;

  if (windowSize > nums.length) windowSize = nums.length;

  // [10,3,1,2,0,5],
  // i-0->[10]-1->[10,3]-2->[10,3,1]
  for (let i = 0; i < windowSize; i++) {
    while (nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }
  //[10]
  result.push(nums[window[0]]);

  //[10,3,1]
  //-i-3->[
  for (let i = windowSize; i < nums.length; i++) {
    if (window[0] <= i - windowSize){ // if [3] <= 0 remove first
      window.shift();
    }

    while (nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
    result.push(nums[window[0]]);
  }

  return result;
};

const findMaxSlidingWindow2 = function (arr, w){
  const window = [0];
  const result = [];
  let windowSize = w > arr.length ? arr.length : w;
  //  [10,3,1,2,0,5]
  for(let i = 1; i < windowSize; i++){
    if(arr[i] > arr[window[window.length -1]]){
      window.pop();
    }
    window.push(i);
  }

  result.push(arr[window[0]]);
  // window is complete now slide idx 0 if it is
  for(let i = windowSize; i < arr.length; i++){
    if(window[0] <= i - windowSize){
      window.shift(); // remove the first
    }
    while(arr[i] > arr[window[window.length - 1]]){
      window.pop();
    }

    window.push(i);
    result.push(arr[window[0]]);
  }

  return result;
};

function main() {
  let targetList = [3,3, 3, 3, 3, 2, 4, 3, 2, 3, 18];
  const numsList = [
    [10,3,1,2,0,5],
    [10, 11, 12, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12, 14, 18, 22, 26, 26, 26, 28, 29, 30],
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    [4, 5, 6, 1, 2, 3],
    [9, 5, 3, 1, 6, 3],
    [2, 4, 6, 8, 10, 12, 14, 16],
    [-1, -1, -2, -4, -6, -7],
    [4, 4, 4, 4, 4, 4],
  // to review
  ];

  for (let i = 0; i < numsList.length; i++) {
    console.log(i + 1 + ".\tOriginal array:\t", JSON.stringify(numsList[i]));
    console.log("\tWindow size:\t\t", targetList[i]);
    console.log(
      " \n\tMax:\t\t",
      JSON.stringify(findMaxSlidingWindow2(numsList[i], targetList[i]))
    );
    console.log("-".repeat(100));
  }
}

main();
