// Todo: How to create an object

// Initialize object literal with curly brackets
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();

// Creating an basic & simple object
const Actress = {
    firstName: "Kriti",
    lastName: "Sanon",
    "Full Name": "Kriti Sanon",
    age: 30,
    Salary: function(){
        console.log("I charges 3cr. for a movie");
    }
};

console.log(Actress); // logs entire object

// & ------------------------------------------------------------------------

// Todo: How to access elements of an object

// Using '.' notation
console.log(Actress.age);

// Using '[]' notation
console.log(Actress["Full Name"]);
console.log(Actress["firstName"]);

// & ------------------------------------------------------------------------

// Todo: How to call method present inside an object
Actress.Salary();

// & ------------------------------------------------------------------------

// Todo: How to add and modify object properties

// Adding new property
Actress.address = "Andheri (Mumbai)";
console.log(Actress);

// Adding new method
Actress.routine = function(){
    console.log("Eat, Sleep, Act, Repeat!");
};

Actress.routine();

// Update an existing property
Actress.age = 28;
console.log(Actress);

// & ------------------------------------------------------------------------

// Todo: How to remove object properties

delete Actress.Salary;
console.log(Actress);

// & ------------------------------------------------------------------------

// Todo: Looping through object properties

for(let key in Actress){
    console.log(key.toUpperCase() + ':', Actress[key]);
}