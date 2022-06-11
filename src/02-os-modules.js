"use strict";
exports.__esModule = true;
// Modules - Encapsulated code (only share minimum)
// Every file is a module
var os = require("os");
// Current user
var user = os.userInfo();
console.log("User is:\r\n".concat(JSON.stringify(user, null, 2), "\r\n"));
// System uptime (sec)
console.log("The system uptime is: ".concat(os.uptime, " seconds\r\n"));
// Current OS
var currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    hostName: os.hostname()
};
console.log("Current operating system:\r\n".concat(JSON.stringify(currentOS, null, 2), "\r\n"));
