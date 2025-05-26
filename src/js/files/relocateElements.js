const movableElements = document.querySelectorAll("[data-move-to]");
const originalParents = new Map();

// Сохраняем исходных родителей
movableElements.forEach(el => {
	originalParents.set(el, el.parentNode);
});

function relocateElements() {
	const viewportWidth = window.innerWidth;

	movableElements.forEach(el => {
		const breakpoint = parseInt(el.dataset.breakpoint, 10);
		const targetSelector = el.dataset.moveTo;

		// Ищем целевой элемент начиная с ближайшего родителя (любого) к movableElement
		let parent = el.parentElement;
		let target = null;

		while (parent) {
			target = parent.querySelector(targetSelector);
			if (target) break;
			parent = parent.parentElement;
		}

		const original = originalParents.get(el);

		if (!target || !original) return;

		if (viewportWidth <= breakpoint && el.parentNode !== target) {
			target.appendChild(el);
		} else if (viewportWidth > breakpoint && el.parentNode !== original) {
			original.appendChild(el);
		}
	});
}

window.addEventListener("DOMContentLoaded", relocateElements);
window.addEventListener("resize", relocateElements);
