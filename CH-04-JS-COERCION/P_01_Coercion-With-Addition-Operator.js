// ^ Coercion : It refers to the automatic conversion of values from one type to another.

// Todo : '+' Operator — Coercion Rules

console.log(3 + 5);
/**
 * Both operands are 'Number'.
 * ➔ '+' performs **arithmetic addition**.
 * Output ➔ 8
 */

console.log(3 + "5");
/**
 * One operand is 'Number', the other is 'String'.
 * ➔ "ToString" conversion happens: Number 3 → "3"
 * ➔ '+' performs **string concatenation**.
 * Output ➔ "35"
 */

console.log(3 + true);
/**
 * One operand is 'Number', the other is 'Boolean'.
 * ➔ "ToNumber" conversion happens: true → 1
 * ➔ '+' performs **arithmetic addition**.
 * Output ➔ 4
 */

console.log(5 + undefined);
/**
 * One operand is 'Number', the other is 'Undefined'.
 * ➔ "ToNumber" conversion happens: undefined → NaN
 * ➔ '+' performs **arithmetic addition**.
 * Output ➔ NaN
 */

console.log(5 + null);
/**
 * One operand is 'Number', the other is 'Null'.
 * ➔ "ToNumber" conversion happens: null → 0
 * ➔ '+' performs **arithmetic addition**.
 * Output ➔ 5
 */

console.log(5 + NaN);
/**
 * One operand is 'Number', the other is 'NaN'.
 * ➔ NaN is an invalid number.
 * ➔ Any operation with NaN results in NaN.
 * Output ➔ NaN
 */

console.log("Sushil" + true);
/**
 * One operand is 'String', the other is 'Boolean'.
 * ➔ "ToString" conversion happens: true → "true"
 * ➔ '+' performs **string concatenation**.
 * Output ➔ "Sushiltrue"
 */
