const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

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
  res.render("index", { day: day[currentDay] });
});

app.listen("5000", () => {
  console.log("Server is live at 5000");
});
