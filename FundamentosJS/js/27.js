// Generating code in html

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector(".nombre").value;
  const password = document.querySelector(".password").value;

  const previousAlert = document.querySelector(".alerta")

  if(previousAlert){
    previousAlert.remove()
  }

  const alert =document.createElement("DIV");
  alert.classList.add('alerta')


  if (name === "" || password === "") {
    // console.log("Please complete both fields");
    alert.textContent = "please complete"
    alert.classList.add("error")
  } else {
    // console.log("Congratz, data sent");
    alert.textContent = "Success"
    alert.classList.add("exito")
  }

  form.appendChild(alert)
});
