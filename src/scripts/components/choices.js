import Choices from 'choices.js';

/*
	Choices.js
	https://github.com/Choices-js/Choices
*/

export default function choices() {
	const selects = document.querySelectorAll('select');

	if (selects.length)  {
		selects.forEach((item) => {
			new Choices(item, {
				searchEnabled: false,
				itemSelectText: '',
				shouldSort: false,
			});

			const choices = item.closest('.choices');

			if (choices && item.hasAttribute('data-placeholder')) {
				placeholder = choices.querySelector('.choices__placeholder');

				if (placeholder) {
					placeholder.textContent = item.getAttribute('data-placeholder');
				}
			}
		});

	
	}
}
