const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h3>This is Coder420</h3> <p>This is the paragraph of Coder420</p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h3>About Coder420</h3> <p>This is about Coder420</p>");
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end(
      "<h3>Page Not Found</h3> <p>The page you requested dosen't seem to be present on the server!</p>"
    );
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
