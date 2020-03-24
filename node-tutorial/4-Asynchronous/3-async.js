//! Callbacks

setTimeout(() => {
  console.log("Two Seconds are up");
}, 2000);

const names = ["Tanishq", "Luv", "Nitin", "Shivam", "Ayush"];
const shortNames = names.filter(name => name.length <= 5);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    };

    callback(data);
  }, 2000);
};

geocode("Philadelphia", data => {
  console.log(data);
});
