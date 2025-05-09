/**
 * ? 🔹 What is async/await?
 * * "async" is a keyword used to declare an asynchronous function — a function that returns a Promise.
 * * "await" is used inside an async function to pause execution until a Promise is resolved or rejected.

 * ^ In simple terms:
 * * async/await is syntactic sugar over Promises that lets you write asynchronous code in a synchronous-looking style.
 * 
 * 
 * ~ 🔸 Why Use async/await?
 * ✅ Makes code cleaner and more readable than .then() chains 
 * ✅ Easier to write complex asynchronous flows with multiple awaits
 * ✅ Error handling becomes simple using try/catch blocks
 * ✅ No need to explicitly return new promises (everything becomes a Promise inside async)
 * 
 */

// & ------------------------------- Example - 01 -------------------------------
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("Entering 'asyncCall'");
    const result = await resolveAfter2Seconds(); // await pauses execution of the async function at this line
    console.log(result);
    console.log("Exiting 'asyncCall'");
}

console.log("Start");
asyncCall();
console.log("End");

// & ------------------------------- Example - 02 -------------------------------

/**
 * Async functions always return a promise. 
 * If return value of an async function isn't explicitly a promise, it will be implicitly wrapped in a promise.
 * 
 * For Example:
 */

async function test() {
    return 1;
}

// The above code is similar to 
function test() {
    return Promise.resolve(1);
}


// & ------------------------------- Example - 03 -------------------------------

/**
 * The returned values may behave similarly, but they are not the same object, especially if you're returning an existing Promise.
 */

const p = new Promise((res) => res(1));

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true ✅
console.log(p === asyncReturn()); // false ❌

/**
 * ? 💡 Why?
 * 
 * * Promise.resolve(p) detects that p is already a Promise, so it just returns the same p object.
 * * But asyncReturn() always wraps its return in a new Promise, even if the value is already a Promise.
 */