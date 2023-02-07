// Objets - Join two objetcts or more
const product = {
    name: "Tablet",
    price: 300,
    disponibility: true,
  };
  
  const client = {
    name: "Juan",
    premium: true,
  };


  // const newObject = Object.assign(product, client); // No
  const newObject2 =  {
    product:{...product}, 
    client:{...client}
  }
  console.log(newObject2);
  console.log(product);
  console.log(client);