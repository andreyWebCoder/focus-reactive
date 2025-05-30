const btnBurger = document.querySelector(".bt-burger");
const nav = document.querySelector(".nav");
function menuToggle() {
	btnBurger.classList.toggle('active');
	nav.classList.toggle('active');
	document.body.classList.toggle('lock-tablet')

}
if (btnBurger) {
	btnBurger.addEventListener("click", menuToggle);
}
