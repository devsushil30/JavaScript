/**
 * (1) A generator is a special type of function that can pause and resume execution. 
 * (2) It uses the "function*"" syntax and the "yield" keyword:
 * * (a) yield pauses the function and sends a value to the caller.
 * * (b) when the generator is called again, it resumes from where it left off
 */

// & Example of a Generator
function* generateToys() {
    yield 'Car';
    yield 'Doll';
    yield 'Ball';
}

const toyGenerator = generateToys();

console.log(toyGenerator.next()); // { value: 'Car', done: false }
console.log(toyGenerator.next()); // { value: 'Doll', done: false }
console.log(toyGenerator.next()); // { value: 'Ball', done: false }
console.log(toyGenerator.next()); // { value: undefined, done: true }
