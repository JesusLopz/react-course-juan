// Functions that return values

function sum(num1 = 0, num2 = 0) {
  // return num1 + num2; // <- Normal
//   return [num1 + num2, "Hello World"]; // <- Array destructuring
    return { // Object destructuring
        result: num1 + num2,
        greet: "Hello World"
    }
}

// =======
// Normal
// =======

// const result = sum(2, 3);
// console.log(result);

// ===================
// Array destructuring
// ===================

// const [resultSum, greeting ] = sum(2, 3);
// console.log(resultSum, greeting);


// =====================
// Object destructuring
// =====================

const { result, greet } = sum(11, 11);
console.log(result, greet);