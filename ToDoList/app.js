const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  items = [];

  res.render("index", { day: day[currentDay], newListItem: items });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen("5000", () => {
  console.log("Server is live at 5000");
});
