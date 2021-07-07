const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const nav = fs.readFileSync("navbar.html"); // Implementing DRY principle
  const data = fs.readFileSync("index.html");
  res.send(nav.toString() + " " + data.toString());
});

app.get("/about", (req, res) => {
  res.send("This is the about page!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
