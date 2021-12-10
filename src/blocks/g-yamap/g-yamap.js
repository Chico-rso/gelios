o2.gYamap =
{
	data:
	[
		{
			coords: [55.756817, 37.632305],
			title: 'Аптека Гелиос',
			address: 'Лубянский пр. 15 стр 2',
			all: 'Круглосуточно',
		},
		{
			coords: [55.765685, 37.599101],
			title: 'Аптека Гелиос',
			address: 'Новорязанская улица, 18с14',
			all: 'Круглосуточно',
		},
		{
			coords: [55.770741, 37.660577],
			title: 'Аптека Гелиос',
			address: 'Новорязанская улица, 18с14',
			all: 'Круглосуточно',
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
			zoom: 12,
			controls: []
		})

		o2.gYamap.data.forEach( (el) => myMap.geoObjects.add(o2.gYamap.createPlacemark(el.coords, el.title, el.address, el.all)))
	},
	createPlacemark(coords, title, address,all)
	{
		return new ymaps.Placemark(coords, {
			balloonContentHeader: title,
			balloonContent: address,
			balloonContentFooter: all,
		},
		{
			iconLayout: 'default#image',
            iconImageHref: './svg/yamap-pointer-1.svg',
            iconImageSize: [28, 28]
		});
	},
}
