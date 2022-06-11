import * as path from "path";
import { promises as fs } from "fs";
import { writeFile } from "fs/promises";

//const filePath1:string = path.join("content", "textFiles", "test.md");
const filePath1:string = path.join("content", "textFiles", "test.md");
const filePath2:string = path.join("content", "first.txt");
const saveFilePath1:string = path.join("content", "merge.txt");

const readFile = async (filePath:string) : Promise<string> => {
  const data:string = await fs.readFile(filePath, "utf8");
  return data
}

const mergeFile = async (saveFilePath:string, filePath1:string, filePath2:string) : Promise<void> => {
  const contents1 = await readFile(filePath1);
  const contents2 = await readFile(filePath2);

  // simulate the reading of large file
  await new Promise(resolve => setTimeout(resolve, 1000));

  await writeFile(saveFilePath, `Result of merging text files:\r\n${contents1}\r\n\r\n${contents2}`);
}

console.log(`Starting first tasks...`);
readFile(filePath2).then((data:string) =>
  console.log(`File ${filePath2} contains:\r\n${data}`)).catch((err:any) =>
  console.trace(`\r\n${err.stack}`));

mergeFile(saveFilePath1, filePath1, filePath2).then(() =>
  console.log(`Saved to file ${saveFilePath1}`)).catch((err:any) =>
  console.trace(`\r\n${err.stack}`));

console.log(`Starting second tasks...`);