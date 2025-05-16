/**
 * * 🔹 Using "Object.assign()"
 *
 * ? How it works:
 * - Creates a new empty object `{}`.
 * - Copies all **own enumerable properties** from the source to the target.
 * - This is a **shallow copy**, meaning:
 *   ➤ Primitive values are copied as-is.
 *   ➤ Nested objects are still **referenced**, not deeply cloned.
 */

let socialSunio = {
    name: "Sunio",
    age: 12,
    account: {
        userName: "Sunio25_official",
        password: "12234@kio90"
    }
};

// Shallow copy using Object.assign
let copy = Object.assign({}, socialSunio);

// Changing top-level and nested values
copy.name = "Sizuka";
copy.account.userName = "Sizuka12_Official";

console.log(`Original: ${socialSunio.name} || Copied: ${copy.name}`); 
// ✅ Different because 'name' is a primitive (copied by value)

console.log(`Original: ${socialSunio.account.userName} || Copied: ${copy.account.userName}`);
// ⚠️ Same (i.e., both changed) because 'account' is a nested object — shared reference

//---------------------------------------------------------------------

/**
 * * 🔹 Using Spread Syntax `{ ... }`
 * 
 * ? Just like Object.assign(), spread also makes a shallow copy.
 * - So for nested objects, the reference is still shared.
 * - We can manually fix this by also spreading nested objects (one level deep).
 */

let socialSizuka = {
    name: "Sizuka",
    age: 11,
    account: {
        userName: "Sizukaru_35",
        password: "Min@moto761"
    }
};

// Manually doing 1-level deep copy
let sizuCopy = {
    ...socialSizuka, // Top-level props (shallow)
    account: { ...socialSizuka.account } // Manually copy nested object (one level deep)
};

sizuCopy.name = "Sizukaroo";
sizuCopy.account.userName = "Sizu_78";

console.log(`Original: ${socialSizuka.name} || Copied: ${sizuCopy.name}`); 
// ✅ Independent

console.log(`Original: ${socialSizuka.account.userName} || Copied: ${sizuCopy.account.userName}`); 
// ✅ Independent — because we also shallow copied 'account' manually
