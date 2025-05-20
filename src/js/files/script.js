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