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