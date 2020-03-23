//! HTTP REQUEST
// getting info about weather from weather api
//? -------------------------------------------------

const request = require("request");

const url =
  "https://api.darksky.net/forecast/a75189e53de8cdc42a2eb8e7bdc1c4d7/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  //? The json property parse the json already so there is no need to JSON.parse(response.body)
  console.log(response.body.currently);
});
