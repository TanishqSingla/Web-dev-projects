const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You just made a request");
});

app.get("/help", (req, res) => {
  res.send("This is the help page");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen("4000", () => {
  console.log("Server is up at port 4000");
});
