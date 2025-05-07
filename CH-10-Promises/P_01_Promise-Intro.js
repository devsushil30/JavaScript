/**
 * Todo: Promises in JavaScript
 * 
 * * 🔹 WHAT ARE PROMISES?
 * (1) A Promise is a special JavaScript object that represents the eventual "completion (or failure)" of an asynchronous operation and its resulting value.
 * (2) A Promise is created and returned immediately, serving as a "placeholder" for a value that will be available in the future.
 * (3) You can attach **handlers** (via `.then`, `.catch`, and `.finally`) to a promise to handle success, failure, or cleanup.
 * (4) Once the async operation completes, the corresponding handler is automatically executed.
 * 
 * * 🔹 HOW TO USE PROMISES?
 * (1) There are two main roles when working with Promises:
 *     (i) **Creating a Promise** – typically done by developers or inside libraries.
 *     (ii) **Consuming a Promise** – done using `.then()`, `.catch()`, or `await` (in async functions).
 * 
 * * 🔹 STATES OF A PROMISE:
 * (1) A Promise has 3 internal states:
 *     - 🟡 Pending: Initial state; the operation is still in progress.
 *     - 🟢 Fulfilled: The operation completed successfully and a value is available.
 *     - 🔴 Rejected: The operation failed and an error (or reason) is available.
 * (2) Once a promise is either fulfilled or rejected, it is considered **settled**, and it cannot change state again.
 * 
 * * 🔹 WHAT ARE `resolve` AND `reject`?
 * (1) These are functions provided by the JavaScript engine when you create a new Promise.
 *     - `resolve(value)`: Transitions the promise from "pending" to "fulfilled" with the specified value.
 *     - `reject(error)`: Transitions the promise from "pending" to "rejected" with the specified error or reason.
 * (2) The argument passed to `resolve()` or `reject()` becomes available to `.then()` or `.catch()` respectively.
 */
