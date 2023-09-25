import JustValidate from 'just-validate';
// import IMask from 'imask';
// import { Fancybox } from "@fancyapps/ui";
// import { modal } from "./components/modal.js";

// const maskPhones = document.querySelectorAll('.js-mask-phone');

// maskPhones.forEach(phone => {
// 	IMask(phone, {
// 		mask: '+{7} (000) 000-00-00',
// 		lazy: false,
// 	});
// });

const options = {
	errorFieldCssClass: 'is-error',
	errorLabelStyle: false,
	errorLabelCssClass: 'is-label-error',
}

const defaultFieldOptions = [
	{
		rule: 'required',
		errorMessage: 'Заполните поле',
	}
];

const emailFieldOptions = [
	{
		rule: 'required',
		errorMessage: 'Заполните поле',
	},
	{
		rule: 'email',
		errorMessage: 'Укажите корректный email',
	},
	// {
	// 	validator: (value) => {
	// 		if (value.trim().length === 0) {
	// 			return true;
	// 		} else if (isValidEmail(value.trim())) {
	// 			return true;
	// 		}
	// 	},
	// 	errorMessage: 'Укажите корректный email',
	// },
]

const phoneFieldOptions = [
	{
		rule: 'required',
		errorMessage: 'Заполните поле',
	},
	{
		rule: 'minLength',
		value: 18,
		errorMessage: 'Неверный формат телефона',
	}
];

// Валидация форм
const forms = document.querySelectorAll('[data-js-form]');

forms.forEach(form => {
	const validate = new JustValidate(form, options);

	const formFields = form.querySelectorAll('[data-js-form-field]');

	if (formFields.length) {
		for (let index = 0; index < formFields.length; index++) {
			const field = formFields[index];
			const fieldName = field.getAttribute('name');
			const fieldType = field.getAttribute('type');
			let fieldOptions = defaultFieldOptions;

			if (fieldType === 'email') {
				fieldOptions = emailFieldOptions;
			}

			
			
			// if (fieldName === "phone") {
			// 	fieldOptions = phoneFieldOptions;
			// }

			validate.addField(`[name="${fieldName}"]`, fieldOptions);
		}
	}

	// validate.onFail((fields) => {
	// 	isErrorFieldBox(fields);
	// });

	validate.onSuccess((event) => {
		// alert('Форма отправлена');
	});
});


// Check class error fieldbox
function isErrorFieldBox (fields) {
	for (let key in fields) {
		let item = fields[key];
		const fieldBox = item['elem'].closest('.fieldBox');

		if (fieldBox) {
			if (!item['isValid']) {
				fieldBox.classList.add('is-error');
			} else {
				fieldBox.classList.remove('is-error');
			}
		}
	}
}

// Is valid url
function isValidUrl(url)
{
	var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
	return objRE.test(url);
}

// Is valid Email
function isValidEmail(email)
{
	var objRE = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	return objRE.test(email);
}
