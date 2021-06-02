// Priority based queue -> Elements will be placed in the QUEUE based on priority
var priorityQueue = function() {
    this.collection = [];
    // Returns the size of the queue
    this.size = () => this.collection.length;
    // Returns the first element in the queue
    this.front = () => this.collection[0][0];
    // Checks if the queue is empty or not
    this.isEmpty = () => this.collection.length === 0;
    // Prints the whole queue
    this.print = () => console.log(this.collection.map(item => item[0]));
    // Places an element in the queue based on its priority
    this.enqueue = value => {
        if(this.isEmpty()) {
            this.collection.push(value);
            return;
        }
        let isAdded = false;
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i][1] >= value[1]) {
                this.collection.splice(i, 0, value);
                isAdded = true;
                break;
            }
        }
        if (!isAdded) this.collection.push(value);
    }
    // Takes out the first element from the queue 
    this.dequeue = () => this.collection.shift()[0];
}

let queue = new priorityQueue();
queue.enqueue(['Football', 2]);
queue.enqueue(['Health', 1]);
queue.enqueue(['Family', 1]);
queue.enqueue(['Coding', 2]);
queue.enqueue(['Money', 3]);
queue.print(); // ['Family', 'Health', 'Coding', 'Football', 'Money']
console.log(queue.front()); // ['Family']
console.log(queue.size()); // 5
console.log(queue.isEmpty()); // false; 
queue.dequeue();
console.log(queue.front()); // ['Health']