import Node from "./Node.js"

class Tree{
    constructor(){
        this.preparedArray;
        this.root;
    }
    
    buildTree(array){

        if(array.length == 0) return null;
        
        const middlePosition = Math.trunc(array.length / 2);
        const leftArray = array.slice(0, middlePosition);
        const rightArray = array.slice(middlePosition+1);
        const newNode = new Node();
        newNode.data = array[middlePosition];
        newNode.left = this.buildTree(leftArray);
        newNode.right = this.buildTree(rightArray);

        return newNode;        
    }

    prepareArray(array){ //sort array in ascending order and delete duplicates
        array.sort(function(a, b){return a-b});
        let uniqueArray = [];
        array.forEach(element => {
            if(!uniqueArray.includes(element)) uniqueArray.push(element);
        });
        this.preparedArray = uniqueArray;
    }

    prettyPrint(node, prefix = '', isLeft = true){
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    insert(node, value){
        if(node.data == value) return;
        if(value > node.data && node.right == null){
            const newNode = new Node();
            newNode.data = value;
            node.right = newNode;
            return;
        }
        if(value < node.data && node.left == null){
            const newNode = new Node();
            newNode.data = value;
            node.left = newNode;
            return;
        }
        if(value > node.data) this.insert(node.right, value);
        if(value < node.data) this.insert(node.left, value);
    }

    find(node, value){
        if(node.data == value) return node;
        if(value > node.data && node.right != null) return this.find(node.right , value);
        if(value < node.data && node.left != null) return this.find(node.left, value);
        return "No match";
    }

    levelOrder(node){
        let queue = [];
        let array = []
        queue.push(node)
        while(queue.length != 0){
            let exitNode = queue.shift();
            array.push(exitNode.data);
            if(exitNode.left != null) queue.push(exitNode.left);
            if(exitNode.right != null) queue.push(exitNode.right);
        }
        return array;
    }
    preOrder(node, array = []){
        if(node == null) return;
        array.push(node.data);
        this.preOrder(node.left, array);
        this.preOrder(node.right, array);
        return array;
    }

    inOrder(node, array = []){
        if(node == null) return;
        this.inOrder(node.left, array);
        array.push(node.data);
        this.inOrder(node.right, array);
        return array;
    }

    postOrder(node, array = []){
        if(node == null) return;
        this.postOrder(node.left,array);
        this.postOrder(node.right, array);
        array.push(node.data);
        return array;
    }

    height(node){
        if(node == null) return 0;
        let left = this.height(node.left);
        let right = this.height(node.right);
        return Math.max(left, right) + 1;
    }

    depth(node, nodeRoot){
        if(node == nodeRoot) return 0;
        if(node.data > nodeRoot.data && nodeRoot.right != null) return 1 + this.depth(node, nodeRoot.right);
        if(node.data < nodeRoot.data && nodeRoot.left != null) return 1 + this.depth(node, nodeRoot.left);
        return "No node in binary tree.";
    }

    isBalanced(node){
        if(node == null) return;

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        if(Math.abs(leftHeight - rightHeight) <= 1){
            
            this.isBalanced(node.left);
            this.isBalanced(node.right);

            return "Tree is balanced.";
        }

        return "Tree is not balanced.";
    }

    reBalance(node){
        let arrayTree = this.levelOrder(node);
        this.prepareArray(arrayTree);
        this.root = this.buildTree(this.preparedArray);
    }
}

export default Tree;