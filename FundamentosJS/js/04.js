//Objects

// const name = "Tablet";
// const price = 300;
// const disponibility = true;

const product = {
  nameProduct: "Tablet",
  price: 300,
  disponibility: true,
};

console.log(product);
console.table(product);

console.log(product.nameProduct);
console.log(product.price);
console.log(product.disponibility);

// Destructuring

const { nameProduct, price, disponibility } = product;
console.log(nameProduct);
console.log(price);
console.log(disponibility);

// Object literal enhancement

const auth = true;
const user = "Juan";

const newObject = {
  // auth: auth,
  // user: user
  auth,
  user,
};

console.table(newObject);
