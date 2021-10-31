o2.promoSlider =
{
	initSlider()
	{
		$('._promo-slider__wrapper').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			customPaging: function (slider, item)
			{
				return '<div class="promo-slider__slider-dot"></div>';
			}
		});
	},
}