export type TPriceList = {
	id: number;
	label: string;
	thumnail: string;
	slug: string;
	children: TPriceListChildren[];
};

export type TPriceListChildren = {
	id: string;
	title: string;
	price: string;
	slug?: string;
};
