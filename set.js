var mySet = function () {
    this.collection = [];
    // Returns if an element is present in the set or not
    this.has = element => this.collection.indexOf(element) !== -1;
    // Returns the size of the set
    this.size = () => this.collection.length;
    // Returns the set itself
    this.values = () => this.collection;
    // Adds a value to the set
    this.add = element => {
        if (this.has(element)) return false;
        this.collection.push(element);
    }
    // Removes an element from the set
    this.remove = element => {
        if(!this.has(element)) return false;
        let index = this.collection.indexOf(element);
        this.collection.splice(index, 1);
    }
    // Union of two sets
    // [1, 2, 3] U [1, 4, 5] -> [1, 2, 3, 4, 5]
    this.union = otherSet => {
        let newSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(element => newSet.add(element));
        secondSet.forEach(element => newSet.add(element));
        return newSet.values();
    }
    // Difference between two sets
    // [1, 2, 3] - [1, 4, 5] -> [2, 3]
    this.difference = otherSet => {
        let newSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (!otherSet.has(element)) newSet.add(element);
        })
        return newSet.values();
    }
    // Intersection of two sets
    // [1, 2, 3] |-| [1, 2, 5] -> [1, 2]
    this.intersection = otherSet => {
        let newSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (otherSet.has(element)) newSet.add(element);
        })
        return newSet.values();
    }
    // Returns if the second set is a subset of first set or not
    this.subset = otherSet => {
        let firstSet = this.values();
        return firstSet.every(element => otherSet.has(element));
    }
}

let set = new mySet();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
console.log(set.size()); // 5
console.log(set.values()); // [1, 2, 3, 4, 5]
console.log(set.has(5)); // true
console.log(set.has(6)); // false
set.remove(4);
console.log(set.size()); // 4
console.log(set.values()); // [1, 2, 3, 5]
let set1 = new mySet();
set1.add(1);
set1.add(2);
set1.add(9);
console.log(set.union(set1)); // [1, 2, 3, 5, 9]
console.log(set.intersection(set1)); // [1, 2]
console.log(set.difference(set1)); // [3, 5]
console.log(set1.difference(set)); // [9]
console.log(set.subset(set1)); // false