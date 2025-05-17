/**
 * * 🔹 Using JSON.parse(JSON.stringify(obj))
 * 
 * ? How it works:
 * - Converts the object into a JSON string using JSON.stringify()
 * - Then parses the string back into a brand new object using JSON.parse()
 * - This results in a completely independent deep copy
 * 
 * ✅ All nested objects and arrays are also copied — not just referenced!
 * 
 * ⚠️ Limitations:
 *   - ❌ Loses functions, `undefined`, Symbols, Dates, Maps, Sets, etc.
 *   - Only works with **JSON-safe data**
 */

// & Example - 01

let originalSunio = {
    name: "Sunio",
    age: 12,
    account: {
        userName: "Sunio_999",
        password: "4567@sunio"
    },
    skills: ["math", "gadgets"]
};

// 🔄 Deep copy using JSON trick
let deepCopy = JSON.parse(JSON.stringify(originalSunio));

// Change copied values (both top-level and nested)
deepCopy.name = "Sizuka";
deepCopy.account.userName = "Sizuka_Official";
deepCopy.skills.push("cooking");

console.log(`Original Name: ${originalSunio.name} || Copied Name: ${deepCopy.name}`); 

console.log(`Original Account: ${originalSunio.account.userName} || Copied Account: ${deepCopy.account.userName}`); 

console.log(`Original Skills: ${originalSunio.skills} || Copied Skills: ${deepCopy.skills}`); 

// & Example - 02

let user = {
    name: "Sunio",
    greet: function () {
        console.log("Hello!");
    },
    birthday: new Date(),
    id: undefined,
    secret: Symbol("hidden")
};

let copyUser = JSON.parse(JSON.stringify(user));
console.log(copyUser);

// ! ❌ greet() function, Date object, undefined, and Symbol are all lost!