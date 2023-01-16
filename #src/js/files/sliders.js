let banner = document.querySelector('.slider-banner');
if (banner) {
	let flktyBanner = new Flickity(banner, {
		// options
		cellAlign: 'left',
		contain: true,
		draggable: true,
	});
}
let cards = document.querySelector('.cards-slider');
if (cards) {
	let flktyCards = new Flickity(cards, {
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		groupCells: true,
	});
}