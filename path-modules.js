//Path modules
const path = require("path");

// separator property that returns a platform specific separator
console.log(path.sep);
// \

// join property that joins a sequence of paths into a normalized
// path using that platform specific separator
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
// \content\subfolder\test.txt

// basename property that grabs the last sequence in a path
console.log(path.basename(filePath));
// test.txt

// resolve property that takes a sequence of paths and returns
// an absolute path using __dirname global variable

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// C:\Users\mikej\Desktop\Programming\node-tutorial\content\subfolder\test.txt
