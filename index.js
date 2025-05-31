const menuField = document.getElementById("menu-button");
const navbarListField = document.getElementById("navbar-list-field");

menuField.addEventListener("click", (event) => {
  //   console.log(event.target);
  navbarListField.classList.toggle("active");
});
