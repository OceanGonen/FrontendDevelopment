const menuButton = document.querySelector("header nav button");
const menuList = document.querySelector("header nav ul");

menuButton.onclick = toggleMenu;

function toggleMenu() {
  menuList.classList.toggle("hidden");
}