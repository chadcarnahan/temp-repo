const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(
      `<h1>oops! </h1> <p>we can't seem to find the page that you're looking for  </p>
    <a href = "/">back home</a>`
    );
  }
});

server.listen(5000);
