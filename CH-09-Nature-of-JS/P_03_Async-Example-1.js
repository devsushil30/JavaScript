function createTimer(time, timerid) {
    console.log("Creating a timer with id : ", timerid);

    setTimeout(() => {
        console.log(`Timer with id ${timerid} is done`);
    }, time);

    console.log("Successfully created a timer with id : ", timerid);
}

console.log("Starting the code...");

createTimer(5000, 1);
createTimer(1000, 2);

console.log("Starting a loop...");
for (let i = 1; i < 1000000000; i++) {
    // Something
}

console.log("Loop is done");
console.log("Last line of loop is done!");

/**
 * ^ Output :- 
 * Starting the code...
 * Creating a timer with id :  1
 * Successfully created a timer with id :  1
 * Creating a timer with id :  2
 * Successfully created a timer with id :  2
 * Starting a loop...
 * Loop is done
 * Last line of loop is done!
 * Timer with id 2 is done   
 * Timer with id 1 is done
 */