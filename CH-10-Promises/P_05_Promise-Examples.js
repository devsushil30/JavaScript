/**
 * ~ Priorities: Call Stack > MicroTask Queue > MacroTask/Event Callback Queue
 *
 * * In case of promises, ".then" callbacks go inside -> MicroTask Queue
 * * Normal callbacks like "setTimeout" go inside -> MacroTask/Event Callback Queue
 */

// & ========== Example 1 ==========
function fetchData1(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from:", url);
        setTimeout(function processDownloading() {
            let data = "Dora Movie";
            console.log("Downloaded data is:", data);
            resolve(data); // After this, .then() is scheduled in microtask queue
        }, 7000);
    });
}

console.log("Execution started...");
let obj1 = fetchData1("www.meta.com");
obj1.then(function fun(value) {
    console.log("Value is", value);
});
console.log("Execution ended...");

/*
Expected Output (conceptual order):
Execution started...
Started downloading from: www.meta.com
Execution ended...
--- after 7 seconds ---
Downloaded data is: Dora Movie
Value is Dora Movie
*/

// & ========== Example 2 ==========
function fetchData2(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from:", url);
        setTimeout(function processDownloading() {
            let data = "Dora Movie";
            resolve(data); // First resolve
            console.log("Downloaded data is:", data); // Then logs
        }, 7000);
    });
}

console.log("Execution started...");
let obj2 = fetchData2("www.meta.com");
obj2.then(function fun(value) {
    console.log("Value is", value);
});
console.log("Execution ended...");

/*
Expected Output:
Execution started...
Started downloading from: www.meta.com
Execution ended...
--- after 7 seconds ---
Downloaded data is: Dora Movie
Value is Dora Movie
*/

// & ========== Example 3 ==========
console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 Done!");
}, 0);

// Blocking the thread
for (let i = 0; i < 1000000000; i++) { }

// Schedule a microtask
let obj3 = Promise.resolve("Resolved Promise");
obj3.then(function fun(value) {
    console.log("Promise's value is:", value);
});

// Another macrotask
setTimeout(function timer2() {
    console.log("Timer 2 Done!");
}, 0);

console.log("End of the file");

/*
Expected Output:
Start of the file
End of the file
Promise's value is: Resolved Promise
Timer 1 Done!
Timer 2 Done!
*/

// & ========== Example 4 ==========

function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Timer's promise!");
        }, 10000);
    });
}

console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 Done!");
    let y = dummyPromise();
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value);
    });
}, 0);


// Schedule a microtask
let ob3 = Promise.resolve("Resolved Promise");
ob3.then(function fun(value) {
    console.log("Promise's value is:", value);
});

// Another macrotask
setTimeout(function timer2() {
    console.log("Timer 2 Done!");
}, 0);

console.log("End of the file");

// & ========== Example 5 ==========

console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 Done!");
    let y = Promise.resolve("Nobita's promise");
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value);
    });
}, 0);


// Schedule a microtask
let o3 = Promise.resolve("Resolved Promise");
o3.then(function fun(value) {
    console.log("Promise's value is:", value);
});

// Another macrotask
setTimeout(function timer2() {
    console.log("Timer 2 Done!");
}, 0);

console.log("End of the file");