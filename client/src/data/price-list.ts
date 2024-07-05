import { TPriceList } from '@/types/price-list.type';

const priceList: { fords: TPriceList[] } = {
	fords: [
		{
			id: 5,
			label: 'Ford Everest',
			slug: 'ford-everest',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-everest-2022-mau-cam-icon-fordlongbien_com_tpiye8.jpg',
			children: [
				{
					id: 'ford-everest-platinum-4x4-at',
					title: 'Ford Everest Platinum 4×4 AT',
					price: '1545000000',
					slug: 'ford-everest-platinum-4x4-at',
				},
				{
					id: 'ford-everest-titanium-4x4-at',
					title: 'Ford Everest Titanium+ 4×4 AT',
					price: '1468000000',
					slug: 'ford-everest-titanium-4x4-at',
				},
				{
					id: 'ford-everest-titanium-at-4x2-at',
					title: 'Ford Everest Titanium AT 4×2 AT',
					price: '1299000000',
					slug: 'ford-everest-titanium-at-4x2-at',
				},
				{
					id: 'ford-everest-sport-4x2-at',
					title: 'Ford Everest Sport 4×2 AT',
					price: '1178000000',
					slug: 'ford-everest-sport-4x2-at',
				},
				{
					id: 'ford-everest-ambient-4x2-at',
					title: 'Ford Everest Ambient 4×2 AT',
					price: '1099000000',
					slug: 'ford-everest-ambient-4x2-at',
				},
			],
		},
		{
			id: 1,
			label: 'Ford Ranger',
			slug: 'ford-ranger',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-wildtrak-mau-vang-luxe-icon2-fordlongbien_com_l40h2a.jpg',
			children: [
				{
					id: 'ford-ranger-xls-4x2-at',
					slug: 'ford-ranger-xls-4x2-at',
					title: 'Ford Ranger XLS 4×2 AT',
					price: '707000000',
				},
				{
					id: 'Ford Ranger XLS 4×4 AT',
					title: 'Ford Ranger XLS 4×4 AT',
					price: '776000000',
					slug: 'ford-ranger-xls-4x4-at',
				},
				{
					id: 'Ford Ranger Sport 4×4 AT',
					title: 'Ford Ranger Sport 4×4 AT',
					price: '864000000',
					slug: 'ford-ranger-sport-4x4-at',
				},
				{
					id: 'ford-ranger-wildtrak-2-0l-4x4-at',
					title: 'Ford Ranger Wildtrak 2.0L 4×4 AT',
					price: '979000000',
					slug: 'ford-ranger-wildtrak-2-0l-4x4-at',
				},
				{
					id: 'ford-ranger-stormtrak-2-0l-4x4-at',
					title: 'Ford Ranger Stormtrak 2.0L 4×4 AT',
					price: '1039000000',
					slug: 'ford-ranger-stormtrak-2-0l-4x4-at',
				},
				{
					id: 'ford-ranger-raptor-2-0l',
					title: 'Ford Ranger Raptor 2.0L',
					price: '1299000000',
					slug: 'ford-ranger-raptor-2-0l',
				},
			],
		},
		{
			id: 4,
			label: 'Ford Territory',
			slug: 'ford-territory',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-territory-2023-icon-fordlongbien_com_cynra9.jpg',
			children: [
				{
					id: 'ford-territory-titanium-x-1-5l-at',
					title: 'Ford Territory Titanium X 1.5L AT',
					price: '929000000',
					slug: 'ford-territory-titanium-x-1-5l-at',
				},
				{
					id: 'ford-territory-titanium-1-5l-at',
					title: 'Ford Territory Titanium 1.5L AT',
					price: '889000000',
					slug: 'ford-territory-titanium-1-5l-at',
				},
				{
					id: 'ford-territory-trend-1-5l-at',
					title: 'Ford Territory Trend 1.5L AT',
					price: '799000000',
					slug: 'ford-territory-trend-1-5l-at',
				},
			],
		},
		{
			id: 2,
			label: 'Ford Ranger Raptor',
			slug: 'ford-ranger-raptor',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-raptor-2023-mau-do-icon-fordlongbien_com_uuafxd.jpg',
			children: [
				{
					id: 'ford-ranger-raptor-2023-2-0l-4wd-at',
					title: 'Ford Ranger Raptor 2023 2.0L 4WD AT',
					price: '1299000000',
					slug: 'ford-ranger-raptor-2023-2-0l-4wd-at',
				},
			],
		},
		{
			id: 6,
			label: 'Ford Explorer',
			slug: 'ford-explorer',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-explorer-2022-icon-mau-do-fordlongbien_com-300x200_ghtqzg.jpg',
			children: [
				{
					id: 'ford-explorer-limited',
					title: 'Ford Explorer Limited ',
					price: '2439000000',
					slug: 'ford-explorer-limited',
				},
			],
		},
		{
			id: 7,
			label: 'Ford Transit',
			slug: 'ford-transit',
			thumnail:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-transit-fordlongbien_com-icon-1_e5lfxu.jpg',
			children: [
				{
					id: 'ford-transit-2024',
					title: 'Ford Transit (Bản Tiêu chuẩn)',
					price: '849000000',
					slug: 'ford-transit-2024',
				},
			],
		},
	],
};

export default priceList;
