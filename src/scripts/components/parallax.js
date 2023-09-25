import simpleParallax from 'simple-parallax-js';

export default function parallax() {

	const parallaxElements = document.querySelectorAll('[data-parallax]');

	if (!parallaxElements.length) return;

	for (let index = 0; index < parallaxElements.length; index++) {
		const parallaxEl = parallaxElements[index];

		new simpleParallax(parallaxEl, {
			orientation: parallaxEl.getAttribute('data-parallax-orientation') || 'up',
			scale: parallaxEl.getAttribute('data-parallax-scale') || 1.5,
			overflow: true,
			delay: 0.1
		});
	}
}
