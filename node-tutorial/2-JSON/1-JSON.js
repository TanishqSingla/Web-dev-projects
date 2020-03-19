//This file shows how to parse data from a JSON file or in other words how to extract data from JSON to form a js object

// required libs
const fs = require("fs");

const dataBuffer = fs.readFileSync("0-JSON.json"); //This reads the data from the json file, but it reads it in binary
const dataJSON = dataBuffer.toString(); //This would give us the desired output not the binary
const data = JSON.parse(dataJSON); //This makes the data into a js object

console.log(data.title); //extracting the title from newly created object data
