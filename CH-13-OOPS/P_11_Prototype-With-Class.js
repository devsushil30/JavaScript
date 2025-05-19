class User {
    constructor(userName, userId) {
        this.userName = userName;
        this.userId = userId;
        this.greet = function () { console.log(`Hello ${this.userName}, Your id is ${this.userId}`); };
    };

    displayUserInfo() {
        console.log(`${this.userName}, ${this.userId}`);
    }
};

let maleUser = new User("Nobita", 35);
let femaleUser = new User("Sizuka", 30);

console.log(maleUser);
console.log(femaleUser.greet());