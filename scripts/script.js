const menuButton = document.querySelector("header nav button");
const menuList = document.querySelector("header nav ul");


menuButton.onclick = toggleButton;

function toggleButton() {
  menuButton.classList.toggle("open");
  menuList.classList.toggle("hidden");
}

// Toggle between light and dark themes
document.querySelector('header > button').addEventListener('click', () => {
  const body = document.body;
  const icon = document.querySelector("body > header > button > img");

  //ChatGTP, prompt: how do i use the second method where i only invert the svg when light mode is on 
  if (body.dataset.theme === 'light') {
    body.dataset.theme = 'dark';
    icon.style.transform = 'rotate(0deg)';

  } else {
    body.dataset.theme = 'light';
    // ChatGTP, prompt: how do i make an img flip 180 deg in a js function?
    icon.style.transform = 'rotate(180deg)';

  }
});
