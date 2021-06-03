/* Linked List */
/* A linked list is a linear data structure which dynamically allocates 
memory and consists of multiple nodes.
A node has a pointer to the next node and a value at current pointer */ 
// A Node is a building block of Linked List
var Node = function(element) {
    this.data = element;
    this.next = null;
}
// removeAt

var LinkedList = function() {
    this.length = 0;
    this.head = null;
    // Returns the size of the linked list
    this.size = () => this.length;
    // Adds another node to the end of linked list
    this.add = value => {
        if (this.head === null) {
            const newNode = new Node(value);
            this.head = newNode;
            this.length++;
            return;
        }
        let node = this.head;
        while(node.next !== null) node = node.next;
        node.next = new Node(value);
        this.length++;
    }
    // Removes the node which holds the specific value
    this.remove = value => {
        if (this.head === null) return;
        let node = this.head;
        let previousNode;
        while(node) {
            if(node.data === value) {
                previousNode.next = node.next;
                this.length--;
                return;
            } 
            previousNode = node;
            node = node.next;
        }
    }
    // Returns if the linked list is empty or not
    this.isEmpty = () => this.head === null;
    // Prints all the elements in the linked list
    this.print = () => {
        if (this.head === null) return null;
        let node = this.head;
        let result = new Array();
        while(node) {
            result.push(node.data);
            node = node.next;
        }
        return result;
    }
    // Returns the index of a value in linked list. Null means not present.
    // Linked List starts with index 0
    this.indexOf = value => {
        if (this.root === null) return null;
        let node = this.head;
        for(let i = 0; i < this.length; i++) {
            if (node.data === value) return i;
            node = node.next;
        }
        return null;
    }
    // Returns the value present at that index
    this.elementAt = index => {
        if (this.head === null) return null;
        if (index >= this.length) return null;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.data;
    }
    // Adds a specific value to the given index;
    this.addAt = (index, value) => {
        if (this.head === null && index !== 0) return null;
        if (index > this.length) return null;
        let node = this.head;
        let previousNode;
        if (index === 0) {
            const newNode = new Node(value);
            this.head = newNode;
            return;
        }
        for (let i = 0; i < index; i++) {
            previousNode = node;
            node = node.next;
        }
        const newNode = new Node(value);
        previousNode.next = newNode;
        newNode.next = node;
        this.length++;
    }
    // Removes the node from the specified index
    this.removeAt = index => {
        if (this.head === null) return null;
        if (index >= this.length) return null;
        let node = this.head;
        let previousNode;
        for (let i = 0; i < index; i++) {
            previousNode = node;
            node = node.next;
        }
        previousNode.next = node.next;
        this.length--;
    }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
console.log(linkedList.isEmpty()); // false;
console.log(linkedList.size()) // 5
console.log(linkedList.print()); // [1, 2, 3, 4, 5]
linkedList.remove(4);
console.log(linkedList.print()); // [1, 2, 3, 5]
console.log(linkedList.size()) // 4
console.log(linkedList.indexOf(5)); // 3
console.log(linkedList.elementAt(1)); // 2
linkedList.addAt(1, 3);
console.log(linkedList.print()); // [1, 3, 2, 3, 5]
console.log(linkedList.elementAt(1)); // 3
linkedList.removeAt(1);
console.log(linkedList.print()); // [1, 2, 3, 5]