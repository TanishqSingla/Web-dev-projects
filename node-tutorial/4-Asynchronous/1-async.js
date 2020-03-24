//! HTTP REQUEST
// getting info about weather from weather api
//? -------------------------------------------------

const request = require("request");

const url = "some url";
request({ url: url, json: true }, (error, response) => {
  //? The json property parse the json already so there is no need to JSON.parse(response.body)
  console.log(response.body.currently);
});
