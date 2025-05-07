const myForm = document.querySelector("3my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#user");

myForm.addEventListener("submit", inSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "")
    msg.classList.add("error");
  msg.innerHTML = "Please enter all fields";

  setTimeout(() => msg.remove(), 3000);
}
