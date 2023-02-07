const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];


// const arrayFilter = technologies.filter(function(i){
//     return i !== "React"
// })

const arrayFilter = technologies.filter( i => i !== "React") //<- It's the same as above

// const arrayMap = technologies.map(function (i) {
//     if(i === "React"){
//         return "Angular"
//     }else{
//         return i
//     }
// });

const arrayMap = technologies.map( i => {
    if (i === "React"){
        return "Angular";
    }else{
        return i;
    }
})

console.table(arrayFilter)
console.table(arrayMap)