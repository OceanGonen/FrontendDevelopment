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


// Table collpase

const prevDayButton = document.querySelector("main > section > button:nth-of-type(1)");
const nextDayButton = document.querySelector("main > section > button:nth-of-type(2)");
const table = document.querySelector("table");

const minNumber = 2;
const maxNumber = 8;

// GO TO NEXT DAY
nextDayButton.onclick = goToNextDay;

function goToNextDay() {	
	// determine new number
	let huidigeNummer = parseInt( table.dataset.number );
	let nieuweNummer = huidigeNummer + 1;

	
  // check buttons 	
	prevDayButton.disabled = false;
	if (nieuweNummer == maxNumber) {
		nextDayButton.disabled = true;
	}
	
	// check and set new number
	if (nieuweNummer > maxNumber) {
		nieuweNummer = maxNumber;
	}
	table.dataset.number = nieuweNummer;
}

// GO TO PREVIOUS DAY
prevDayButton.onclick = goToPrevDay;

function goToPrevDay() {	
	// determine new number
	let huidigeNummer = parseInt( table.dataset.number );
	let nieuweNummer = huidigeNummer - 1;
	
	// check buttons 	
	nextDayButton.disabled = false;
	if (nieuweNummer == minNumber) {
		prevDayButton.disabled = true;
	}
	
	// check and set new number
	if (nieuweNummer < minNumber) {
		nieuweNummer = minNumber;
	}
	table.dataset.number = nieuweNummer;
}


//BACK TO TOP 

const backToTopButton = document.querySelector("main>a:nth-of-type(2)");

backToTopButton.onclick = scrollToTop; 

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }