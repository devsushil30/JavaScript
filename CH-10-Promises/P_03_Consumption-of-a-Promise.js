// Todo: .then() in Promises - Complete Explanation with Examples and Comments

// * ✅ A simple function that returns a promise
function numberPromise() {
    return new Promise(function execute(resolve, reject) {
        setTimeout(() => {
            let num = Math.random();
            if (num < 0.5) {
                resolve(num); // Fulfilled case
            } else {
                reject(num); // Rejected case
            }
        }, 3000);
    });
}

// * ✅ Basic Usage of .then(onFulfilled, onRejected)
numberPromise()
    .then(
        function fulfilled(value) {
            console.log("Promise fulfilled with value:", value);
        },
        function rejected(reason) {
            console.log("Promise rejected with value:", reason);
        }
    );

// * ✅ .then() with only one parameter (onFulfilled)
numberPromise()
    .then(function fulfilled(value) {
        console.log("Only fulfilled handler executed:", value);
    }); // If rejected, it will go unhandled (should use .catch)

// * ✅ Using .catch() to handle rejections
numberPromise()
    .then(function fulfilled(value) {
        console.log("Chained .then - value:", value);
        return value * 2;
    })
    .catch(function handleError(err) {
        console.log("Caught error in .catch():", err);
    });

// * ✅ .then() returns a new Promise (Chaining)
numberPromise()
    .then(function (value) {
        console.log("Original value:", value);
        return value * 10; // Returned value becomes input to next .then()
    })
    .then(function (newVal) {
        console.log("Transformed value:", newVal);
    });

// * ✅ Returning a promise from inside .then()
numberPromise()
    .then(function (value) {
        console.log("First value:", value);
        return numberPromise(); // Returns another promise
    })
    .then(function (nextValue) {
        console.log("Next value from returned promise:", nextValue);
    });

// * ✅ Error thrown inside .then() goes to next .catch()
numberPromise()
    .then(function (value) {
        console.log("Value:", value);
        throw new Error("Manual error inside .then()");
    })
    .catch(function (error) {
        console.log("Caught error from .then():", error.message);
    });

// ! ❌ Passing more than 2 parameters to .then()
numberPromise()
    .then(
        function fulfilled(value) {
            console.log("Value:", value);
        },
        function rejected(err) {
            console.log("Rejected:", err);
        },
        function extra() {
            console.log("This will never run - extra parameters are ignored");
        }
    );
