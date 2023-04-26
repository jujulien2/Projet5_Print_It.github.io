const slides = [
	{
		image: document.querySelector(".imgOne"),
		tagLine: document.querySelector(".textOne"),
		dot: document.querySelector(".dotOne")
	},
	{
		image: document.querySelector(".imgTwo"),
		tagLine: document.querySelector(".textTwo"),
		dot: document.querySelector(".dotTwo")
	},
	{
		image: document.querySelector(".imgThree"),
		tagLine: document.querySelector(".textThree"),
		dot: document.querySelector(".dotThree")
	},
	{
		image: document.querySelector(".imgFour"),
		tagLine: document.querySelector(".textFour"),
		dot: document.querySelector(".dotFour")
	}
]


for (let i = 1; i < slides.length; i++) {
	slides[i].image.classList.add("hidden");
	slides[i].tagLine.classList.add("hidden");

}
let imageActive = 0;
slides[imageActive].image.classList.add("show");
document.querySelector(".arrow_right").addEventListener('click', function () {
	slides[imageActive].image.classList.remove("show");
	slides[imageActive].image.classList.add("hidden");
	slides[imageActive].tagLine.classList.add("hidden");
	slides[imageActive].dot.classList.remove("dot_selected");

	imageActive += 1;
	if (imageActive >= slides.length) {
		imageActive = 0;
	}
	setTimeout(function () {
		slides[imageActive].image.classList.add("show");
	}, 80);
	slides[imageActive].dot.classList.add("dot_selected");
	slides[imageActive].image.classList.remove("hidden");
	slides[imageActive].tagLine.classList.remove("hidden");


})

document.querySelector(".arrow_left").addEventListener('click', function () {
	slides[imageActive].image.classList.remove("show");
	slides[imageActive].image.classList.add("hidden");
	slides[imageActive].tagLine.classList.add("hidden");
	slides[imageActive].dot.classList.remove("dot_selected");

	imageActive -= 1;
	if (imageActive < 0) {
		imageActive = slides.length - 1;
	}
	setTimeout(function () {
		slides[imageActive].image.classList.add("show");
	}, 80);
	slides[imageActive].dot.classList.add("dot_selected");
	slides[imageActive].image.classList.remove("hidden");
	slides[imageActive].tagLine.classList.remove("hidden");

})

