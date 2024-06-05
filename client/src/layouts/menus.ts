import header from '@/data/header';

const menus = [
	{
		id: '1',
		name: header.menus.home,
		link: '/',
	},
	{
		id: '2',
		name: header.menus.introduce,
		link: '/introduce',
	},
	{
		id: '3',
		name: header.menus.priceList,
		link: '/price-list',
	},
	{
		id: '4',
		name: header.menus.products,
		link: '/cars?id=1',
	},
	{
		id: '6',
		name: header.menus.contact,
		link: '/contact',
	},
];

export default menus;
