// Importing using commonJS module:
// const simple = require("./moduleSecond") // for only one export
// const simple = require("./moduleSecond.mjs")
// simple.complex()

// Importing using EcmaScript module:
import { simple2 as simple } from "./moduleSecond.mjs"; // You have to use these curly braces if the module is not exported default, by using "export default simple()" instead of "export simple()"
simple();
