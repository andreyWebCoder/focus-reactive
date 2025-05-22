var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
; 

const btnBurger = document.querySelector(".bt-burger");
const nav = document.querySelector(".nav");
function menuToggle() {
	btnBurger.classList.toggle('active');
	nav.classList.toggle('active');
	document.body.classList.toggle('lock')

}
if (btnBurger) {
	btnBurger.addEventListener("click", menuToggle);
}

const projectItem = document.querySelectorAll('.project--animate');
if (projectItem.length > 0) {
	projectItem.forEach(item => {
		let timeout;

		item.addEventListener('mouseenter', () => {
			// Сбрасываем предыдущую задержку, если пользователь быстро двигает мышь
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				projectItem.forEach(subItem => {
					subItem.classList.remove('open');
				});
				item.classList.add('open');
			}, 300); // задержка 300 мс
		});

		// Чтобы отменить задержку, если мышь ушла раньше
		item.addEventListener('mouseleave', () => {
			clearTimeout(timeout);
		});
	});
}

const laptopScreen = window.matchMedia('(min-width: 768px)');
gsap.registerPlugin(ScrollTrigger);
const animPage = document.querySelector(".page--anim");
const tlAnim = gsap.timeline();
if (tlAnim) {
	if (laptopScreen.matches) {
		tlAnim.from(animPage, {
			scrollTrigger: {
				trigger: animPage,
				start: '0 0',
				scrub: true,
				pin: true,

			},

		}).from('.anim__titles', {
			scrollTrigger: {
				trigger: animPage,
				start: '0 5%',
				end: '=+1000',
				scrub: true,
			},
			y: '50vh',
		}).from('.anim__title', {
			scrollTrigger: {
				trigger: animPage,
				start: '0 0',
				scrub: true,
			},
			css: {
				color: 'white',
			},
		}).from('.anim-card', {
			scrollTrigger: {
				trigger: animPage,
				start: 'top bottom',
				scrub: true,
			},
			stagger: 0.15,
			y: '-45vh',
		}).from('.anim__titles', {
			scrollTrigger: {
				trigger: animPage,
				start: 'top -0.4%',
				scrub: true,
				onEnter: () => document.querySelector(".anim__titles").classList.add("active"),
				onLeaveBack: () => document.querySelector(".anim__titles").classList.remove("active"),
			},
		})
		document.querySelectorAll('.anim-card__body').forEach(body => {
			ScrollTrigger.create({
				trigger: animPage,
				start: '-10px top',
				end: '100% 100%',
				scrub: true,
				onEnter: () => body.classList.add('active'),
				onLeaveBack: () => body.classList.remove('active'),
			});
		});
	} else {
		tlAnim.from(animPage, {
			scrollTrigger: {
				trigger: animPage,
				start: '-1% -1%',
				scrub: true,
				pin: true,
			}
		}).from('.anim__titles', {
			scrollTrigger: {
				trigger: animPage,
				start: '0 0',
				scrub: true,
			},
			y: '15vh',
		}).from('.anim__title', {
			scrollTrigger: {
				trigger: animPage,
				start: '0 0',
				scrub: true,
			},
			css: {
				color: 'white',
			},
		}).from('.anim-card', {
			scrollTrigger: {
				trigger: animPage,
				start: 'top bottom',
				scrub: true,
			},
			stagger: 0.15,
			y: '-45vh',
		}).from('.anim__titles', {
			scrollTrigger: {
				trigger: animPage,
				start: 'top -0.8%',
				scrub: true,
				onEnter: () => document.querySelector(".anim__titles").classList.add("active"),
				onLeaveBack: () => document.querySelector(".anim__titles").classList.remove("active"),
				// markers: true,
			},

		})

		document.querySelectorAll('.anim-card__body').forEach(body => {
			ScrollTrigger.create({
				trigger: animPage,
				start: '-10px top',
				scrub: true,
				onEnter: () => body.classList.add('active'),
				onLeaveBack: () => body.classList.remove('active'),
			});
		});
	}
}
//==RATING======================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}
// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}
