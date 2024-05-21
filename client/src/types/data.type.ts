export type ICar = {
	id: string;
	name: string;
	image: string;
	price: number;
};

export type TCars = {
	id: string;
	name: string;
	image: string;
	children: ICar[];
};
