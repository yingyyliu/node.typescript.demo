// Modules - Encapsulated code (only share minimum)
// Every file is a module
import * as path from "path";
import * as fs from "fs";

// Path separator
console.log(`Path separator is ${path.sep}\r\n`);

// Join paths
const filePath:string = path.join("content", "textFiles", "test.md");
console.log(`File relative path: ${filePath}`);
console.log(`Absolute file path: ${path.resolve(filePath)}`)
console.log(`File path basename: ${path.basename(filePath)}`);

const isFilePathExists:boolean = fs.existsSync(filePath);
isFilePathExists ?
  console.log(`The file ${filePath} exists`):
  console.error(`No such file ${filePath}`);
