o2.detailCard =
{
	initSlider()
	{
		$('._detail-card__slider-mob').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: true,
			mobileFirst: true,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 769,
					settings:
					{
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
						arrows: false,
					}
				},
			],
		});
		$('._detail-card__slider-desktop').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			vertical: true,
			asNavFor: '._detail-card__slider-block'
		});
		$('._detail-card__slider-block').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '._detail-card__slider-desktop',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
		});
	},
	changeBasket(e)
	{
		e.target.closest('._detail-card__btn').classList.toggle('in-basket');
	},
	addFavorit(e)
	{
		e.target.closest('._detail-card__favorit').classList.toggle('in-favorit');
	}
};