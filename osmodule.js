const os = require("os");

console.log(os.freemem()); // Shows the free memory available.
console.log(os.homedir()); // Shows the home directory.
console.log(os.arch()); // Shows the arch(x64, x32).
console.log(os.hostname()); // Shows the hostname of your computer.
console.log(os.platform()); // Shows the platform of your os.
console.log(os.release()); // Shows the release version of your os.
console.log(os.totalmem()); // Shows the total memory available in you computer.
console.log(os.type()); // Shows the name of your os.
console.log(os.uptime()); // Shows that, for how much time the system is active.
console.log(os.tmpdir()); // Which is the temporary directory.
console.log(os.networkInterfaces()); // Shows the important networking credentials.
// For more go to the official documentation of node js.
