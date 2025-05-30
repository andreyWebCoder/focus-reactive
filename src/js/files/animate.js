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
