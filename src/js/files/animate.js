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