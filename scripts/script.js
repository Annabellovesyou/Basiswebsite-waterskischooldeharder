
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

