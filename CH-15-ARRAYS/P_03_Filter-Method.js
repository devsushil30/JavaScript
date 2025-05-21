/**
 * * 🔷 2. filter() – Select items based on a condition
 * 
 * ? 🧠 What it does:
 * -> Goes through each item,
 * -> Keeps only the items that return true,
 * -> Returns a new array (may be shorter or empty).
 * 
 * ~ It doesn't change the original array.
 */

// * ✅ Example 1: Get even numbers

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// & --------------------------------------------------------------------

// * ✅ Example 2: Filter adults (age >= 18)

const people = [
    { name: "Sunio", age: 14 },
    { name: "Doraemon", age: 18 },
    { name: "Gian", age: 20 }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults); // [{name: "Doraemon", ...}, {name: "Gian", ...}]

// & --------------------------------------------------------------------

// * ✅ Example 3: Remove falsy values

const mixed = [0, "hello", null, false, 42];

const truthy = mixed.filter(Boolean);
console.log(truthy); // ["hello", 42]
