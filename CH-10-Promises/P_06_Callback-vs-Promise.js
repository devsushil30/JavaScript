// Todo: Download -> Save -> Upload (Using Callbacks)

function download(url, processAfterDownload) {
    console.log("Started downloading from : ", url);
    setTimeout(() => {
        console.log("Download completed");
        let downloadedFile = "Dora File";
        processAfterDownload(downloadedFile);
    }, 5000);
    console.log("Download function ends here!");
}

function save(fileToSave, location, processAfterSaving) {
    console.log("Files is saving at: ", location);
    setTimeout(() => {
        console.log("File saved successfully");
        processAfterSaving("Done");
    }, 3000);
    console.log("Save function ends here!");
}

function upload(file, url, processAfterUpload) {
    console.log("File is uploading to : ", url);
    setTimeout(() => {
        console.log("File is uploaded successfully");
        let status = "Success";
        processAfterUpload(status);
    }, 8000);
    console.log("Upload function ends here!");
}

function process() {
    download("www.meta.com", (fileToSave) => {
        console.log(`We are having a file ${fileToSave} to save`);
        save(fileToSave, "Desktop", (msg) => {
            console.log(`File ${fileToSave} is saved at "Desktop"`);
            upload("Dora File", "www.google.com", (status) => {
                console.log("All Done", status);
            });
        });
    });
}

// process();

// download("www.v.com",(file) => {console.log("Downloaded file is:", file);})

// Todo: Download -> Save -> Upload (Using Promises)

function funDownload(url) {
    return new Promise(function downloadExecutor(resolve, reject) {
        console.log("Started downloading from : ", url);
        setTimeout(() => {
            console.log("Download completed");
            let downloadedData = "Dora.mp4";
            resolve(downloadedData);
        }, 5000);
    });
}

function funSave(file, location) {
    return new Promise(function saveExecutor(resolve, reject) {
        console.log("Started saving the file");
        setTimeout(() => {
            console.log("File saved successfully");
            resolve(file);
        }, 3000);
    });
}

function funUpload(file, url) {
    return new Promise(function uploadExecutor(resolve, reject) {
        console.log("Started uploading the file");
        setTimeout(() => {
            console.log("File uploaded successfully");
            resolve("Done");
        }, 8000);
    });
}

funDownload("www.meta.com")
    .then(function fun1(fileToSave) {
        console.log(`we are having a file ${fileToSave} to save`);
        return funSave(fileToSave, "Desktop");
    })
    .then(function fun2(savedFile) {
        console.log(`The file ${savedFile} has been saved now`);
        return funUpload(savedFile, "www.twitter.com");
    })
    .then(function fun3(uploadedFile) {
        console.log(`The file ${uploadedFile} has been uploaded`);
        return "Success";
    })
    .then(function status(msg) {
        console.log("Everything has done:", msg);
    })