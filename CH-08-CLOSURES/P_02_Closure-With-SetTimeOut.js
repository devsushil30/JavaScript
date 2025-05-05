// * Example: Closure in Asynchronous Context (setTimeout)

function outerFunction() {
    let outerVariable = 'I am from outer function';

    // innerFunction is a closure that captures outerVariable
    setTimeout(function innerFunction() {
        console.log(outerVariable); // Still has access after 3 sec
    }, 3000);

    console.log("outerFunction has finished executing.");
}

outerFunction();

/**
 * ^ OUTPUT:
 * * immediately -> "outerFunction has finished executing."
 * * after 3 sec -> "I am from outer function"
 *
 * ^ Explanation:
 * - `innerFunction` forms a closure over `outerVariable`
 * - Even after `outerFunction` finishes, innerFunction retains access to its scope
 */
