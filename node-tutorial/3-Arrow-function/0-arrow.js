//? Conventional way, (till ES5)
const square = function(x) {
  return x * x;
};
console.log(square(3));

//* With objects
const event = {
  name: "Birthday Party",
  guestList: ["Name1", "Name2"],
  printGuestList() {
    //* This thing translates to printGuestList: function() {}
    /* Note: the function() {} is used in the above situation because arrow function don't bind to the object, 
    and we'll see how they are used in the next chapter of arrow function */
    const that = this;
    console.log(`Guest List for ${this.name}`);

    this.guestList.forEach(function(guest) {
      console.log(`${guest} is attending ${that.name}`);
      /* Note: here that is used because the function() statement here would bind it's own this
            so the end result of this.name would be undefined to prevent that a const that is declared and used
        */
    });
  }
};

event.printGuestList();
