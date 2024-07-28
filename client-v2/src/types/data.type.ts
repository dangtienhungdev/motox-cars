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

export type FieldType = {
	username: string;
	email: string;
	phone: string;
	address: string;
	hinhThucMua: string;
	message: string;
	chonXe: string;
};

export type TTieuThuNhienLieu = {
	id: string;
	loaiXe: string;
	chuTrinhToHop: string;
	chuTrinhDoThiCoBan: string;
	chuTrinhDoThiPhu: string;
};

export type TMauSac = {
	id: string;
	title: string;
	color: string;
	image: string;
};
