// Using CommonJS module
const fs = require("fs");

// fs.readFile and fs.readFileSync:

// fs.readFile("index.js", "utf8", (err, data) => {
//   console.log(err, data);
// });
// console.log("Finished reading file!");

// ReadFileSync, If you want Blocking I/O model
// const a = fs.readFileSync("index.js");
// console.log(a.toString()); // Here toString() is used to convert the output to string otherwise it would have come in buffer format.

// console.log("Finished reading file synchronously!");

// fs.writeFile:
// fs.writeFile("file.txt", "This is the data", () => {
//   console.log("Written to the file!");
// });

// fs.writeFileSync, If you want Blocking I/O model
b = fs.writeFileSync("file.txt", "This is the data written by writeFileSync()");
console.log(b);
console.log("Finished reading file!");
