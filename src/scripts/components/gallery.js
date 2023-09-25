import lightGallery from 'lightgallery';

export default function gallery() {
	const galleryElements = document.querySelectorAll('[data-gallery]');

	if (!galleryElements.length) return;

	for (let index = 0; index < galleryElements.length; index++) {
		const gallery = galleryElements[index];

		lightGallery(gallery, {
			speed: 500,
			download : false,
			mobileSettings: {
				controls: true,
				showCloseIcon: true,
				download : false,
			}
		});
	}
}
