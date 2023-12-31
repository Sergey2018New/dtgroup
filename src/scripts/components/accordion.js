import {gotoBlock} from './gotoblock.js';

/*
	  ------------- 
	|   ACCORDION   |
	  ------------- 

	* Basic Attributes:
		* data-accordions - general wrapper for accordions
		* data-accordion - accordion block
			** If it is necessary to close neighboring accordions, then specify the data-accordion-one attribute
			** If you want to always display the active accordion (without the possibility of closing), then specify the data-accordion-visible attribute
			** If by default you want to show the accordion, then you need to specify the classes .is-active.is-visible
		* data-accordion-button - open/close dropdown content button
		* data-accordion-content - drop-down content
*/

/** 
	* @param  {Element} accordionsContainer - HTML container element, default document
	* @param  {number} duration - accordion opening time (also needs to be changed in CSS)
*/
export default function accordion(accordionsContainer, duration = 300) {
	let accordions;

	if (accordionsContainer) {
		if (accordionsContainer instanceof Node) {
			accordions = accordionsContainer.querySelectorAll('[data-accordion]');
		}
	} else {
		accordions = document.querySelectorAll('[data-accordion]');
	}

	if (accordions.length) {
		const accordionInit = (accordionEl) => {
			const accordionButton = accordionEl.querySelector('[data-accordion-button]');
			const accordionContent = accordionEl.querySelector('[data-accordion-content]');
			let isOpen = true;
			const accordionItem = () => {
				isOpen = false;

				if (accordionEl.hasAttribute('data-accordion-one')) {
					const accordionActive = accordionEl.closest('[data-accordions]').querySelector('[data-accordion].is-active');

					if (accordionActive && accordionActive !== accordionEl) {
						const accordionActiveContent = accordionActive.querySelector('[data-accordion-content]');

						accordionActive.classList.remove('is-active', 'is-visible');
						accordionButton.setAttribute('aria-expanded', 'false');

						if (accordionActiveContent.style.maxHeight) {
							accordionActiveContent.style.maxHeight = null;
						}
					}

					setTimeout(() => {
						if (window.scrollY > accordionEl.getBoundingClientRect().top + window.scrollY) {
							gotoBlock(accordionEl, false, 600, 30);

							setTimeout(() => {
								gotoBlock(accordionEl, false, 1, 29);
							}, 600);
							
						}
					}, duration + 100);
				}

				accordionEl.classList.toggle('is-active');

				accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;

				if (accordionEl.classList.contains('is-active')) {
					accordionButton.setAttribute('aria-expanded', 'true');
					setTimeout(() => {
						accordionEl.classList.add('is-visible');
					}, duration);

					setTimeout(() => {
						accordionContent.style.maxHeight = null;
					}, duration);
				} else {
					accordionButton.setAttribute('aria-expanded', 'false');
					accordionEl.classList.remove('is-visible');

					setTimeout(() => {
						accordionContent.style.maxHeight = null;
					}, 1);
				}

				setTimeout(() => {
					isOpen = true;
				}, duration);
			}
			
			accordionEl.setAttribute('data-accordion-init', '');

			if (accordionButton && accordionContent) {
				if (accordionEl.classList.contains('is-active')) {
					accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
					accordionButton.setAttribute('aria-expanded', 'true');
				}

				accordionButton.addEventListener('click', (event) => {
					event.preventDefault();

					let isVisible = accordionEl.hasAttribute('data-accordion-visible');

					if (isOpen) {
						if (isVisible) {
							if (!accordionEl.classList.contains('is-active')) {
								accordionItem ();
							}
						} else {
							accordionItem ();
						}
					}
				});

				// window.addEventListener('resize', () => {
				// 	if (accordionEl.classList.contains('is-active')) {
				// 		accordionContent.style.maxHeight = null;
				// 		accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
				// 	}
				// });
			}
		}
		
		accordions.forEach((accordionEl) => {
			if (!accordionEl.hasAttribute('data-accordion-init')) {
				accordionInit(accordionEl);
			}
		});
	}
}
