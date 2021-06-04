/* Heap */
// Max heap is a data structure where the parent is always greater than the
//  child nodes.
// Min Heap is a dtaa structure where the parent node value is always
// smaller than the children node values

// Binary Heap is also a complete binary tree means that all level
// of the tree will be filled with nodes and if the last level is
// not totally filled, it will be filled from left to right.

// Heaps can be implemented as Tree Data Structure but they are generally
// implemented as arrays where,
// index starts with 1. [Leave the 0th index value empty]
// left child: i * 2
// right child: i * 2 + 1
// parent: Math.floor(i / 2)

var minHeap = function() {
    this.heap = [null]; // Index 0 is null
    // Inserts a value in the heap
    this.insert = value => {
        this.heap.push(value);
        if (this.heap.length > 3) {
            let index = this.heap.length - 1;
            // Place the value in its correct position in the Heap
            // by comparing the value with its parent
            while(this.heap[index] < this.heap[Math.floor(index/2)]) {
                [this.heap[index], this.heap[Math.floor(index/2)]] = [this.heap[Math.floor(index/2)], this.heap[index]];
                // Set the index to what was the parent's index for 
                // next iteration
                if (Math.floor(index / 2) > 1)
                    index = Math.floor(index/2);
                else
                    break;
            }
        }
    }
    // Removes an element from the heap
    this.remove = () => {

    }
    // Prints the heap
    this.print = () => console.log(this.heap);
}

let heap = new minHeap();
heap.insert(1);
heap.insert(6);
heap.insert(3);
heap.insert(5);
heap.insert(4);
heap.insert(2);
heap.print();