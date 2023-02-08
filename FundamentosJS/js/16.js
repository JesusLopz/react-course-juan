const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const numbers = [10, 20, 30];

let newArray;

// =======
// Filter
// =======

newArray = technologies.filter((tech) => tech === "HTML");


// ==============================================
// Includes - Check if an element is in the list
// ==============================================

// const result = technologies.includes("GraphQl")

//======================================================================
// Some - Returns true or false if one element matches the condition
// ===================================================================

// const result = numbers.some(num => num < 9)

// ===========================================================
// Find - Returns the first element that matches the condition
// ===========================================================

// const result = numbers.find( num => num > 15);

// ===================================================================
// Every - Returns true or false if all elements from the array matches with the condition
// ======================================================================

// const result = numbers.every( num => num > 9)

// =========
// Reduce
// =========

// const result = numbers.reduce((total, num) => total + num , 0);

// =======
// Filter
// =======

// const result = technologies.filter( tech  => tech !== "Node.js")
// const result = numbers.filter( num  => num >= 20)

// ===============================================
// Foreach - Only when you'll iterate in the array
// ===============================================

// technologies.forEach((tech, index) => console.log(index));


// =====================================
// Map - Returns and create a new array
// =====================================

const arrayMap = technologies.map(tech => tech)

// console.log(result);
console.log(arrayMap);
