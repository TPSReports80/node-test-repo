// HTTP Module
const http = require("http");

// create server with http object and createServer method
// taking 2 parameters, request and response back.
const server = http.createServer((req, res) => {
  // check the incoming request url
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end(`This is our about page.`);
  }
  // end the response for unknown request
  res.end("Opps, no known page.");
});

// specify the port
server.listen(4000);
