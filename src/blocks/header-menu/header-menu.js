o2.headerMenu =
{
	openMenu()
	{
		document.querySelector('._header-menu').classList.toggle('open');
	},
	openCatalog()
	{
		document.querySelector('._header-menu__catalog').classList.toggle('open');
	},
	openCatalogInner()
	{
		document.querySelector('._header-menu__catalog-inner').classList.toggle('active');
	}
}