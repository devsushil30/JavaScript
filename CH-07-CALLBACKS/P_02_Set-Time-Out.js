// Todo:- setTimeout : Executes a function once after a specified delay (in milliseconds).

// & Example - 01

console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");


// & Example - 02

let id1 = setTimeout(function () {
    console.log("Delayed message - 1");
}, 7000);

let id2 = setTimeout(() => {
    console.log("Delayed message - 2");
    clearTimeout(id1);
}, 4000);

