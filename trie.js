/* Trie or sometimes called a Prefixed tree is a special type of tree 
used to store associative data structures */

var Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => this.end = true;
    this.isEnd = () => this.end;
}

var Trie = function() {
    this.root = new Node();
    // Adds a word to the trie
    this.add = (input, node = this.root) => {
        // Base condition
        if (input.length === 0) {
            node.setEnd();
            return;
        }
        // See if the letter already exists or not
        // Does not exist, add a node with that value
        if (!node.keys.has(input[0])) 
            node.keys.set(input[0], new Node());
        // Recursively add the rest of letters
        return this.add(input.substr(1), node.keys.get(input[0]));
    }
    // Returns if the word is a valid word in the Trie or not
    this.isWord = (word) => {
        let node = this.root;
        while(word.length > 1) {
            if(!node.keys.has(word[0])) return false;
            node = node.keys.get(word[0]);
            word = word.substr(1);
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }
    // Prints all the valid words that exists in the Trie
    this.print = () => {
        let words = new Array();
        let search = (node, string) => {
            if (node.keys.size !== 0) {
                for (let letter of node.keys.keys()) 
                    search(node.keys.get(letter), string.concat(letter));
                if (node.isEnd()) words.push(string);
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    };
} 

let trie = new Trie();
trie.add('ball');
trie.add('hello');
trie.add('love');
console.log(trie.isWord('happy')); // false
console.log(trie.isWord('ball')); // true
console.log(trie.print()); // ['ball', 'hello', 'love']