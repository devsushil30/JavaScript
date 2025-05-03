// Todo: A callback is a function passed as an argument to another function.

// * 🟢 Example 01 – Basic Synchronous Callback

function greet(name, fn) {

    /**
     * name -> Argument of string type
     * fn -> Callback function
     */

    console.log("Hello, " + name);
    fn(); // Calling the function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback to `greet`
greet("Alexa", sayGoodbye);

// & -------------------------------------------------------------------------------

// ^ 🟡 Example 02 – Asynchronous Callback with setTimeout

function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { id: 1, name: "Roman" };
        console.log("Data fetched successfully.");
        callback(data); // callback invoked after data is "fetched"
    }, 2000); // Simulates a delay (e.g., API call)

    console.log("Please wait...");
}

// Passing an inline callback function to process the data
fetchData(function processData(data) {
    console.log("Data received:", data);
});
