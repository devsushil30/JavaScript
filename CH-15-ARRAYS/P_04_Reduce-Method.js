/**
 * * 🔷 3. reduce() – Returns a single value
 * 
 * ? 🧠 What it does:
 * -> Goes through each element,
 * -> Accumulates a result using a callback,
 * -> Returns a single value.
 * 
 * ~ It doesn't change the original array.
 */

// * ✅ Example 1: Sum all numbers

let nums = [5, 10, 15, -5];

let sum = nums.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)

console.log(sum);

// & --------------------------------------------------------------------

// * ✅ Example 2: Find max value

let findmax = nums.reduce((max, curr) => curr < max ? max : curr, -Infinity);
console.log(findmax);

// & --------------------------------------------------------------------

// * ✅ Example 3: Group users by age

const users = [
    { name: "Nobita", age: 13 },
    { name: "Sunio", age: 13 },
    { name: "Gian", age: 14 }
];

let userGroup = users.reduce(function (acc, curr) {
    const age = curr.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(curr.name);

    return acc
}, {});

console.log(userGroup); // { '13': [ 'Nobita', 'Sunio' ], '14': [ 'Gian' ] }
console.log(users);