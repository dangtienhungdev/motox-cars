export type TPriceList = {
	id: number;
	label: string;
	thumnail: string;
	children: TPriceListChildren[];
};

export type TPriceListChildren = {
	id: number;
	title: string;
	price: string;
	slug?: string;
};
