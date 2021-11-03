o2.instagram =
{
	initSlider()
	{
		$('._instagram__content-list').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
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