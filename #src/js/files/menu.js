
window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		//FIX ====== Меню
		if (targetElement.classList.contains('ic-menu')) {
			document.body.classList.add('_lock');
			document.querySelector('.mobile-menu-wrapper').classList.add('active');
		} else if (!targetElement.closest('.mobile-menu-wrapper') && document.querySelector('.mobile-menu-wrapper.active')) {
			document.querySelector('.mobile-menu-wrapper').classList.remove('active');
			document.body.classList.remove('_lock');
		}
		if (targetElement.classList.contains('cloze')) {
			document.body.classList.remove('_lock');
			document.querySelector('.mobile-menu-wrapper').classList.remove('active');
		}
		//FIX ======== filter
		if (targetElement.classList.contains('items-cards__btn')) {
			document.body.classList.add('_lock');
			document.querySelector('.catalog__mobile-filter').classList.add('active');
		} else if (!targetElement.closest('.catalog__mobile-filter') && document.querySelector('.catalog__mobile-filter.active')) {
			document.querySelector('.catalog__mobile-filter').classList.remove('active');
			document.body.classList.remove('_lock');
		}
		if (targetElement.classList.contains('filter__cloze')) {
			document.body.classList.remove('_lock');
			document.querySelector('.catalog__mobile-filter').classList.remove('active');
		}
		//FIX ======== cart
		if (targetElement.classList.contains('cart__button')) {
			document.querySelector('.cart').classList.toggle('active');
		} else if (!targetElement.closest('.cart') && document.querySelector('.cart.active')) {
			document.querySelector('.cart').classList.remove('active');
		}
	}
}