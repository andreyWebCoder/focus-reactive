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