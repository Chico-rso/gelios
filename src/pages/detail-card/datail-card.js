o2.detailCard =
{
	initSlider()
	{
		$('._detail-card__slider').slick({
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
	}
}