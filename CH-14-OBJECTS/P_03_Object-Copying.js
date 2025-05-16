/**
 * Todo: 🔄 What Does "Copying an Object" Mean?
 * 
 * When we say copy an object, we mean creating a new variable that holds either:
 * - A reference to the same object (shallow copy/reference copy), or
 * - A completely independent duplicate of the object (deep copy)
 */

// ^ Direct Assignment (NOT a Real Copy – Just a Reference)

// & Example - 01
let original = { name: "Sunio", age: 23, };

let copy = original;

copy.name = "Nobita";

console.log(original.name); // ! "Nobita" — original changed too!
// ✅ Why? Because both original and copy point to the same memory location.
