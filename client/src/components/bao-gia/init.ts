export interface Option {
	value: string;
	label: string;
	children?: Option[];
}

export const options: Option[] = [
	{
		value: 'xe-suv',
		label: 'Xe SUV',
		children: [
			{
				value: 'ford-territory',
				label: 'Ford Territory',
				children: [
					{
						value: 'ford-territory-titanium-x-1-5l-at',
						label: 'Ford Territory Titanium X 1.5L AT',
					},
					{
						value: 'ford-territory-titanium-1-5l-at',
						label: 'Ford Territory Titanium 1.5L AT',
					},
					{
						value: 'ford-territory-trend-1-5l-at',
						label: 'Ford Territory Trend 1.5L AT',
					},
				],
			},
			{
				value: 'ford-everest',
				label: 'Ford Everest',
				children: [
					{
						value: 'ford-everest-platinum-4x4-at',
						label: 'Ford Everest Platinum 4×4 AT',
					},
					{
						value: 'ford-everest-titanium-4x4-at',
						label: 'Ford Everest Titanium+ 4×4 AT',
					},
					{
						value: 'ford-everest-titanium-4x2-at',
						label: 'Ford Everest Titanium 4×2 AT',
					},
					{
						value: 'ford-everest-sport-4x2-at',
						label: 'Ford Everest Sport 4×2 AT',
					},
					{
						value: 'ford-everest-ambient-4x2-at',
						label: 'Ford Everest Ambient 4×2 AT',
					},
				],
			},
			{
				value: 'form-explorer',
				label: 'Ford Explorer',
				children: [
					{
						value: 'ford-explorer-limited',
						label: 'Ford Explorer Limited',
					},
				],
			},
		],
	},
	{
		value: 'xe-du-lich',
		label: 'Xe Thương Mại',
		children: [
			{
				value: 'ford-ranger-raptor',
				label: 'Ford Ranger Raptor',
				children: [
					{
						value: 'ford-ranger-raptor-2024',
						label: 'Ford Ranger Raptor 2024',
					},
				],
			},
			{
				value: 'ford-transit',
				label: 'Ford Transit',
				children: [
					{
						value: 'ford-transit-2024',
						label: 'Ford Transit 2024',
					},
				],
			},
		],
	},
];
