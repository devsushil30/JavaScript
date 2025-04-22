/**
 * ! JavaScript is a high-level, dynamically typed, interpreted, prototype-based, 
 * ! multi-paradigm, and single-threaded language with first-class functions.
 * 

/**
 * ? High-Level Language
 * ^ JavaScript is a high-level language, which means we write instructions
 * ^ in a more human-readable form, without worrying about low-level tasks
 * ^ like memory management or CPU instructions.
 * ^ 
 * * The JavaScript engine (like V8 in Chrome) handles the translation 
 * * from high-level code to machine code behind the scenes.
 */

/**
 * ? Dynamically Typed
 * ^ JavaScript is a dynamically typed language, which means we don’t need to
 * ^ explicitly tell the engine what type of data a variable will hold.
 * 
 * ^ In statically typed languages like Java or C++, we must declare the data type 
 * ^ during variable declaration.
 * & Ex:  int age = 18; String name = "Chris";
 * * Here, 'age' is explicitly declared to hold only integers,
 * * and 'name' is declared to hold only string values.
 * 
 * ^ But in JavaScript, we don’t declare types — the type is determined at runtime,
 * ^ based on the value assigned to the variable.
 * & Ex: var age = 16; let isMarried = false; const name = "James";
 * 
 * * We can even reassign a variable to a different type (unless it's declared with const).
 * & Ex: let data = 100; data = "Now I’m a string!";
 * 
 * ! This makes JS beginner-friendly, but also leads to bugs if types change unexpectedly.
 */

/**
 * ? Interpreted Language
 * ^ JavaScript is an interpreted language, which meand JS engine executes code 
 * ^ line by line unlike other programming language where a compiler is needed
 * 
 * ! But this statement isn't 100% true, we'll discuss this in upcoming days
 */

/**
 * ? Prototype-Based Language
 * ^ JS doesn’t use “classes” in the traditional way. 
 * ^ It uses objects inheriting from other objects.
 * 
 * ! Indepth Analysis: Coming Soon!
 */

/**
 * ? Multi-Paradigm Language
 * ^ JavaScript is a multi-paradigm programming language, which means it supports
 * ^ multiple styles (or "paradigms") of writing code:
 * ^ 
 * ^ - Object-Oriented Programming (OOP)
 * ^ - Functional Programming (FP)
 * 
 * ^ Originally, JavaScript was function-based, and OOP features like 'class'
 * ^ were added later in ES6 (2015). Before that, developers used constructor
 * ^ functions and prototypes for OOP-like behavior.
 * 
 * ! We'll explore both paradigms deeply — and help you decide when to use what.
 */

/**
 * ? Single-Threaded Language
 * ^ JavaScript is a single-threaded language.
 * ^ In simple terms, it can run one piece of code at a time — just like a cashier
 * ^ handling one customer at a time in a line.
 * 
 * ^ Being single-threaded also means that JavaScript is synchronous by default —
 * ^ it processes one line of code after another, in order.
 * 
 * & Example:
 * &   console.log("1");
 * &   console.log("2");
 * &   console.log("3");
 * * Output will be: 1, 2, 3 — executed top to bottom, one at a time.
 * 
 * ! But here’s the twist:
 * ^ JavaScript is smart — it uses an event loop with asynchronous features
 * ^ (like callbacks, Promises, async/await) to *simulate* multitasking.
 * 
 * ! We'll deeply explore how the event loop, call stack, and Web APIs work — step by step.
 */

/**
 * ? First-Class Functions
 * ^ JavaScript has something knows as first class function.
 * ^ JS functions are super powerful. 
 * ^ In JS, Functions are treated like variables. we can assign, pass, return them.
 * 
 * ! It's the reason why callbacks, promises, and async/await work the way they do in JS.
 */