// Functions - Function declaration

// Fact - the sum() function can be called even at the beginning thanks to the "hoisting"

function sum(){
    console.log(2+2);
};

sum();

// ===================================================
// Intelligent Functions with parameters and arguments
// ===================================================


function rest(num = 0, num2 = 0){ // <- These are called parameters 
    console.log(num - num2);
} 

rest(100, 20); // <- These are called arguments