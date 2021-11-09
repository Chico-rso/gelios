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
};