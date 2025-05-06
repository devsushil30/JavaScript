/**
 * (1) JavaScript is a "synchronous single-threaded" language,
 *     meaning it executes one instruction at a time using a single call stack.
 *
 * (2) This synchronous nature applies to native code like:
 *     - loops
 *     - functions
 *     - conditionals
 *     - console logs, etc.
 *
 * (3) Async behavior (like setTimeout, fetch, events) is handled via Web APIs,
 *     the task queue, and the event loop — not by the JS engine directly.
 */

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();

// Output:
// First
// Second
