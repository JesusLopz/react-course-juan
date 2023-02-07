// Objets - Manipulation with two or more objects

const product = {
  name: "Tablet",
  price: 300,
  disponibility: true,
};

const client = {
  name: "Juan",
  premium: true,
};

const { name, price, disponibility } = product;
const { name: clientName, premium } = client;

console.log(name, price, disponibility);
console.log(clientName, premium);
