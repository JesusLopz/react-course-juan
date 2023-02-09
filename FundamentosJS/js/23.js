// Manipulation HTML elements

const heading = document.querySelector(".heading");
heading.textContent = "New heading";
console.log(heading.textContent);

const inputName = document.querySelector("#nombre");
inputName.value = "Default Value"
console.log(inputName);


const links = document.querySelectorAll(".navegacion a");
links.forEach(link => link.textContent = "New link")
