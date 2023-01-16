// console.log('Init!');

// inputmask

const telSelector = document.querySelector('.reg-enter__form input[type="tel"]');
if (telSelector) {
	const inputMask = new Inputmask('+38 (999) 999-99-99');
	inputMask.mask(telSelector);
}

let formImail = document.querySelector('#form-email');
let success = document.querySelector('.callback__success');

// ===============================
if (formImail) {
	const validationReg = new JustValidate(formImail,
		{
			errorFieldCssClass: 'error',
			errorLabelCssClass: 'form-error',
			errorLabelStyle: {
			},
		}
	)
	validationReg
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'email',
				errorMessage: 'Введіть коректний email',
			}
		]).onSuccess((event) => {
			event.target.reset();
			if (formImail) {
				formImail.classList.add('not-visible');
			}
			if (success) {
				success.classList.add('visible');
			}
		});
}
// if (formReg) {
// 	const validationReg = new JustValidate(formReg,
// 		{
// 			errorFieldCssClass: '_error',
// 			errorLabelCssClass: 'error-message-form',
// 			errorLabelStyle: {
// 			},
// 		}
// 	)
// 	validationReg
// 		.addField('#company-name', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			}
// 		])
// 		.addField('#company-kod', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				rule: 'number',
// 				errorMessage: 'Тільки числове значення',
// 			},
// 			{
// 				rule: 'minLength',
// 				value: 8,
// 				errorMessage: 'Повинно бути 8 цифр',
// 			},
// 			{
// 				rule: 'maxLength',
// 				value: 8,
// 				errorMessage: 'Повинно бути 8 цифр',
// 			}
// 		])
// 		.addField('#company-iban', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			}
// 		])
// 		.addField('#user-name-1', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			}
// 		])
// 		.addField('#user-name-2', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			}
// 		])
// 		.addField('#user-name-3', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			}
// 		])
// 		.addField('#email', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				rule: 'email',
// 				errorMessage: 'Введіть коректний email',
// 			}
// 		])
// 		.addField('#tel', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				rule: 'function',
// 				validator: function () {
// 					const phone = telSelector.inputmask.unmaskedvalue();
// 					return phone.length === 10;
// 				},
// 				errorMessage: 'Ведіть корректний телефон',
// 			}
// 		])
// 		.addField('#password_1', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				rule: 'password',
// 				errorMessage: 'Мінімум вісім символів, мінімум одна буква и одна цифра',
// 			}
// 		])
// 		.addField('#password_2', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				validator: (value, fields) => {
// 					if (fields['#password_1'] && fields['#password_1'].elem) {
// 						const repeatPasswordValue = fields['#password_1'].elem.value;

// 						return value === repeatPasswordValue;
// 					}

// 					return true;
// 				},
// 				errorMessage: 'Пароль не співпадає',
// 			},
// 		])
// 		.addField('#message', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Заповніть поле',
// 			},
// 			{
// 				rule: 'minLength',
// 				value: 10,
// 				errorMessage: 'Мінімум 10 символів',
// 			}
// 		]).onSuccess((event) => {
// 			event.target.reset();
// 			if (formReg) {
// 				formReg.classList.add('not-visible');
// 			}
// 			if (success) {
// 				success.classList.add('visible');
// 			}
// 		});
// }
