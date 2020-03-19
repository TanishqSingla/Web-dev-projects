// The below code shows how to make a JSON string from a js object

//Required libraries
const fs = require("fs");
//---------------------------------------------

//Declaring object
const book = {
  title: "You don't know js",
  author: "Getify"
};

//to make a JSON string 'stringify' method is used

const bookJSON = JSON.stringify(book);

// Making a JSON file from bookJSON
fs.writeFileSync("0-JSON.json", bookJSON);
