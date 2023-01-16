// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// ============================================
document.querySelectorAll('.currency').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.currency__button');
	const dropDownList = dropDownWrapper.querySelector('.currency__body');
	const dropDownListItems = dropDownList.querySelectorAll('.currency__item');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('visible');
		this.classList.toggle('active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (dropDownListItem) {
		dropDownListItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			if (this.classList.contains('not-visible')) {
				this.classList.remove('not-visible');
			} else {
				const activeLink = dropDownList.querySelector('.currency__item.not-visible');
				if (activeLink) {
					activeLink.classList.remove('not-visible');
				}
				this.classList.add('not-visible');
			}
			dropDownBtn.focus();
			dropDownList.classList.remove('visible');
			dropDownBtn.classList.remove('active');
			if (e.target.classList.contains('label')) {
				dropDownBtn.classList.remove('selected');
			} else {
				dropDownBtn.classList.add('selected');
			}
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});
});