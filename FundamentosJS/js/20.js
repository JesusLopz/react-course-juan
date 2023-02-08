// Ternary operator

const authicated = true;

authicated
  ? console.log("You are authenticated")
  : console.log("You are not authenticated");

//   Double ternary

const balance = 800;
const dueToPayment = 1000;
const card = false;

balance > dueToPayment
  ? console.log("You can pay")
  : card
  ? console.log("You can pay with card")
  : console.log("You can't pay");
