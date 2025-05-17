/**
 * Todo: Js Objects Destructuring
 * 
 * (1) An object is a combination of "key-value" pairs.
 * (2) Object Destructuring allows us to extract values from objects and assign them to variables
 */

// * Basic Destructuring
const user = {
    name: "Kriti",
    age: 28,
    jobRole: "SDE-1",
    contact: {
        mobile: 1234567892,
        email: "Kriti@gmail.com"
    }
};

// ^ (1) We can destructure all the properties
const { name, age } = user;
console.log(age);

// ^ (2) We can destructure specific properties
const { jobRole } = user;
console.log(jobRole);

// ^ (3) The property names used in destructuring must match the keys in the object
const { myName } = user;
console.log(myName); // undefined

// ^ (4) We can rename variables while Destructuring
const { contact: userContact } = user;
console.log(userContact);

// ^ (5) We can add default values
const { company = "Meta" } = user;
console.log(company);

// & ------------------------------------------------------------------------------------

// * Destructuring an Object present inside another Object
const product = {
    name: "Laptop",
    details: { brand: "Dell", year: 2022 }
};

// ? How to destructure "brand" from the details object

// ^ Way-01 : First destructure "details" then "brand"
// const{details}=product;
// const{brand}=details;
// console.log(brand);

// ^ Way-02 : Using one line syntax
const { details: { brand } } = product;
console.log(brand);

// & ------------------------------------------------------------------------------------

// * Destructuring using "Rest (...)" operator

const employee = {
    id: 201,
    ename: 'Jane Smith',
    department: 'Engineering',
    salary: 80000
};

const { ename, ...employeeDetails } = employee;

console.log(ename);           // Output: Jane Smith
console.log(employeeDetails); // Output: { id: 201, department: 'Engineering', salary: 80000 }