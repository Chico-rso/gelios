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
			mobileFirst: true,
			prevArrow: '<button class="promo-slider__arrow-prev"></button>',
			nextArrow: '<button class="promo-slider__arrow-next"></button>',
			customPaging: function (slider, item)
			{
				return '<div class="promo-slider__slider-dot"></div>';
			},
			responsive: [
			{
				breakpoint: 769,
				settings:
				{
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
				}
			},
			]
		});
	},
}