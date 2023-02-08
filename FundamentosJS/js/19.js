// Conditional || and &&

const balance = 700;
const dueToPay = 500;
const card = false;


/*

|| - It has to met only one condition to execute
&& - All conditions have to met the condition in order to be executed. 
*/


if (balance > dueToPay || card) {
  console.log("You can pay");
} else {
  console.log("You can't pay");
}
