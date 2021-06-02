// FILO/LIFO DS -> First In Last Out / Last In First Out Data Structure
var Stack = function() {
    this.count = 0;
    this.store = {};
    // Places an element at the top
    this.push = val => this.store[this.count++] = val;
    // Takes out the topmost element and returns it
    this.pop = () => {
        if (this.count === 0) return undefined;
        this.count--;
        const value = this.store[this.count];
        delete this.store[this.count];
        return value;
    }
    // Returns the topmost element
    this.peek = () => this.store[this.count-1];
    // Returns the size of the stack
    this.size = () => this.count
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.size()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.size()); // 1
console.log(myStack.peek()); // 1