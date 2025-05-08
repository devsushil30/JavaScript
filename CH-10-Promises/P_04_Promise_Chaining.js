/**
 * Promise chaining is a syntax that allows us to chain together multiple asynchronous tasks in a specific order
 */

// & --------------- Example - 01 ---------------

let myPromise1 = new Promise((resolve, reject) => {
    resolve(10); // The first promise resolves with 10
});

myPromise1
    .then((value) => {
        console.log("Step 1:", value); // Step 1: 10
        return value * 2; // Return a new value (20)
    })
    .then((value) => {
        console.log("Step 2:", value); // Step 2: 20
        return value * 3; // Return a new value (60)
    })
    .then((value) => {
        console.log("Step 3:", value); // Step 3: 60
    })
    .catch((error) => {
        console.error("Error:", error); // Handle errors, if any
    });

// & --------------- Example - 02 ---------------

let myPromise2 = Promise.resolve("Start");

myPromise2
    .then((value) => {
        console.log("Value is: ", value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Middle");
            }, 3000);
        });
    })
    .then((value) => {
        console.log(value); // Middle (after 2 seconds)
        return "End";
    })
    .then((value) => {
        console.log(value); // End
    });