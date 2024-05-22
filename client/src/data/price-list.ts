import { TPriceList } from '@/types/price-list.type';

const priceList: { fords: TPriceList[] } = {
	fords: [
		{
			id: 1,
			label: 'Ford Ranger',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Ranger XLS 4×2 AT',
					price: '707000000',
				},
				{
					id: 2,
					title: 'Ford Ranger XLS 4×4 AT',
					price: '776000000',
				},
				{
					id: 3,
					title: 'Ford Ranger Sport 4×4 AT',
					price: '864000000',
				},
				{
					id: 4,
					title: 'Ford Ranger Wildtrak 2.0L 4×4 AT',
					price: '979000000',
				},
				{
					id: 5,
					title: 'Ford Ranger Stormtrak 2.0L 4×4 AT',
					price: '1039000000',
				},
				{
					id: 6,
					title: 'Ford Ranger Raptor 2.0L',
					price: '1299000000',
				},
			],
		},
		{
			id: 2,
			label: 'Ford Ranger Raptor',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Ranger Raptor 2024',
					price: '1299000000',
				},
			],
		},
		{
			id: 4,
			label: 'Ford Territory',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Territory Titanium X 1.5L AT',
					price: '954000000',
				},
				{
					id: 2,
					title: 'Ford Territory Titanium 1.5L AT',
					price: '909000000',
				},
				{
					id: 3,
					title: 'Ford Territory Trend 1.5L AT',
					price: '822000000',
				},
			],
		},
		{
			id: 5,
			label: 'Ford Everest',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Everest Platinum 4×4 AT',
					price: '0',
				},
				{
					id: 2,
					title: 'Ford Everest Titanium+ 4×4 AT',
					price: '1468000000',
				},
				{
					id: 3,
					title: 'Ford Everest Titanium AT 4×2 AT',
					price: '1299000000',
				},
				{
					id: 4,
					title: 'Ford Everest Sport 4×2 AT',
					price: '1178000000',
				},
				{
					id: 5,
					title: 'Ford Everest Ambient 4×2 AT',
					price: '1099000000',
				},
			],
		},
		{
			id: 6,
			label: 'Ford Explorer',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Explorer Limited ',
					price: '2439000000',
				},
			],
		},
		{
			id: 7,
			label: 'Ford Transit',
			thumnail:
				'https://fordlongbien.com/wp-content/uploads/2022/08/ford-ranger-wildtrak-mau-do-cam-icon-fordlongbien.jpg',
			children: [
				{
					id: 1,
					title: 'Ford Transit 2024',
					price: '849000000',
				},
			],
		},
	],
};

export default priceList;
