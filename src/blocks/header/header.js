o2.header =
{
	activeSearch()
	{
		const el = document.querySelector('._header__mob-input');
		el.classList.toggle('active');
	},
	openPopup(e)
	{
		e.target.closest('._header__top').classList.toggle('active');
	},
	openHeaderCatalogMenu(_this)
	{
		const el = document.querySelector('._header-catalog-menu__wr');
		el.classList.toggle('active');
		_this.querySelector('.header__svg-arrow').classList.toggle('active');
		_this.querySelector('.header__svg-x').classList.toggle('active');
	},
	changeIconSearch(instance)
	{
		if(instance.value !== '')
		{
			document.querySelector('._g-input-icon-close').classList.add('active');
			document.querySelector('._g-input-icon').classList.add('hide');
		}
		else
		{
			document.querySelector('._g-input-icon-close').classList.remove('active');
			document.querySelector('._g-input-icon').classList.remove('hide');
		}
	},
	clearInput(_this)
	{
		document.querySelector('._g-input__input').value = '';
		_this.classList.remove('active');
		document.querySelector('._g-input-icon').classList.remove('hide');
	}
};