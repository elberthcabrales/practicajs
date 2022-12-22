// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function mergeBinaryTrees(tree1, tree2) {
  // Write your code here.
  const stackTree1 = [tree1]
  const stackTree2 = [tree2]

  while(stackTree1.length > 0){
    const node1 = stackTree1.pop();
    const node2 = stackTree2.pop();

    if(node2 === null) continue; // if branch2 is empty do not update branch 1

    node1.value += node2.value

    if(node1.left === null){
      node1.left = node2.left
    }else{
      stackTree1.push(node1.left);
      stackTree2.push(node2.left)
    }

    if(node1.right === null){
      node1.right = node2.right
    }else{
      stackTree1.push(node1.right);
      stackTree2.push(node2.right)
    }
  }

  return tree1;
}

const chai = require('chai');

it('Test Case #1', function () {
  const tree1 = new BinaryTree(1);
  tree1.left = new BinaryTree(3);
  tree1.left.left = new BinaryTree(7);
  tree1.left.right = new BinaryTree(4);
  tree1.right = new BinaryTree(2);

  const tree2 = new BinaryTree(1);
  tree2.left = new BinaryTree(5);
  tree2.left.left = new BinaryTree(2);
  tree2.right = new BinaryTree(9);
  tree2.right.left = new BinaryTree(7);
  tree2.right.right = new BinaryTree(6);

  const actual = mergeBinaryTrees(tree1, tree2);
  chai.expect(actual.value).to.deep.equal(2);
  chai.expect(actual.left.value).to.deep.equal(8);
  chai.expect(actual.left.left.value).to.deep.equal(9);
  chai.expect(actual.left.right.value).to.deep.equal(4);
  chai.expect(actual.right.value).to.deep.equal(11);
  chai.expect(actual.right.left.value).to.deep.equal(7);
  chai.expect(actual.right.right.value).to.deep.equal(6);
});
