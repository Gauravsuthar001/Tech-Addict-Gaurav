const navitems = document.querySelector(".menu-links");
const navitem = document.querySelectorAll(".menu-links li");
const menu = document.querySelector(".menu-btn");
const Xicon = document.querySelector(".Xicon");

for (let i = 0; i < navitem.length; i++) {
  navitem[i].addEventListener("click", closenav1);
}
function opennav1() {
  menu.style.display = "none";
  Xicon.style.display = "flex";
  navitems.style.display = "flex";
}
function closenav1() {
  menu.style.display = "flex";
  Xicon.style.display = "none";
  navitems.style.display = "none";
}
menu.addEventListener("click", opennav1);
Xicon.addEventListener("click", closenav1);