o2.sale =
{
	changeBasket(e)
	{
		e.target.closest('._sale__card--big').classList.toggle('in-basket');
	},
}