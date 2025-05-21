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
; //Функция которая определяет точскрин или десктоп

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

//  new
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

gsap.registerPlugin(ScrollTrigger);
const tlAnim = gsap.timeline();
tlAnim.from('.page--anim', {
	scrollTrigger: {
		trigger: '.page--anim',
		start: '0 0',
		scrub: true,
		pin: true,
	}
})
	.from('.anim__titles', {
		scrollTrigger: {
			trigger: '.page--anim',
			start: '0 0',
			scrub: true,
		},
		y: '55vh',
	})
	.from('.anim__title', {
		scrollTrigger: {
			trigger: '.page--anim',
			start: '0 0',
			scrub: true,
		},
		css: {
			color: 'white',
		},
	}).from('.anim-card', {
		scrollTrigger: {
			trigger: '.page--anim',
			start: 'top bottom',
			scrub: true,
		},
		stagger: 0.15,
		y: '-45vh',
	}).from('.anim__titles', {
		scrollTrigger: {
			trigger: '.page--anim',
			start: '+=5px  top',
			end: '100% 100%',
			scrub: true,
			onEnter: () => document.querySelector(".anim__titles").classList.add("active"),
			onLeaveBack: () => document.querySelector(".anim__titles").classList.remove("active"),
			// markers: true,
		},

	})

document.querySelectorAll('.anim-card__body').forEach(body => {
	ScrollTrigger.create({
		trigger: '.page--anim',
		start: '-10px top',
		end: '100% 100%',
		scrub: true,
		// markers: true,
		onEnter: () => body.classList.add('active'),
		onLeaveBack: () => body.classList.remove('active'),
	});
});


//  new





// // animate content box module
// let mm = gsap.matchMedia();
// mm.add("(min-width: 992px)", () => {
// 	let containerAnimItem = gsap.utils.toArray(".dc-anim-wrap");
// 	containerAnimItem.forEach((item, i) => {
// 		const tlContainer = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: item,
// 				start: "-=100px 60%",
// 				end: '450px 60%',
// 				scrub: true,
// 			}
// 		});
// 		tlContainer.from(item, { overflow: 'visible', })
// 	});
// 	let animateSlides = gsap.utils.toArray('.anim-car');
// 	animateSlides.forEach((elem, i) => {
// 		const tlSlides = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: elem,
// 				start: "-=300% 60%",
// 				end: '450% 60%',
// 				scrub: 1,
// 			}
// 		});
// 		tlSlides.from(elem, {
// 			marginLeft: '-25%',
// 			marginRight: '50%',
// 			duration: 1.5,
// 			ease: "laniar",
// 		})
// 		tlSlides.to(elem, {
// 			marginLeft: '-25%',
// 			marginRight: '50%',
// 			duration: 1.5,
// 			ease: "laniar",
// 		})
// 	});
// 	return () => { };
// });
// // animate referens module row
// const animRow = document.querySelector('.dc-anim-row');
// if (animRow) {
// 	const tlRow = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.dc-teaser',
// 			start: '-30% center',
// 			end: '140% center',
// 			scrub: 1,
// 		}
// 	});
// 	tlRow.from(".dc-anim-row .dc-imgs-container", {
// 		duration: 1,
// 		left: '-100%',
// 		ease: 'lanier',
// 	})
// 	tlRow.to(".dc-anim-row .dc-imgs-container", {
// 		duration: 1,
// 		left: '-100%',
// 		ease: 'lanier',
// 	})
// }
// const animCardsRow = document.querySelector('.dc-anim-row');
// if (animCardsRow) {
// 	const tlCardsRow = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.dc-teaser',
// 			start: '-30% center',
// 			end: '140% center',
// 			scrub: 1,
// 		}
// 	});
// 	tlCardsRow.from(".dc-anim-row .dc-card-referens", {
// 		duration: 1,
// 		right: '-100%',
// 		ease: 'lanier',
// 		stagger: {
// 			each: 0.1,
// 			from: 'start'
// 		},
// 	})
// 	tlCardsRow.to(".dc-anim-row .dc-card-referens", {
// 		duration: 1,
// 		right: '-100%',
// 		ease: 'lanier',
// 		stagger: {
// 			each: 0.1,
// 			from: 'start'
// 		},
// 	})
// }
// // animate referens module row reverse
// const animRowReverse = document.querySelector('.dc-anim-revers');
// if (animRowReverse) {
// 	const tlRowRevers = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.dc-teaser',
// 			start: '-30% center',
// 			end: '140% center',
// 			scrub: 1,
// 		}
// 	});
// 	tlRowRevers.from(".dc-anim-revers .dc-imgs-container", {
// 		duration: 1,
// 		right: '-100%',
// 		ease: 'lanier',
// 	})
// 	tlRowRevers.to(".dc-anim-revers .dc-imgs-container", {
// 		duration: 1,
// 		right: '-100%',
// 		ease: 'lanier',
// 	})
// }
// const animCardsRowReverse = document.querySelector('.dc-anim-revers');
// if (animCardsRowReverse) {
// 	const tlCardsRowRevers = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.dc-teaser',
// 			start: '-30% center',
// 			end: '140% center',
// 			scrub: 1,
// 		}
// 	});
// 	tlCardsRowRevers.from(".dc-anim-revers .dc-card-referens", {
// 		duration: 1,
// 		left: '-100%',
// 		ease: 'lanier',
// 		stagger: {
// 			each: 0.1,
// 			from: 'start'
// 		},
// 	})
// 	tlCardsRowRevers.to(".dc-anim-revers .dc-card-referens", {
// 		duration: 1,
// 		left: '-100%',
// 		ease: 'lanier',
// 		stagger: {
// 			each: 0.1,
// 			from: 'start'
// 		},
// 	})
// }

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
