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
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});;
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();; 

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

//Класс родитя куда переносим елемент data-move-to="",
//розмер вьюпорта когда нужно переносить елемент data-breakpoint=""
const movableElements = document.querySelectorAll("[data-move-to]");
const originalData = new Map();

// Сохраняем исходных родителей
if (movableElements) {
	movableElements.forEach(el => {
		originalData.set(el, {
			parent: el.parentNode,
			nextSibling: el.nextElementSibling,
		});
	});
}
function relocateElements() {
	const viewportWidth = window.innerWidth;

	movableElements.forEach(el => {
		const breakpoint = parseInt(el.dataset.breakpoint, 10);
		const targetSelector = el.dataset.moveTo;

		// Ищем целевой контейнер относительно родителя
		let parent = el.parentElement;
		let target = null;
		while (parent) {
			target = parent.querySelector(targetSelector);
			if (target) break;
			parent = parent.parentElement;
		}

		const original = originalData.get(el);

		if (!target || !original) return;

		if (viewportWidth <= breakpoint && el.parentNode !== target) {
			target.appendChild(el);
		} else if (viewportWidth > breakpoint && el.parentNode !== original.parent) {
			// Вставляем перед сохранённым соседом (если он всё ещё существует)
			if (
				original.nextSibling &&
				original.nextSibling.parentNode === original.parent
			) {
				original.parent.insertBefore(el, original.nextSibling);
			} else {
				original.parent.appendChild(el);
			}
		}
	});
}

window.addEventListener("DOMContentLoaded", relocateElements);
window.addEventListener("resize", relocateElements);
const projectItems = document.querySelectorAll('[data-js-project]');

if (projectItems.length > 0 && window.innerWidth > 767.98) {
	projectItems.forEach(item => {
		let timeout;
		let cachedHeight = item.scrollHeight + 2;
		if (item.classList.contains('open')) {
			item.style.maxHeight = cachedHeight - 2 + "px";
		}

		item.addEventListener('mouseenter', () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				projectItems.forEach(subItem => {
					subItem.classList.remove('open');
					subItem.style.maxHeight = null;
					subItem.style.cursor = 'pointer';
				});

				item.classList.add('open');

				if (item.style.maxHeight !== `${cachedHeight}px`) {
					item.style.maxHeight = cachedHeight + "px";
				}
				item.style.cursor = 'none';
			}, 300);
		});

		item.addEventListener('mouseleave', () => {
			clearTimeout(timeout);
		});

		item.addEventListener('mousemove', e => {
			const cursor = item.querySelector('[data-js-cursor]');
			if (cursor) {
				window.requestAnimationFrame(() => {
					cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
					cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
				});
			}
		});
	});
}


gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
const animPage = gsap.utils.toArray(".page--anim");

if (animPage.length > 0) {

	const animateItem = (item, config) => {
		const tl = gsap.timeline();

		tl.from(item, {
			scrollTrigger: {
				trigger: item,
				start: config.pinStart,
				scrub: true,
				pin: true,
			}
		})
			.from(item.querySelector('.anim__titles'), {
				scrollTrigger: {
					trigger: item,
					start: config.titleStart,
					end: config.titleEnd,
					scrub: true,
				},
				y: config.titleY,
			})
			.from(item.querySelector('.anim__title'), {
				scrollTrigger: {
					trigger: item,
					start: '0 0',
					scrub: true,
				},
				css: {
					color: 'white',
				},
			})
			.from(item.querySelectorAll('.anim-card'), {
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					scrub: true,
				},
				y: config.cardsY,
			})
			.to(item.querySelectorAll('.anim-card__line'), {
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					scrub: true,
				},
				y: config.line,
			})
			.from(item.querySelectorAll('.anim-card__body'), {
				scrollTrigger: {
					trigger: item.querySelector('.anim__titles'),
					start: config.classActiveStart,
					end: 'bottom top',
					scrub: true,
					onEnter: () => {
						item.querySelector('.anim__titles').classList.add('active');
						item.querySelectorAll('.anim-card__body').forEach(body => body.classList.add('active'));
					},
					onLeaveBack: () => {
						item.querySelector('.anim__titles').classList.remove('active');
						item.querySelectorAll('.anim-card__body').forEach(body => body.classList.remove('active'));
					},
					// markers: true
				}
			});
	};

	// Desktop
	mm.add("(min-width: 768px)", () => {
		animPage.forEach(item => {
			animateItem(item, {
				pinStart: '0 0',
				titleStart: '0 5%',
				titleEnd: '+=1000',
				titleY: '100vh',
				classToggleStart: '0.1% top',
				cardsY: '-55%',
				line: '51px',
				classActiveStart: 'bottom-=250 center'
			});
		});
		return () => { };
	});

	// Mobile
	mm.add("(max-width: 767.98px)", () => {
		animPage.forEach(item => {
			animateItem(item, {
				pinStart: '-1% -1%',
				titleStart: '0 0',
				titleEnd: '+=500',
				titleY: '50vh',
				classToggleStart: 'top -0.8%',
				cardsY: '-100%',
				classActiveStart: 'bottom-=50 center'
			});
		});
		return () => { };
	});
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
