/**
 * Todo : Loops (for, while, do...while) in JS
 * 
 * ^ Loops are used to execute a block of code repeatedly.
 */

// * for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// * while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// * do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

/**
 * Todo : Break & Continue Statement in JS
 * 
 * ^ break – Exit the loop immediately
 * ^ continue – Skip current iteration, move to next
 */

// & Ex-01
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // ✅ Output: 1, 2
}

// & Ex-02
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // ✅ Output: 1, 2, 4, 5
}