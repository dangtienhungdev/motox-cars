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
	image?: string;
	moTaXe?: TMoTaXe[];
};

export type TMoTaXe = {
	id: string;
	title: string;
	image: string;
	desc: string;
};
