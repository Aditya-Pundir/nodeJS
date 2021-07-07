// Common JS module:

// function simple(){
//     console.log("This is simple")
// }

// // Exporting using commonJS module:
// // module.exports = simple // Main export
// exports.complex = simple; // Custom named export as a method for the Main Export

// EcmaScript module written after renaming the extension to .mjs

export function simple() {
  console.log("This is simple");
}
export function simple2() {
  console.log("This is simple2");
}

// To do this you would have to edit "type": "module" your package.json file.
