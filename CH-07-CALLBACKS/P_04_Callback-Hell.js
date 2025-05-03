/**
 * 
 * "Callback Hell" refers to a situation where multiple callbacks are nested inside each other, making the code:
 * -> Hard to read
 * -> Difficult to debug
 * -> Almost impossible to maintain
 */

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user");
        callback({ id: userId, name: "Roman" });
    }, 1000);
}

function getPosts(user, callback) {
    setTimeout(() => {
        console.log("Fetched posts for:", user.name);
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getComments(posts, callback) {
    setTimeout(() => {
        console.log("Fetched comments for:", posts);
        callback(["Nice!", "Great!"]);
    }, 1000);
}

// Nested callbacks = Callback Hell
getUser(1, function (user) {
    getPosts(user, function (posts) {
        getComments(posts, function (comments) {
            console.log("Comments:", comments);
        });
    });
});

