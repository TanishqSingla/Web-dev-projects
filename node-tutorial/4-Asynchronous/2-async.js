//Geocoding challenge
const request = require("request");

const url =
  "https://us1.locationiq.com/v1/search.php?key=d92749dd0546c9&q=Los%20Angeles&format=json";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect, pls check your search query");
  } else if (response.body.error) {
    console.log("unable to connect");
  } else {
    const lat = response.body[0].lat;
    const long = response.body[0].lon;
    console.log(lat, long);
  }
});
