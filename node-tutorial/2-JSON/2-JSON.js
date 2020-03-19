//This file shows how to change data of a JSON string
const fs = require("fs");

const data = fs.readFileSync("2-JSON.json");
const dataJSON = data.toString();
const user = JSON.parse(dataJSON);

user.name = "Tanishq";
user.age = 18;

const userJSON = JSON.stringify(user);
fs.writeFileSync("2-JSON.json", userJSON);
