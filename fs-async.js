// FS Asynchronously
const { readFile, writeFile } = require("fs");

// callback hell to retrieve both file data and write onto new file
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Result: ${first} ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else console.log(result);
          }
        );
      }
    });
  }
});

// writing new content
writeFile(
  "./content/result-async-new.txt",
  "hello this is an async fs write",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  }
);
