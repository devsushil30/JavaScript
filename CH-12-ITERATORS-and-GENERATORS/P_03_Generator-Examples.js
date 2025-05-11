function* fetchNextElement() {
    console.log("Inside Generator");
    const x = 10;
    yield 100;
    console.log("After first yield");
    const y = x + (yield 1000);
    console.log("After second yield, Value is: ", y);
    yield 5000;
}

console.log("Start");
const iter = fetchNextElement();
console.log("Called generator");

console.log("first: ", iter.next());
console.log("second: ", iter.next());
console.log("third: ", iter.next(8));
console.log("last: ", iter.next());