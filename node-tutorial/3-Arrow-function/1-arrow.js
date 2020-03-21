//? 0-arrow.js using arrow function
//basic arrow function notation
const square = x => {
  return x * x;
};
console.log(square(5));
//If the function implicitly or directly returns a value
const aSquare = x => x * x; // this translates to the above program
console.log(square(2));

//* with object
const event = {
  name: "Birthday Event",
  guestList: ["Name1", "Name2"],
  printGuessList() {
    console.log(`Guest List for ${this.name}`);

    this.guestList.forEach(guest => {
      console.log(`${guest} is attending ${this.name}`);
    });
  }
};

event.printGuessList();
