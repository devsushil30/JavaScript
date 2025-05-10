/**
 * Todo: Error Handling Using 'try-catch'
 * 
 * ✅ The 'try' block contains all your awaited asynchronous operations.
 * ❌ If any awaited promise rejects, control jumps directly to the 'catch' block.
 * ⚠️ If there's no 'try-catch', the error will be uncaught unless '.catch()' is used on the returned promise.
 */

// & 🧪 Example 1: Simple Error Catching

function willReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Something went wrong!"), 1000);
    });
}

async function handleError() {
    try {
        const result = await willReject();
        console.log("Result:", result);
    } catch (error) {
        console.error("Caught error:", error);
    }
}

handleError();

/**
 * ⏱️ After 1 second:
 * The promise rejects, and await throws an exception.
 * Control transfers to the catch, logging the error.
 */

// & 🧪 Example 2: Multiple Awaits with Independent Handling

async function fetchData() {
    try {
        const user = await getUser(); // ✅
        const posts = await getPosts(); // ❌ (fails)
        console.log(user, posts);
    } catch (err) {
        console.log("Something went wrong:", err);
    }
}
// If getPosts() fails, even though getUser() was successful, the entire block will jump to the catch, and no further awaits will execute.

// & 🧪 Example 3: Real Life Error Handling

function downloadFile(url) {
    return new Promise(function executor(resolve, reject) {
        console.log("Starting download from:", url);
        setTimeout(() => {
            console.log("Download completed");
            const fileName = "Dora.mp4";
            reject(fileName);
        }, 5000);
    });
}

async function executeWorkflow() {
    console.log("Started Execution In Async Function");

    try {
        const downloadedFile = await downloadFile("https://www.meta.com");
        console.log("Downloaded file:", downloadedFile);
    }
    catch (err) {
        console.log("Error occured in download", err);
    }
    finally {
        console.log("Workflow completed successfully!");
    }
}

executeWorkflow();