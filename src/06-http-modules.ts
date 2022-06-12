import * as http from "http";

const portNum = 5000;

const server = http
  .createServer((req, res) => {
    console.log(req);

    if (req.url === "/") {
      res.end(
        `<html><body><h1>🔥!Welcome to our home page!🔥</h1></body></html>`
      );
    } else if (req.url === "/about") {
      res.end(`<html><body><h2>Here is our short history</h2></body></html>`);
    } else {
      res.end(`<html><body>
    <h1>Oops... </h1>
    <p>We can't seem to find the age you're looking for</p>
    <a href="/">back home</a>
    </body></html>
    `);
    }
  })
  .listen(portNum);

console.log(`Please goto: localhost:${portNum}`);
