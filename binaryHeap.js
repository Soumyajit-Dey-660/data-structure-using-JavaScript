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
        if (this.heap.length > 2) {
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
    // Removes the first element from the heap
    this.remove = () => {
        let smallest = this.heap[1];
        // More than two nodes exists
        if (this.heap.length > 2) {
            // Copy the last element and place it in the first node
            this.heap[1] = this.heap[this.heap.length-1];
            // Delete the last element from the heap
            this.heap.splice(this.heap.length-1);
            // Now adjust the value accordingly
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) 
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                return smallest;
            }
            let i = 1;
            let left = i * 2;
            let right = i * 2 + 1;
            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                // Check if left or right is within the heap length or not
                // If not then the value is within place
                if (this.heap[left] === undefined || this.heap.right === undefined) break;
            }
        } else if (this.heap.length === 2) {
            // Two nodes exists, delete one
            this.heap.slice(1, 1);
        } else {
            // Only one nodes exists, delete that
            return null;
        }
        return smallest;
    }
    // Prints the heap
    this.print = () => console.log(this.heap);
}

let minheap = new minHeap();
console.log('Min Heap');
minheap.insert(1);
minheap.insert(6);
minheap.insert(3);
minheap.insert(5);
minheap.insert(4);
minheap.insert(2);
minheap.print(); // [null, 1, 4, 2, 6, 5, 3]
console.log(minheap.remove()); // 1
minheap.print(); // [null, 2, 4, 3, 6, 5]


var maxHeap = function() {
    this.heap = [null]; // 0th index value is null
    // Insert a value in the heap
    this.insert = value => {
        this.heap.push(value);
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            // Swap while the child is greater than parent
            while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
                [this.heap[index], this.heap[Math.floor(index/2)]] = [this.heap[Math.floor(index/2)], this.heap[index]];
                if (Math.floor(index / 2) > 1)
                    index = Math.floor(index/2);
                else 
                    break;
            }
        }
    }
    // Removes the largest element i.e., the root / index 1 element
    this.remove = () => {
        let largest = this.heap[1];
        if (this.heap.length > 2) {
            // Copy the last element so that the heap maintains the 
            // complete binary tree property
            this.heap[1] = this.heap[this.heap.length - 1];
            // Delete the last element
            this.heap.splice(this.heap.length-1);
            let i = 1;
            let left = i * 2;
            let right = i * 2 + 1;
            while(this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = i * 2;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = i * 2 + 1;
                }
                left = i * 2;
                right = i * 2 + 1;
                // Now see if we have covered the whole array while swapping
                if (this.heap[left] === undefined || this.heap[right] === undefined) break;
            }
        } 
        else if (this.heap.length === 2) this.heap.splice(1, 1);
        else return null;
        return largest;
    }
    // Prints the maxHeap array representation
    this.print = () => console.log(this.heap);
}

let maxheap = new maxHeap();
console.log('\nMax Heap');
maxheap.insert(1);
maxheap.insert(2);
maxheap.insert(3);
maxheap.insert(4);
maxheap.insert(5);
maxheap.print(); // [null, 5, 4, 2, 1, 3]
console.log(maxheap.remove()); // 5
maxheap.print(); // [null, 4, 3, 2, 1]