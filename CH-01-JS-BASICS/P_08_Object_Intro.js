/**
 * Todo: Objects in JS
 * 
 * ^ It stores key-value pairs
 */

// ? How to create a simple object

const student = {
    "Full Name": "Nobita Nobi",
    standard: 5,
    hasHomeWork: true
};

// ? How to access elements

// * (1) Dot notation: Simpler, readable, faster.
console.log(student.standard);

// * (2) Bracket notation: Needed for keys with spaces/special characters.
console.log(student["Full Name"]);

// ? Adding, Updating, and Deleting Properties

student.hobby = "Sleeping";
student.hasHomeWork = false;
delete student["Full Name"];

console.log(student);

// ? Object Inside Object

const Doraemon = {
    "Robot-Name": "Doraemon",
    DateOfBirth: 2112,
    Address: { HouseNo: 33, Country: "Japan", Galaxy: "22nd" },

    greet() {
        return `Hi, I am ${this["Robot-Name"]}`;
    }
};

console.log(Doraemon);
console.log(Doraemon.Address);
console.log(Doraemon.greet());

// ? Object.keys(), Object.values(), Object.entries()
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj));   // ['a', 'b']
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj));// [['a', 1], ['b', 2]]


// ? How to traverse in a object

for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} = ${value}`);
}
