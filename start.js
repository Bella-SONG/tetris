const startScr = document.querySelector(".intro");
const startBtn = document.querySelector(".intro button");
const mainScr = document.querySelector(".main");
startBtn.addEventListener("click", function () {
	startScr.style.display = "none";
	mainScr.style.display = "block";
});
