const http = require("http");

const port = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h3>This is Coder420</h3>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
