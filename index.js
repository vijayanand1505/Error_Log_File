const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("log", (msg) => {
  logEvents(msg);
});

myEmitter.emit("log", "Log event emitted!");

// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');

// console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'));
// console.log(uuid());
