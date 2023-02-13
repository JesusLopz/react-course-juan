// Template strings

const product = "Tablet";
const price = 400;
const brand = "Samsung"

function functionText(){
    return "This text comes from a function"
}

// Old way
console.log("This " + product + " costs " + price + " and its brand is called " + brand + ", " + functionText());

// New way - template string

console.log(`This ${product} costs ${price} and its brand is called ${brand}, ${functionText()}`)