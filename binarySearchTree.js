class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {this.root = null;}
    add(data) {
        let node = this.root;
        // Tree is empty -> add node
        if (node === null) {
            this.root = new Node(data);
            return;
        }
        const searchTree = node => {
            // Data is lower than the data of current node
            if (data < node.data) {
                if (node.left === null) {
                    // Add if left node doesn't exist
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    // If left node exist then see where it can be added in the next left subtree
                    return searchTree(node.left);
                }
            } 
            // Data is greater than the data of current node
            else if (data > node.data){
                if (node.right === null) {
                    // Add if right node doesn't exist
                    node.right = new Node(data);
                    return;
                } else if(node.right !== null) {
                    // If right node exist then see where it can be added in the next right subtree
                    return searchTree(node.right);
                }
            } else {
                return null; // Don't add data if it already exists in the tree
            }
        }
        return searchTree(node);
    }
    remove(data) {
        const removeNode = (node, data) => {
            if (node === null) return null;
            // Found the data
            if (node.data === data) {
                // the node has no children
                if (node.right === null && node.left === null) return null;
                // One child node
                // Right child exists
                if (node.left === null) return node.right;
                // Left child exists
                if (node.right === null) return node.left;
                // Both children exists
                let tempNode = node.right;
                while (tempNode.left !== null) tempNode = tempNode.left;
                // Copying the next greater data
                node.data = tempNode.data;
                // Delete the tempNode
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                // Search in the left subtree
                node.left = removeNode(node.left, data);
                return node;
            } else {
                // search in the right subtree
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }
    search(data) {
        // Greater values are present at right side and 
        // lower values are present at the left side.
        if (this.root === null) return null;
        let current = this.root;
        while (current) {
            if (data < current.data) current = current.left;
            else if (data > current.data) current = current.right;
            else return current;
        }
        return null;
    }
    isPresent(data) {
        // Greater values are present at right side and 
        // lower values are present at the left side.
        if (this.root === null) return false;
        let node = this.root;
        while(node) {
            if (data < node.data) node = node.left;
            else if (data > node.data) node = node.right;
            else return true;
        }
        return false;
    }
    findMin() {
        // Minimum value will be present at the leftmost node
        if (this.root === null) return null;
        let node = this.root;
        while (node.left !== null) node = node.left;
        return node.data;
    }
    findMax() {
        // Maximum value will be present at the rightmost node
        if (this.root === null) return null;
        let node = this.root;
        while (node.right !== null) node = node.right;
        return node.data;
    }
    findHeight() {
        // Maximum of the heights of left subtree and the right subtree 
        if (this.root === null) return 0;
        const maxDepth = node => {
            return  1 + Math.max(maxDepth(node.left), maxDepth(node.right));
        }
        return maxDepth(this.root);
    }
    findMinHeight(node=this.root) {
        // This is going to return the height of first occurance of node 
        // (which is in either left or right subtree) where the node doesn't
        // have 2 children.
        if (node === null) return -1;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        return left < right ? left + 1 : right + 1;
    }
    findMaxHeight(node=this.root) {
        // Same logic as findMinHeight but this time we return the value
        // which is greater
        if (node === null) return -1;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        return left > right ? left + 1 : right + 1;
    }
    isBalanced() {
        // The absolute difference between minHeight and maxHeight should 
        // not be greater than 1
        return Math.abs(this.findMaxHeight() - this.findMinHeight()) <= 1;
    }
    inOrder() {
        // Left, Root, Right -> returns sorted array
        if (this.root === null) return null;
        let result = new Array();
        const traverseInOrder = node => {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }
    preOrder() {
        // Root, Left, Right
        if (this.root === null) return null;
        let result = new Array();
        const traversePreOrder = node => {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
        }
        traversePreOrder(this.root);
        return result;
    }
    postOrder() {
        // Left, Right, Root
        if (this.root === null) return null;
        let result = new Array();
        const traversePostorder = node => {
            node.left && traversePostorder(node.left);
            node.right && traversePostorder(node.right);
            result.push(node.data);
        }
        traversePostorder(this.root);
        return result;
    }
    levelOrder() {
        let result = new Array();
        let Q = new Array();
        if (this.root === null) return null;
        Q.push(this.root);
        while(Q.length > 0) {
            let node = Q.shift();
            result.push(node.data);
            if (node.left !== null) Q.push(node.left);
            if (node.right !== null) Q.push(node.right);
        }
        return result;
    }
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin()); // 1
console.log(bst.findMax()); // 7
console.log(bst.search(6)); // Node object
console.log(bst.search(9)); // null
bst.remove(7);
console.log(bst.findMax()); // 6
console.log(bst.isPresent(3)); // true
console.log(bst.findMaxHeight()); // 2
console.log(bst.findMinHeight()); // 1
console.log(bst.isBalanced()); // true
bst.add(4);
console.log(bst.findMaxHeight()); // 3
console.log(bst.findMinHeight()); // 1
console.log(bst.isBalanced()); // false
console.log(`Inorder ${bst.inOrder()}`); // [1, 2, 3, 4, 5, 6]
console.log(`Preorder ${bst.preOrder()}`); // [5, 2, 1, 3, 4, 6]
console.log(`Postorder ${bst.postOrder()}`); // [1, 4, 3, 2, 6, 5]
console.log(`Levelorder ${bst.levelOrder()}`); // [5, 2, 6, 1, 3, 4]