// Operations with arrays

const tech = ["HTML", "CSS", "Javascript", "React", "Nodejs"];

// ============================
// Add elements from the array
// ============================

// Not recommended for react

// tech.push("Grapql") // Add element at the end of the array
// tech.unshift("Pseint") // Add element at the beginning of the array

// Recommended for react

// const newArray = [ "Pseint",...tech, "Grapql"]

// ===============================
// Delete elements from the array
// ===============================

// Not recommended

// tech.pop(); // Deletes the last item from the array
// tech.shift();  // Deletes the first item from the array
// tech.splice(2,1); /// Deletes an specific element from the array

// Recommended for react (filter method)

// const filtrar = tech.filter(function(i){
//     // return i !== "React" // For deleting only "react"
//     return i === "HTML" // For deleting all items except "html"
// })


// ===============================
// Replace elements from the array
// ===============================


// Not recommended

// tech[3] = "Angular";

// Recommended for React

const modify = tech.map(function(i){
    if (i === "React"){
        return "Angular"
    }else{
        return i;
    }
})

console.table(tech);
// console.table(newArray);
// console.table(filtrar);
console.table(modify)