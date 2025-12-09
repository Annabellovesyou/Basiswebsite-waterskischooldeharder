
// hamburger menu
const deButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

// video button
const deVideoButtonImage = document.querySelector("main button img");
const videoButton = document.querySelector("section:nth-of-type(4) button");
const deVideo= document.querySelector("video");



deButton.onclick = toggleMenu;

function toggleMenu () {
  deButton.classList.toggle("is-open");
  deNav.classList.toggle("is-open");
}

videoButton.onclick = toggleVideo;

function toggleVideo() {
	
if ( deVideo.paused === true)	{
deVideo.play();	
deVideoButtonImage.src = "images/pausebuttonwit.svg";
deVideoButtonImage.alt = "pauzeren";
} else {
	deVideo.pause();
deVideoButtonImage.src = "images/playbuttonwit.svg";
	deVideoButtonImage.alt = "play";
}	
}

//dialog index pagina

const boekButton = document.querySelector("section:nth-of-type(5) button");

// 4.2 zoek de help dialog op
const boekDialog = document.querySelector("main dialog");

// 4.3 als je op de klikt, open de dialog met .show()
boekButton.addEventListener("click", () => {
  boekDialog.show();
});
