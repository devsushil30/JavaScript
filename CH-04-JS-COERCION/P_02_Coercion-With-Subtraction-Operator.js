// ^ Coercion : It refers to the automatic conversion of values from one type to another.

// Todo : '-' Operator — Coercion Rules

console.log(5 - 3);
/**
 * Both operands are 'Number'.
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ 2
 */

console.log(5 - "3");
/**
 * One operand is 'Number', the other is 'String'.
 * ➔ "ToNumber" conversion happens: "3" → 3
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ 2
 */

console.log(3 - true);
/**
 * One operand is 'Number', the other is 'Boolean'.
 * ➔ "ToNumber" conversion happens: true → 1
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ 2
 */

console.log(5 - undefined);
/**
 * One operand is 'Number', the other is 'Undefined'.
 * ➔ "ToNumber" conversion happens: undefined → NaN
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ NaN
 */

console.log(5 - null);
/**
 * One operand is 'Number', the other is 'Null'.
 * ➔ "ToNumber" conversion happens: null → 0
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ 5
 */

console.log(5 - NaN);
/**
 * Any operation with NaN results in NaN.
 * ➔ '-' performs **arithmetic subtraction**.
 * Output ➔ NaN
 */

console.log("Sushil" - true);
/**
 * One operand is 'String', the other is 'Boolean'.
 * ➔ "ToNumber" conversion happens:
 *    - "Sushil" → NaN (because "Sushil" is non-numeric)
 *    - true → 1
 * ➔ NaN - 1 results in NaN.
 * Output ➔ NaN
 */
