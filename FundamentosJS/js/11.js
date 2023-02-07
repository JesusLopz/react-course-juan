// Iterate an array

const tech = ["HTML", "CSS", "Javascript", "React", "Nodejs"];


// For each acces to each element from the array 
const arrayForEach = tech.forEach(function(i){
    return i
});


// Creates a new array
const arrayMap = tech.map(function(i){
    return i;
})

console.log(arrayForEach);
console.log(arrayMap);