import Node from "./Node.js"
import Tree from "./Tree.js";


let tree = new Tree();

const array = [1 , 6 , 9, -8, 47, 30, 22]; //array with value for testing

tree.prepareArray(array) // order and store sorted and prepared array with values
tree.root = tree.buildTree(tree.preparedArray); //build binary tree and store values in tree.root
tree.prettyPrint(tree.root); //prints balanced tree
