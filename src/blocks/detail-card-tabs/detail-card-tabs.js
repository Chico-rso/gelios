o2.detailCardTabs =
{
	showText()
	{
		const textContent = document.querySelector('._g-tabs__content-effect-text');
		const button = document.querySelector('._g-button--more');
		textContent.classList.toggle('active');
		if (textContent.classList.contains('active'))
		{
			button.classList.add('transform');
		}else{button.classList.remove('transform')};
	}
}