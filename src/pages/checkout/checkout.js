o2.checkout =
{
	openList()
	{
		const mapBtn = document.querySelector('._g-tabs__content-map');
		const listBtn = document.querySelector('._g-tabs__content-list');
		const map = document.querySelector('._g-yamap');
		const list = document.querySelector('._checkout__radio-btn')

		listBtn.classList.add('g-tabs__content-list--hidden');
		map.classList.add('g-yamap--hidden');
		list.classList.add('checkout__radio-btn--visibility');
		if(listBtn.classList.contains('g-tabs__content-list--hidden'))
		{
			mapBtn.classList.add('g-tabs__content-map--visibility');
		}
	},
	openMap()
	{
		const listBtn = document.querySelector('._g-tabs__content-list');
		const mapBtn = document.querySelector('._g-tabs__content-map');
		const map = document.querySelector('._g-yamap');
		const list = document.querySelector('._checkout__radio-btn')

		listBtn.classList.remove('g-tabs__content-list--hidden');
		mapBtn.classList.remove('g-tabs__content-map--visibility');
		map.classList.remove('g-yamap--hidden');
		list.classList.remove('checkout__radio-btn--visibility');
	}
}