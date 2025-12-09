
// hamburger menu
const deButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");


deButton.onclick = toggleMenu;

function toggleMenu () {
  deButton.classList.toggle("is-open");
  deNav.classList.toggle("is-open");
}

//dialog tarieven pagina

const boekButton2 = document.querySelector("section:nth-of-type(6) button");

// 4.2 zoek de help dialog op
const boekDialog2 = document.querySelector("main dialog");

// 4.3 als je op de klikt, open de dialog met .show()
boekButton2.addEventListener("click", () => {
  boekDialog2.show();
});