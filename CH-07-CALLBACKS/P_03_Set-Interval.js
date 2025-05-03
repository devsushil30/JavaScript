// Todo:- setInterval : Executes a function repeatedly at a specified time interval (in milliseconds).

// & Example - 01

let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 iterations
    }
}, 1000);
