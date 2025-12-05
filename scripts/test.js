
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
deVideoButtonImage.src = "images/pausebutton.svg";
deVideoButtonImage.alt = "pauzeren";
} else {
	deVideo.pause();
deVideoButtonImage.src = "images/playbutton.svg";
	deVideoButtonImage.alt = "play";
}
	
}



// 4.1 zoek de button op
const helpButton = document.querySelector("main button");

// 4.2 zoek de dialog op
const helpDialog = document.querySelector("main dialog");

// 4.3 als je op de klikt, open de dialog met .show()
helpButton.addEventListener("click", () => {
  helpDialog.show();
});