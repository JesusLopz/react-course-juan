// DOM events - Submit

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector(".nombre").value;
  const password = document.querySelector(".password").value;

  if (name === "" || password === "") {
    console.log("Please fill both camps");
  } else {
    console.log("You sent your credentials");
  }
});
