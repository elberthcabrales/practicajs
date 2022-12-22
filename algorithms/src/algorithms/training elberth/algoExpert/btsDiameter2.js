// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  const stack = [tree];
  let longest = -1;

  while(stack.length){
    const node = stack.shift();

    if(!node) continue;

    const currentDiameter = calculateHeight(node.left) + calculateHeight(node.right);
    if(currentDiameter > longest){
      longest = currentDiameter;
    }

    stack.unshift(node.right);
    stack.unshift(node.left);
  }

  return longest;
}

function calculateHeight(tree){
  if(!tree) return 0;

  const stack = [[tree, 1]];
  let maxHeight = 0;
  while(stack.length){
    const [node, height] = stack.shift();

    if(!node) continue;
    if(height > maxHeight){
      maxHeight = height;
    }

    stack.unshift([node.right, height + 1]);
    stack.unshift([node.left, height + 1]);
  }

  return maxHeight;
}

const root = new BST(1);
root.left = new BST(3);
root.left.left = new BST(7);
root.left.left.left = new BST(8);
root.left.left.left.left = new BST(9);
root.right = new BST(2);
root.left.right = new BST(4);
root.left.right.right = new BST(5);
root.left.right.right.right = new BST(6);

console.log(binaryTreeDiameter(root)); // 6 expected
