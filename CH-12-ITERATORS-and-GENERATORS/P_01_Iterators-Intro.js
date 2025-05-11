/**
 * (1) An iterator is an object that implements the "Iterator" protocol:
 * * (a) It has a next() method.
 * * (b) Each call to next() returns an object with two properties
 *     ^ (i) "value": The next item in the sequence
 *     ^ (ii) "done": A boolean indicating if the sequence is finished.
 */

// & Example of an Iterator

const toys = ['Car', 'Doll', 'Ball'];
const iterator = toys[Symbol.iterator]();

console.log(iterator.next()); // { value: 'Car', done: false }
console.log(iterator.next()); // { value: 'Doll', done: false }
console.log(iterator.next()); // { value: 'Ball', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/**
 * ? [Symbol.iterator]():
 * * (1) A method that returns an iterator object. 
 * * (2) Present on all iterable objects like arrays, strings, maps, and sets.

 * ? Iterator Object:
 * * (1) Has a next() method.
 * * (2) Produces items sequentially, with { value, done }.

 * ? Iterating Mechanism:
 * * JavaScript uses this internally for loops like for...of.
 */
