/*
	  ---------------------- 
	|   Form Attach   |
	  ----------------------

	* Basic Attributes:
		* data-attach - file attachment wrapper
		* data-attach-input - file attachment input
		* data-attach-text - file attachment text
*/

export default function formAttach() {
	document.addEventListener('change', (event) => {
		const target = event.target;
	
		if (target.hasAttribute('data-attach-input')) {
			const attachInput = target;
			const attach = attachInput.closest('[data-attach]');
			const attachText = attach.querySelector('[data-attach-text]');
			const name = target.files[0].name;

			if (attachText && name) {
				attachText.textContent = name;
			}
		}
	});
}
