const menuButton = document.querySelector("header nav button");
const menuList = document.querySelector("header nav ul");


menuButton.onclick = toggleButton;

function toggleButton(){
  menuButton.classList.toggle("open");
  menuList.classList.toggle("hidden");
}