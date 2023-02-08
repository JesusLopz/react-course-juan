// Conditional comparation with == and ===

const number1 = 20;
const number2 = "20";

/*
== (Comparation but not strict)
=== (Strict comparation - Checks value and type of vule)
*/



if (number1 === number2){
    console.log("Yes, they are equal");
}else{
    console.log("No, They are not equals");
}


const auth = true;

if(auth){
    console.log("Yes, It's authenticated")
}else {
    console.log("No, It's not authenticated")
}