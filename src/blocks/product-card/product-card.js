o2.productCard =
{
	addFavorit(e)
	{
		e.target.closest('._product-card').classList.toggle('in-favorites');
	},
	changeBasket(e)
	{
		e.target.closest('._product-card').classList.toggle('in-basket');
	},
}