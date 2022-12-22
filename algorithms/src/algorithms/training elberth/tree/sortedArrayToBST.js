class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const sortedArrayToBST = function(nums) {
  return traverse(nums,0,nums.length-1);
};

function traverse(nums,start,end){
  if(start>end){
    return null;
  }

  let mid = Math.floor((start+end)/2);
  let root = new TreeNode(nums[mid]);
  root.left = traverse(nums,start,mid-1);
  root.right = traverse(nums,mid+1,end);

  return root;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));
/***
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 */
