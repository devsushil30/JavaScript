function Events(dataOfEvent) {
    this.dataOfEvent = dataOfEvent;
}

Events.prototype.bookEvent = function () {
    console.log("Event Booked!");
}

function Movie(movieName) {
    this.movieName = movieName;
}

console.log(Movie.prototype.__proto__);
console.log(Events.prototype.__proto__);

/**
 * ? Currently `Movie.prototype.__proto__` and `Events.prototype.__proto__` both are pointing to the `Object.prototype`.
 * * To achieve Inheritance we want `Movie.prototype.__proto__` to point `Events.prototype`.
 * ~ We can achieve this by using `__proto__`.
 */

// Movie.prototype.__proto__ = Events.prototype;
// console.log(Movie.prototype.__proto__);
// console.log(Events.prototype.__proto__);

/**
 * ? Now `Movie.prototype.__proto__` is pointing to `Events.prototype` which is pointing to the `Object.prototype`.
 * * But JS provides a better way to achieve this same thing.
 * ~ We can use `Object.create()` method for this.
 */

Movie.prototype = Object.create(Events.prototype);

let comedyMovie = new Movie("Hungama");
console.log(comedyMovie);
comedyMovie.bookEvent();