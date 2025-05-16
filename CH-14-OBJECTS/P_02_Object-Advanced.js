// Todo: Object inside Object

let student = {
    name: "Nobita",
    marks: {
        math: 55,
        science: 60,
        totalMarks: function () {
            return this.math + this.science;
        }
    }
};

console.log(student);
console.log(student.marks.math); // 55
console.log(student.marks.totalMarks());

// Useful methods
console.log(Object.keys(student));   // logs "keys"
console.log(Object.values(student)); // logs "values"
console.log(Object.entries(student)); // logs both "keys" and "values"
