o2.catalog =
{
	openCategory()
	{
		const sidebarCategory = document.querySelector('._sidebar__category');
		const sidebarCatalog = document.querySelector('._sidebar__catalog');
		sidebarCatalog.classList.add('active');
		sidebarCategory.classList.add('active');
	}
}