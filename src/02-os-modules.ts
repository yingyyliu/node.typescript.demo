// Modules - Encapsulated code (only share minimum)
// Every file is a module
import * as os from "os";

// Current user
const user:object = os.userInfo();
console.log(`User is:\r\n${JSON.stringify(user, null, 2)}\r\n`);

// System uptime (sec)
console.log(`The system uptime is: ${os.uptime} seconds\r\n`);

// Current OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostName: os.hostname()
}
console.log(`Current operating system:\r\n${JSON.stringify(currentOS, null, 2)}\r\n`);
