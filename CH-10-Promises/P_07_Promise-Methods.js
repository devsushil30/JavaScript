/**
 * Todo: "Promise.all()"
 * 
 * (1) It is a static method takes an iterable of promises as input and returns a single Promise.
 * (2) This returned promise fulfills when all of the input's promises fulfill
 * (3) It rejects when any of the input's promises rejects, with this first rejection reason.
 */

// & Example - 01
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values); // [3, 1337, "foo"]
});


// & Example - 02

// * Simulating the task of ordering a cake
function orderCake() {
    return new Promise((resolve) => {
        console.log("Ordering the cake...");
        setTimeout(() => {
            console.log("Cake ordered!");
            resolve("Cake is ready");
        }, 3000);
    });
}

// * Simulating the task of decorating the venue
function decorateVenue() {
    return new Promise((resolve) => {
        console.log("Decorating the venue...");
        setTimeout(() => {
            console.log("Venue decorated!");
            resolve("Venue is decorated");
        }, 5000);
    });
}

// * Simulating the task of sending invitations
function sendInvitations() {
    return new Promise((resolve) => {
        console.log("Sending invitations...");
        setTimeout(() => {
            console.log("Invitations sent!");
            resolve("Guests are invited");
        }, 2000);
    });
}

// * Using Promise.all to wait for all tasks to complete
function organizeBirthdayParty() {
    console.log("Starting preparations for the birthday party...");

    const tasks = [orderCake(), decorateVenue(), sendInvitations()];

    Promise.all(tasks)
        .then((results) => {
            console.log("All tasks are completed!");
            console.log("Summary of tasks:", results);
            console.log("🎉 The birthday party can now start! 🎉");
        })
        .catch((error) => {
            console.error("An error occurred during preparations:", error);
        });
}

// Start the process
organizeBirthdayParty();

