const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  setTimeout(() => {
    console.log("Please turn off the motor! It's a gentle reminder");
  }, 3000);
});

myEmitter.emit("WaterFull");
