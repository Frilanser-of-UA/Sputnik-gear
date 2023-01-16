
// FIX========================================galery product-card=================
document.body.onclick = function (event) {
	event = event || window.event;
	if (event.target.classList.contains('img-min')) {
		document.getElementById('big-img').src = event.target.src;
	}
}
let allItems = document.querySelectorAll('.gallery__item');
allItems.forEach(function (link, index) {
	link.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.add('active');
		} else {
			const activeLink = document.querySelector('.gallery__item.active');
			if (activeLink) {
				activeLink.classList.remove('active');
			}
			this.classList.add('active');
		}
	});
});


