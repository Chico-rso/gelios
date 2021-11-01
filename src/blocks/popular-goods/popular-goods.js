o2.popularGoods =
{
	initSlider()
	{
		$('._popular-goods__wrapper').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			mobileFirst: true,
			variableWidth: true,
			prevArrow: '<button class="prev-arrow"></button>',
			nextArrow: '<button class="next-arrow"></button>',
			responsive: [
			{
				breakpoint: 769,
				settings:
				{
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
				}
			},
			],
		});
	}
}