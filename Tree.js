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
}

export default Tree;