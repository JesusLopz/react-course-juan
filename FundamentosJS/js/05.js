// Objets - Manipulation

const product = {
    nameProduct: "Tablet",
    price: 300,
    disponibility: true,
  };

  // Object.freeze(product); // Don't let you to modify

  // Object.seal(product); // It let you modify but not to add or delete new proterties and values from the object.

  // Rewrite a value
  product.nameProduct = "Curved monitor"

  // If Doesn't exists, it will add it to the table
  product.image = "image.jpg"


  delete product.disponibility

  console.table(product);