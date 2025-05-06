function downloadFile(url, callback) {
    console.log("Started downloading from:", url); // 1
    setTimeout(() => {
        let file = "Doraemon.mp4";
        console.log("Download complete!"); // 2
        callback(file);
    }, 5000);
}

function saveFile(fileToSave, location, callback) {
    console.log(`Saving file at ${location}`); // 3
    setTimeout(() => {
        console.log("File Saved!"); // 4
        callback("Done");
    }, 3000);
}

function uploadFile(fileToUpload, url, callback) {
    console.log("File uploading has started..."); // 5
    setTimeout(() => {
        let status = "Success";
        console.log(`${fileToUpload} has been uploaded at ${url}`); // 6
        callback(status);
    }, 7000);
}

function process() {
    downloadFile("www.youtube.com", function f1(file) {
        saveFile(file, "desktop", function f2(msg) {
            uploadFile("Shinchan.mp4", "www.instagram.com", function f3() {
                console.log("Everything has executed successfully"); // 7
            });
        });
    });
}

process()
