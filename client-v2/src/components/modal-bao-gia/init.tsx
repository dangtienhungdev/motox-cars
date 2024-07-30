export interface Option {
	value: string;
	label: string;
	children?: Option[];
}

export const options: Option[] = [
	{
		value: 'ford-territory',
		label: 'Ford Territory',
	},
	{
		value: 'ford-everest',
		label: 'Ford Everest',
	},
	{
		value: 'form-explorer',
		label: 'Ford Explorer',
	},
	{
		value: 'ford-ranger',
		label: 'Ford Ranger',
	},
	{
		value: 'ford-transit',
		label: 'Ford Transit',
	},
];
