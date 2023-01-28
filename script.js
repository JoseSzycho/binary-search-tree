import Node from "./Node.js"
import Tree from "./Tree.js";


let tree = new Tree();


tree.prepareArray([1, 2,3,4,5,6,7,8,9,-89,10,11,12])

tree.root = tree.buildTree(tree.preparedArray);


tree.prettyPrint(tree.root)