
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