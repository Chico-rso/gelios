o2.gYamap =
{
	data:
	[
		{
			coords: [55.756817, 37.632305],
			title: 'Аптека Гелиос',
			address: 'Лубянский пр. 15 стр 2',
		},
		{
			coords: [55.765685, 37.599101],
			title: 'Аптека Гелиос',
			address: 'Новорязанская улица, 18с14',
		},
		{
			coords: [55.770741, 37.660577],
			title: 'Аптека Гелиос',
			address: 'Новорязанская улица, 18с14',
		},
	],
	init()
	{
		ymaps.ready(this.initYamap)
	},
	initYamap()
	{
		let myMap = new ymaps.Map('yamap', {
			center: [55.753220, 37.622513], // Moscow
			zoom: 12
		})

		myMap.geoObjects.add(createPlaceMark);
		this.data.forEach( (el) => myMap.geoObjects.add(this.createPlaceMark(el.coords, el.title, el.address)))
	},
	createPlaceMark(coords, title, address)
	{
		return new ymaps.Placemark(coords, {
			balloonContentHeader: title,
			balloonContent: address,
		},
		{
			iconLayout: 'default#image',
            iconImageHref: './svg/yamap-pointer-1.svg',
            iconImageSize: [28, 28],
		});
	},
}
