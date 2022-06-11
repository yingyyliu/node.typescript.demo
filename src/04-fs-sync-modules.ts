import * as path from "path";
import { readFileSync, writeFileSync } from "fs";

const filePath1:string = path.join("content", "textFiles", "test.md");
const filePath2:string = path.join("content", "first.txt");

const fileContents1:string = readFileSync(filePath1, "utf-8");
const fileContents2:string = readFileSync(filePath2, "utf-8");

// Save file
const saveFilePath1:string = path.join(path.dirname(filePath1), "merge.txt");
writeFileSync(saveFilePath1, `Result of merging text files:\r\n${fileContents1}\r\n\r\n${fileContents2}`);
