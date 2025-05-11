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

// * Recursive function to handle generator execution
function processNextStep(resolvedValue) {
    const nextStep = generatorInstance.next(resolvedValue); // ^ Get the next generator step

    // ^ If the generator is not done, chain the next promise
    if (!nextStep.done) {
        nextStep.value.then(processNextStep); // ^ Continue with resolved value
    }
}

// * Generator to define the overall process
function* processWorkflow() {

    // ^ Step 1: Download the file
    const downloadedFile = yield downloadFile("https://www.meta.com");
    console.log("Downloaded file:", downloadedFile);

    // ^ Step 2: Save the file
    const savedFile = yield saveFile(downloadedFile, "Desktop");
    console.log("File saved at destination:", savedFile);

    // ^ Step 3: Upload the file
    const uploadStatus = yield uploadFile(savedFile, "https://www.insta.com");
    console.log("Upload status:", uploadStatus);

    return uploadStatus;
}

// * Start the process
const generatorInstance = processWorkflow();
const initialPromise = generatorInstance.next(); // Start the generator

// Chain the first promise to the recursive handler
initialPromise.value.then(processNextStep);
