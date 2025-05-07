/**
 * ✅ Todo: Creation of a "Promise" Object
 * 
 * * 🔹 Syntax to create a new Promise:
 * ~ new Promise((resolve, reject) => { ... });
 * 
 * * 🔹 Important Points:
 * (1) Creation of a promise object is synchronous in nature
 */

// & Example 1: Promise with blocking synchronous code

function demoPromiseWithLoop(num) {
    let blockingPromise = new Promise(function executor(resolve, reject) {
        console.log("Promise object created");

        console.log("Starting a heavy synchronous loop");
        for (let i = 0; i < 10000000000; i++) { /* Blocking work */ }
        console.log("Loop has ended");

        if (num % 2 === 0) {
            resolve(num);  // fulfilled
        } else {
            reject(num);   // rejected
        }

        console.log("Exiting executor function");
    });

    console.log("Exiting demoPromiseWithLoop function");
    return blockingPromise;
}

let x = demoPromiseWithLoop(4);
console.log(x); // Promise { <fulfilled>: 4 } (but handler isn't attached yet)


// & Example 2: Promise with non-blocking asynchronous code

function demoPromiseWithSetTimeOut(num) {
    let nonBlockingPromise = new Promise(function executor(resolve, reject) {
        console.log("Promise object created");

        console.log("Setting a timer for 5 seconds...");
        setTimeout(function evenNumberChecker() {
            console.log("Inside setTimeout callback");

            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject(num);
            }

            console.log("Exiting setTimeout callback");
        }, 5000);

        console.log("setTimeout has been registered (non-blocking)");
        console.log("Exiting executor function");
    });

    console.log("Exiting demoPromiseWithSetTimeOut function");
    return nonBlockingPromise;
}

let y = demoPromiseWithSetTimeOut(8);
console.log(y); // Promise { <pending> }
