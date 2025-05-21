/**
 * * 🔷 1. map() – Transforming each item
 * 
 * ? 🧠 What it does:
 * -> Takes each element in the array,
 * -> Transforms it using a callback,
 * -> Returns a new array (same length).
 * 
 * ~ It doesn’t mutate the original array.
 */

// * Example - 01

let names = ["Doraemon", "Nobita", "Sunio", "Nobiko", "Pippo"];

// What we want => [ 'DORAEMON', 'NOBITA', 'SUNIO', 'NOBIKO', 'PIPPO' ]

let namesAfterTransform = names.map(function (name) {
    return name.toUpperCase();
});

console.log(namesAfterTransform);

// & --------------------------------------------------------------------

// * Example - 02

const users = [
    { name: "Sunio", age: 14 },
    { name: "Nobita", age: 13 }
];

const result = users.map(user => user.name);
console.log(result); // ["Sunio", "Nobita"]
