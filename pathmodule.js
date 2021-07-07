const path = require("path");

const a1 = path.basename("C:\\temp\\myFile.html"); // Prints the basename of the whole path.
const a2 = path.dirname("C:\\temp\\myFile.html"); // Prints the dirname of the whole path.
const a3 = path.extname(__filename); // Prints extension name of whole path.
console.log(a1);
console.log(a2);
console.log(a3);
// For more go the official documentation of node js.
