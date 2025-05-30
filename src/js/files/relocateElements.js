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