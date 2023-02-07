// Functions - Arrow Functions

// ====================
// Function Expression
// ====================

// const sum = function(){ // <- Function Expression
//     return 2 + 2;
// }

// ===============
// Arrow Function
// ===============

const sum = () => 2+2;

const result = sum();
console.log(result);


// Example with one parameter

const client = (name, age) => `My name is ${name} and i'm ${age} years old`;

const resultName = client("Jesus", 30);
console.log(resultName)