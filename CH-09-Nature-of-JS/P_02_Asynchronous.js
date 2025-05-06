/**
 * (1) JavaScript is a synchronous, single-threaded language by design.
 * (2) Asynchronous features like setTimeout, setInterval, fetch, etc. are not part of the JavaScript engine itself.
 * (3) These are provided by the environment — e.g., browser (Web APIs) or Node.js (libuv APIs).
 * (4) When such functions are used, their tasks are handled outside the main thread.
 * (5) Once completed, their callbacks are placed in the Task Queue (or Callback Queue).
 * (6) The Event Loop continuously checks if the call stack is empty and moves queued tasks back into the stack.
 * (7) This non-blocking behavior allows JavaScript to stay responsive while handling async tasks.
 */

function first() {
    console.log("First");
}

function second() {
    setTimeout(() => {
        console.log("Second (Async)");
    }, 1000);
}

function third() {
    console.log("Third");
}

first();
second();
third();

// Output:
// First
// Third
// Second (Async) (after ~1 second)