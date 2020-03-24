//Object property shorthand

const name = "Tanishq";
const userAge = 18;

const user = {
  name, //If the name of the property and the name of the variable are same then only name can be used instead of name: name
  age: userAge,
  location: "India"
};

console.log(user);

//Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 200,
  salePrice: undefined
};

//const label = product.label
//const stock = product.stock

const { label, stock } = product; // This is same as the code in comments above

//const { label: productLabel, stock } = product; //This renames label as productLabel

const { rating = 5 } = product; //this makes a new property
