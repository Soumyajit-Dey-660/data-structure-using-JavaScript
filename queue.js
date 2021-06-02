// FIFO DS -> First In First Out Data Structure
var myQueue = function(){
    this.collection = [];
    // Prints the queue
    this.print = () => console.log(this.collection);
    // Returns the front element of the queue
    this.front = () => this.collection[0];
    // Returns the size of the array
    this.size = () => this.collection.length;
    // Returns if the queue is empty or not
    this.isEmpty = () => this.collection.length === 0;
    // Places an element at the end of the queue
    this.enqueue = value => this.collection.push(value);
    // Removes the element at the start of the queue
    this.dequeue = () => this.collection.shift();
}

let queue = new myQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print(); // [1, 2, 3, 4, 5]
console.log(queue.front()); // 1
console.log(queue.size()); // 5
console.log(queue.isEmpty()); // false; 
queue.dequeue();
console.log(queue.front()); // 2
