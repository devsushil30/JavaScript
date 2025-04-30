/**
 * Todo : Abstract (==) and Strict (===) Equality in JS
 */

// ^ Abstract Equality (==) : It supports coercion

// * Case 1: If Type(x) is same as Type(y) ➔ Do Strict Comparison (===)

console.log(5 == 5);
// Same type (Number), direct strict comparison
// 5 === 5 ➔ true

console.log("hello" == "hello");
// Same type (String), direct strict comparison
// "hello" === "hello" ➔ true

console.log(true == false);
// Same type (Boolean), direct strict comparison
// true === false ➔ false

// & -----------------------------------------------------------------------------------

// * Case 2: null == undefined

console.log(null == undefined);
console.log(undefined == null);
// Special Rule: null and undefined are loosely equal
// Output ➔ true

// & -----------------------------------------------------------------------------------

// * Case 3: Number == String

console.log(5 == "5");
// String "5" is converted to Number 5
// 5 == 5 ➔ true
// Output ➔ true

console.log(7 == "abc");
// String "abc" ➔ ToNumber ➔ NaN
// 7 == NaN ➔ false
// Output ➔ false

// & -----------------------------------------------------------------------------------

// * Case 4: String == Number

console.log("7" == 7);
// String "7" ➔ Number 7
// 7 == 7 ➔ true
// Output ➔ true

// & -----------------------------------------------------------------------------------

// * Case 5: BigInt == String

console.log(10n == "10");
// String "10" is converted to BigInt 10n
// 10n == 10n ➔ true
// Output ➔ true

console.log(10n == "abc");
// String "abc" ➔ Cannot be converted to BigInt ➔ undefined
// So ➔ false
// Output ➔ false

// & -----------------------------------------------------------------------------------

// * Case 6: String == BigInt

console.log("10" == 10n);
// Same logic as above
// String "10" ➔ BigInt 10n
// 10n == 10n ➔ true
// Output ➔ true

// & -----------------------------------------------------------------------------------

// * Case 7: Boolean == Any

console.log(true == 1);
// Boolean true ➔ Number 1
// 1 == 1 ➔ true
// Output ➔ true

console.log(false == 0);
// Boolean false ➔ Number 0
// 0 == 0 ➔ true
// Output ➔ true

// & -----------------------------------------------------------------------------------

// * Case 8: Any == Boolean

console.log(0 == false);
// Boolean false ➔ Number 0
// 0 == 0 ➔ true
// Output ➔ true

console.log(2 == true);
// Boolean true ➔ Number 1
// 2 == 1 ➔ false
// Output ➔ false

// & -----------------------------------------------------------------------------------

// * Case 9: BigInt == Number OR Number == BigInt

console.log(10n == 10);
// BigInt 10n compared with Number 10
// Values are same ➔ true
// Output ➔ true

console.log(10n == 10.5);
// BigInt 10n vs Number 10.5 ➔ different values
// Output ➔ false

console.log(Infinity == 10n);
// Number (Infinity) is not finite ➔ return false
// Output ➔ false

// & -----------------------------------------------------------------------------------

// ^ Strict Equality (===) : It doesn't supports coercion

console.log(5 === 5);
// Types and values same ➔ true
// Output ➔ true

console.log(5 === "5");
// Different types ➔ false
// Output ➔ false

console.log(NaN === NaN);
// Special case ➔ false
// Output ➔ false

console.log(0 === -0);
// 0 and -0 are considered same in ===
// Output ➔ true

console.log(true === true);
// Same type and value ➔ true
// Output ➔ true
