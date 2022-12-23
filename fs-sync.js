// FS (file system) Module
const { readFileSync, writeFileSync } = require("fs");

// using readFileSync method
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
// Here is the first text file

// using writeFileSync to write onto a file
// creates new one if it doesn't exist
writeFileSync(
  "./content/results-sync.txt",
  `Here are your results: ${first}, ${second}`
);

const pathRead = readFileSync("./utils.js", "utf-8");
console.log(pathEx);
// function sayHi(name) {
//     console.log(`Hello there ${name}!`);
//   }
//   const hello = "Hello";
//   // exporting single function
//   module.exports = hello;
