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

// hover card img
const cardItem = document.querySelectorAll('.dc-card-referens');
if (!isMobile.any()) {
    cardItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            let self = e.currentTarget;
            let selfData = self.dataset.hover;
            let currentEl = document.querySelector(`.dc-img-hover[data-hover="${selfData}"]`)
            self.classList.add('hover');
            currentEl.classList.add('hover');
        })
        el.addEventListener('mouseleave', (e) => {
            let self = e.currentTarget;
            let selfData = self.dataset.hover;
            let currentEl = document.querySelector(`.dc-img-hover[data-hover="${selfData}"]`)
            self.classList.remove('hover');
            currentEl.classList.remove('hover');

        })
    });
}
//  nav (добавление id и количество точек навигации создаеться 
// динамически и зависит от количества секций с классом dc-scroll)
let summEl = document.querySelectorAll('.dc-scroll');
let dots = document.querySelector('.dc-page-nav');
if (summEl.length > 0 || window.innerWidth > 992) {
    for (let i = 0; i < summEl.length; i++) {
        let idSection = summEl[i];
        let num = [i + 1];
        idSection.id = `section-${num}`;
        document.querySelector('.dc-page-nav').insertAdjacentHTML('beforeEnd',
            `
        
    <a class="dc-nav-dot" href="#section-${num}"></a>
        `
        )
    }
}
const observerDot = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.dc-nav-dot').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.dc-scroll').forEach(section => { observerDot.observe(section) });

// ======================

const gallerySlider = new Swiper('.dc-carousel', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: false,
    loop: true,
    speed: 1200,
    autoplay: {
        dalay: 800,
        stopOnLastSlide: false,
    },

});
const sliders = document.querySelectorAll('.dc-slider-content');
sliders.forEach((el) => {

    let contentSlider = new Swiper(el, {
        autoHeight: false,
        spaceBetween: 24,
        speed: 1800,
        pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: el.querySelector('.next-content'),
            prevEl: el.querySelector('.prev-content'),

        },
        breakpoints: {
            320: {
                slidesPerView: 1.25,
                maxBackfaceHiddenSlides: 1.25,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                maxBackfaceHiddenSlides: 2,
            },
            768: {
                slidesPerView: 3,
                maxBackfaceHiddenSlides: 3,
            },
            992: {
                slidesPerView: 4,
                maxBackfaceHiddenSlides: 4,
                spaceBetween: 24,
            },
        },
    });
    let btnHidder = el.querySelectorAll('.bt-slider');
    btnHidder.forEach((item) => {
        item.addEventListener('click', () => {
            el.parentNode.style.overflow = 'hidden';
        })
    })
});


const contentTeaser = new Swiper('.dc-slider-teaser', {
    autoHeight: false,
    speed: 1800,
    loop: true,
    pagination: {
        el: '.pagination-teaser',
        clickable: true,
    },
    navigation: {
        nextEl: '.next-teaser',
        prevEl: '.prev-teaser',

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            maxBackfaceHiddenSlides: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            maxBackfaceHiddenSlides: 2,
        },
        992: {
            slidesPerView: 2,
            maxBackfaceHiddenSlides: 2,
            spaceBetween: 24,
        },
        1200: {
            spaceBetween: 72,
            slidesPerView: 3,
            maxBackfaceHiddenSlides: 3,
        },
    },

});
let statementBlock = document.querySelector('.dc-slider-statement');
if (statementBlock) {
    const splideStatement = new Splide(statementBlock, {
        fixedWidth: '267px',
        fixedHeight: '350px',
        gap: '24px',
        perPage: 'auto',
        focus: 2,
        arrows: true,
        pagination: true,
        updateOnMove: false,
        trimSpace: true,
        breakpoints: {
            1199.98: {
                focus: 'center',
            },
            991.98: {
                fixedWidth: '200px',
                gap: '16px',
            },
            767.98: {
                focus: 0,
                perPage: 1,
                fixedWidth: '100%',
                fixedHeight: '216px',
            }
        },
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows',
            arrow: 'splide__arrow ',
            prev: 'splide__arrow--prev',
            next: 'splide__arrow--next',

            // Add classes for pagination.
            pagination: 'splide__pagination', // container
            page: 'splide__pagination__page', // each button
        },

    }).mount();

    const slideListSlides = document.querySelectorAll('.dc-slider-statement .splide__slide');
    const slideList = document.querySelector('.splide__list');
    const sliderBtns = document.querySelectorAll('.dc-slider-statement .splide__arrow');
    if (slideListSlides.length <= 3) {
        slideList.classList.add('transform-important');
        sliderBtns.forEach((el) => {
            el.addEventListener('click', () => {
                slideList.classList.remove('transform-important');
            })
        });
    } else {
        slideList.classList.remove('transform-important');
    }
}
gsap.registerPlugin(ScrollTrigger);
// animate hero video
const animFullscreen = document.querySelector('.dc-fullscreen');
if (animFullscreen) {
    gsap.to(animFullscreen, {
        scrollTrigger: {
            trigger: animFullscreen,
            start: 'top top',
            scrub: 1,
        },
        scale: 0.4,
        opacity: 0.85,
    });
}
// animate servity
let carouselWrp = document.querySelector('.dc-carousel-wrapper');
let servity = document.querySelector('.dc-servity')
if (carouselWrp) {
    gsap.fromTo('.dc-carousel-wrapper', {
        scale: 1.9,
    }, {
        scrollTrigger: {
            trigger: '.dc-servity',
            start: '-=85% top',
            end: 'top top',
            scrub: 1,
        },
        scale: 1,
    });
}
if (servity) {
    gsap.to('.dc-servity', {
        scrollTrigger: {
            trigger: '.dc-servity',
            start: 'top top',
            scrub: 1,
        },
        scale: 0.65,
    });
}

// animate text-icon module
const animTextIcon = document.querySelector('.dc-text-icon');
if (animTextIcon) {
    gsap.to(animTextIcon, {
        scrollTrigger: {
            trigger: animTextIcon,
            start: 'top top',
            scrub: 1,
        },
        x: 120,

    });
}
// animate statement module
const animStatement = document.querySelector('.dc-statement');
if (animStatement) {
    gsap.from('.dc-statement-bg', {
        scrollTrigger: {
            trigger: animStatement,
            start: '-100px 50%',
            end: '100% 80%',
            scrub: 1,
        },
        x: '100%',
        y: '50%',
    });
    gsap.from('.dc-statement-anim', {
        scrollTrigger: {
            trigger: animStatement,
            start: '-100px 50%',
            end: '100% 80%',
            scrub: 1,
        },

        x: '-100%',
        y: '50%',
    });
}
// animate blur left
let blurLeft = document.querySelector('.dc-animate-left');
if (blurLeft) {
    const tlBlurLeft = gsap.timeline({
        scrollTrigger: {
            trigger: ".dc-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    });
    tlBlurLeft.to(".dc-animate-left", { opacity: 1, duration: 1.4 })
    tlBlurLeft.to(".dc-animate-left", { top: '65%', duration: 1.4 })
    tlBlurLeft.to(".dc-animate-left", { top: '20%', duration: 1.4 })
    tlBlurLeft.to(".dc-animate-left", { top: '45%', left: '80%', duration: 0.7 })
    tlBlurLeft.to(".dc-animate-left", { top: '60%', left: '80%', duration: 1.2 })
    tlBlurLeft.to(".dc-animate-left", { top: '35%', left: '-15%', duration: 1 })
    tlBlurLeft.to(".dc-animate-left", { top: '5%', duration: 1 })
    tlBlurLeft.to(".dc-animate-left", { top: '25%', duration: 1 })
}
// animate blur right
let blurRight = document.querySelector('.dc-animate-right');
if (blurRight) {
    const tlBlurRight = gsap.timeline({
        scrollTrigger: {
            trigger: ".dc-wrapper",
            start: "400px top",
            end: "bottom bottom",
            scrub: 1,
        }
    });
    tlBlurRight.to(".dc-animate-right", { top: '100%', duration: 1.5 })
    tlBlurRight.to(".dc-animate-right", { top: '25%', right: '-20%', duration: 1 })
    tlBlurRight.to(".dc-animate-right", { top: '40%', right: '-20%', duration: 1 })
    tlBlurRight.to(".dc-animate-right", { top: '-10%', right: '80%', duration: 1.2 })
    tlBlurRight.to(".dc-animate-right", { top: '100%', right: '80%', duration: 0.85 })
    tlBlurRight.to(".dc-animate-right", { top: '22%', right: '-20%', duration: 1 })
    tlBlurRight.to(".dc-animate-right", { top: '45%', right: '-20%', duration: 1 })
    tlBlurRight.to(".dc-animate-right", { top: '25%', right: '-20%', duration: 1 })
}
// animate content box module
let mm = gsap.matchMedia();
mm.add("(min-width: 992px)", () => {
    let containerAnimItem = gsap.utils.toArray(".dc-anim-wrap");
    containerAnimItem.forEach((item, i) => {
        const tlContainer = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "-=100px 60%",
                end: '450px 60%',
                scrub: true,
            }
        });
        tlContainer.from(item, { overflow: 'visible', })
    });
    let animateSlides = gsap.utils.toArray('.dc-anim-item');
    animateSlides.forEach((elem, i) => {
        const tlSlides = gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                start: "-=300% 60%",
                end: '450% 60%',
                scrub: 1,
            }
        });
        tlSlides.from(elem, {
            marginLeft: '-25%',
            marginRight: '50%',
            duration: 1.5,
            ease: "laniar",
        })
        tlSlides.to(elem, {
            marginLeft: '-25%',
            marginRight: '50%',
            duration: 1.5,
            ease: "laniar",
        })
    });
    return () => { };
});
// animate referens module row
const animRow = document.querySelector('.dc-anim-row');
if (animRow) {
    const tlRow = gsap.timeline({
        scrollTrigger: {
            trigger: '.dc-teaser',
            start: '-30% center',
            end: '140% center',
            scrub: 1,
        }
    });
    tlRow.from(".dc-anim-row .dc-imgs-container", {
        duration: 1,
        left: '-100%',
        ease: 'lanier',
    })
    tlRow.to(".dc-anim-row .dc-imgs-container", {
        duration: 1,
        left: '-100%',
        ease: 'lanier',
    })
}
const animCardsRow = document.querySelector('.dc-anim-row');
if (animCardsRow) {
    const tlCardsRow = gsap.timeline({
        scrollTrigger: {
            trigger: '.dc-teaser',
            start: '-30% center',
            end: '140% center',
            scrub: 1,
        }
    });
    tlCardsRow.from(".dc-anim-row .dc-card-referens", {
        duration: 1,
        right: '-100%',
        ease: 'lanier',
        stagger: {
            each: 0.1,
            from: 'start'
        },
    })
    tlCardsRow.to(".dc-anim-row .dc-card-referens", {
        duration: 1,
        right: '-100%',
        ease: 'lanier',
        stagger: {
            each: 0.1,
            from: 'start'
        },
    })
}
// animate referens module row reverse
const animRowReverse = document.querySelector('.dc-anim-revers');
if (animRowReverse) {
    const tlRowRevers = gsap.timeline({
        scrollTrigger: {
            trigger: '.dc-teaser',
            start: '-30% center',
            end: '140% center',
            scrub: 1,
        }
    });
    tlRowRevers.from(".dc-anim-revers .dc-imgs-container", {
        duration: 1,
        right: '-100%',
        ease: 'lanier',
    })
    tlRowRevers.to(".dc-anim-revers .dc-imgs-container", {
        duration: 1,
        right: '-100%',
        ease: 'lanier',
    })
}
const animCardsRowReverse = document.querySelector('.dc-anim-revers');
if (animCardsRowReverse) {
    const tlCardsRowRevers = gsap.timeline({
        scrollTrigger: {
            trigger: '.dc-teaser',
            start: '-30% center',
            end: '140% center',
            scrub: 1,
        }
    });
    tlCardsRowRevers.from(".dc-anim-revers .dc-card-referens", {
        duration: 1,
        left: '-100%',
        ease: 'lanier',
        stagger: {
            each: 0.1,
            from: 'start'
        },
    })
    tlCardsRowRevers.to(".dc-anim-revers .dc-card-referens", {
        duration: 1,
        left: '-100%',
        ease: 'lanier',
        stagger: {
            each: 0.1,
            from: 'start'
        },
    })
}
// animate Tiaser slider module
const animTiaserSlider = document.querySelector('.dc-slider-teaser');
if (animTiaserSlider) {
    gsap.from(animTiaserSlider, {
        scrollTrigger: {
            trigger: animTiaserSlider,
            start: '-75% center',
            end: '15% center',
            scrub: 1,
        },
        y: 150,

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
