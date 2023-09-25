import AirDatepicker from 'air-datepicker';
import localeRu from 'air-datepicker/locale/ru';
import IMask from 'imask';

/*
	Vanillajs-datepicker
	https://mymth.github.io/vanillajs-datepicker/#/
*/

export default function datepicker(datepickerSelectors) {
	/* 
		@param  {Element} datepickerSelectors - HTML container element, default document
	*/
	
	let datepickers;

	if (datepickerSelectors && typeof datepickerSelectors === 'object' && datepickerSelectors.length > 0) {
		datepickers = datepickerSelectors;
	} else {
		datepickers = document.querySelectorAll('[data-datepicker]');
	}
 
	if (datepickers.length) {
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
		(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform));
		const prevArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g><path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</g></svg>`;

		const nextArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g><path d="M9 18L15 12L9 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</g></svg>`;

		datepickers.forEach((item) => {
			new AirDatepicker(item, {
				locale: localeRu,
				position: 'top left',
				prevHtml: prevArrow,
				nextHtml: nextArrow,
				minDate: new Date(),
				autoClose: true,
				isMobile: isMobile ? true : false,
				// inline: true,
			});

			IMask(item, {
				mask: Date,
				pattern: 'd.`m.`Y',
				blocks: {
				  d: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 31,
					maxLength: 2,
				  },
				  m: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2,
				  },
				  Y: {
					mask: IMask.MaskedRange,
					from: 1900,
					to: 9999,
				  }
				},
				lazy: false,
			});
		});
	}
}





