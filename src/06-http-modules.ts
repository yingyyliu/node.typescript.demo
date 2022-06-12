import * as http from "http";

const portNum = 5000;

const server = http
  .createServer((req: any, res: any) => {
    // console.log(req);
    console.log(`request send...`);

    if (req.url === "/") {
      res.end(
        `<html><body><h1>🔥!Welcome to our home page!🔥</h1></body></html>`
      );
    } else if (req.url === "/about") {
      // blocking code
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
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
  .listen(portNum, () =>
    console.log(`Server listening on port: ${portNum}...`)
  );
