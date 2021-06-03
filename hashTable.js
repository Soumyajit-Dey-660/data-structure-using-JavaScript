/* Hash Table */

// This is a very simple hashing function that will take a string as input
// and return a hashed value. max is the number of values (buckets) you can store.
var hash = function(string, max) {
    let hashValue = 0;
    for (let i = 0; i < string.length; i++) hashValue += string.charCodeAt(i);
    return hashValue % max;
}

var hashTable = function() {
    this.storage = [];
    this.storageLimit = 6;
    // Adds a (key, value) pair to the hash table
    this.add = (key, value) => {
        let index = hash(key, this.storageLimit);
        // Nothing exists at that index
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            // Key, value pair exists at that index
            // Case 1: Key already exists, then update value
            let inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                    break;
                }
            }
            // Case 2: In Case of collision
            if (!inserted) this.storage[index].push([key, value]);
        }
    }
    // Gives the corresponding value to a key
    this.lookup = key => {
        let index = hash(key, this.storageLimit);
        // Key doesn't exist in Hash Table
        if (this.storage[index] === undefined) return null;
        for(let i = 0; i < this.storage[index].length; i++ ) {
            if (this.storage[index][i][0] === key) return this.storage[index][i][1];
        };
        return null;
    }
    // Removes a (key, value) pair based on the key from the hash table
    this.remove = key => {
        let index = hash(key, this.storageLimit);
        // Key doesn't exist
        if (this.storage[index] === undefined) return;
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) 
                this.storage[index].splice(i, 1);
            return;
        }
    }
    // Returns the whole hash table
    this.print = () => console.log(this.storage);
}

let ht = new hashTable();
ht.add('Salah', 'Liverpool FC');
ht.add('Messi', 'FC Barcelona');
ht.add('De Bruyne', 'Manchester City FC');
ht.add('Ronaldo', 'Juventus FC');
ht.add('Kane', 'Tottenham Hotspurs');
ht.add('Mbappe', 'Paris Saint German');
ht.print(); // [undefined, undefined, [['De Bruyne', 'Manchester City FC']],[['Salah', 'Liverpool FC'],['Messi', 'FC Barcelona'],['Mbappe', 'Paris Saint German']], undefined, [['Ronaldo','Juventus FC'], ['Kane', 'Tottenham Hotspurs']]]
console.log(ht.lookup('Salah')); // Liverpool FC
ht.remove('Salah');
console.log(ht.lookup('Salah')); // null