/**
 * ? How Async-Await Works
 * 
 * (1) Async Function: 
 * * (A) A function declared with the "async" keyword always returns a promise. 
 * * (B) If the function returns a value, JavaScript automatically wraps it in a resolved promise.
 * 
 * (2) Await Keyword: 
 * * (1) Used inside an async function to pause the execution of that function until a promise resolves or rejects. 
 * * (2) While the function is paused, the rest of the program continues running.
 */

// * Function to handle file downloading
function downloadFile(url) {
    return new Promise(function executor(resolve, reject) {
        console.log("Starting download from:", url);
        setTimeout(() => {
            console.log("Download completed");
            const fileName = "Dora.mp4";
            resolve(fileName);
        }, 5000);
    });
}

// * Function to handle file saving
function saveFile(fileName, targetLocation) {
    return new Promise(function executor(resolve, reject) {
        console.log("Starting to save the file at:", targetLocation);
        setTimeout(() => {
            console.log("File saved successfully");
            resolve(fileName);
        }, 3000);
    });
}

// * Function to handle file uploading
function uploadFile(fileName, uploadUrl) {
    return new Promise(function executor(resolve, reject) {
        console.log("Starting to upload the file to:", uploadUrl);
        setTimeout(() => {
            console.log("File uploaded successfully");
            resolve("Upload completed");
        }, 8000);
    });
}

// * Async function to execute the workflow
async function executeWorkflow() {
    console.log("Started Execution In Async Function");

    // ^ Step 1: Download the file
    const downloadedFile = await downloadFile("https://www.meta.com");
    console.log("Downloaded file:", downloadedFile);

    // ^ Step 2: Save the file
    const savedFile = await saveFile(downloadedFile, "Desktop");
    console.log("File saved at destination:", savedFile);

    // ^ Step 3: Upload the file
    const uploadStatus = await uploadFile(savedFile, "https://www.insta.com");
    console.log("Upload status:", uploadStatus);

    console.log("Workflow completed successfully!");

    return uploadStatus;
}

console.log("Start");

// * Start the async workflow
let task = executeWorkflow();
task.then((value) => console.log("Everything has done!", value));

console.log("End");