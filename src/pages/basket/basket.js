o2.basket =
{
	minus(_this)
	{
		let countMinus = _this.nextElementSibling.innerHTML;
		if(+countMinus >= 2)
		{
			_this.nextElementSibling.innerHTML--;
			countMinus = _this.nextElementSibling.innerHTML;
		}
	},
	plus(_this)
	{
		let countPlus = _this.previousElementSibling.innerHTML;
			_this.previousElementSibling.innerHTML++;
			countPlus = _this.previousElementSibling.innerHTML;
	}
}