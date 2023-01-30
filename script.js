import Node from "./Node.js"
import Tree from "./Tree.js";


let tree = new Tree();

let array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)); //array with length 100 with numbers from 0 to 99

tree.prepareArray(array) // order and store sorted and prepared array with values
tree.root = tree.buildTree(tree.preparedArray); //build binary tree and store values in tree.root

console.log(tree.isBalanced(tree.root));

console.log("//Level order:", tree.levelOrder(tree.root));
console.log("//Preorder:", tree.preOrder(tree.root));
console.log("//Inorder:", tree.preOrder(tree.root));
console.log("//Post order:", tree.postOrder(tree.root));

//adding random numbers to unbalance it
array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000)); //array with length 100 with numbers from 0 to 99
array.forEach(el => tree.insert(tree.root, el));

console.log(tree.isBalanced(tree.root));
tree.reBalance(tree.root);
console.log(tree.isBalanced(tree.root));

console.log("//Level order:", tree.levelOrder(tree.root));
console.log("//Preorder:", tree.preOrder(tree.root));
console.log("//Inorder:", tree.preOrder(tree.root));
console.log("//Post order:", tree.postOrder(tree.root));
