class EventBookingClass{
    constructor(bookingDate){
        this.bookingDate = bookingDate;
    }
    
    get bookingInfo(){
        console.log(`Your event has been booked for ${this.bookingDate}`);
    }
}

class MovieClass extends EventBookingClass{
    constructor(bookingDate, movieName){
        super(bookingDate); // This will refer to the parent class constructor
        this.movieName = movieName;
    }
}

let cartoonMovie = new MovieClass('2021-12-25', 'Tom & Jerry');
cartoonMovie.bookingInfo;

/**
 * ? How we can achieve the same functionality in "function constructors"?
 * * We can do this using `call` method.
 */

function EventBooking(dateOfEvent){
    this.dateOfEvent = dateOfEvent;
}

function Movie(dateOfEvent, movieName){
    EventBooking.call(this, dateOfEvent);
    this.movieName = movieName;
}

let doraemonMovie = new Movie('2021-12-25','Doraemon');