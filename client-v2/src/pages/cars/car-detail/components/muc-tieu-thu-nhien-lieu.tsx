import { TTieuThuNhienLieu } from '@/types/data.type';
import { Table } from 'antd';

interface MucTieuThuNhienLieuProps {
	title: string;
	data: TTieuThuNhienLieu[];
}

const MucTieuThuNhienLieu = ({ title, data }: MucTieuThuNhienLieuProps) => {
	const columns = [
		{
			title: (
				<p className="tw-text-primary tw-text-xl tw-text-center tw-font-semibold">
					Loại xe
				</p>
			),
			dataIndex: 'loaiXe',
			key: 'loaiXe',
			render: (text: string) => (
				<p className="tw-text-primary tw-text-center tw-font-semibold">
					{text}
				</p>
			),
		},
		{
			title: (
				<p className="tw-text-primary tw-text-xl tw-text-center tw-font-semibold">
					Chu trình tổ hợp
				</p>
			),
			dataIndex: 'chuTrinhToHop',
			key: 'chuTrinhToHop',
			render: (text: string) => <p className="tw-text-center">{text}</p>,
		},
		{
			title: (
				<p className="tw-text-primary tw-text-xl tw-text-center tw-font-semibold">
					Chu trình đô thị cơ bản
				</p>
			),
			dataIndex: 'chuTrinhDoThiCoBan',
			key: 'chuTrinhDoThiCoBan',
			render: (text: string) => <p className="tw-text-center">{text}</p>,
		},
		{
			title: (
				<p className="tw-text-primary tw-text-xl tw-text-center tw-font-semibold">
					Chu trình đô thị phụ
				</p>
			),
			dataIndex: 'chuTrinhDoThiPhu',
			key: 'chuTrinhDoThiPhu',
			render: (text: string) => <p className="tw-text-center">{text}</p>,
		},
	];

	const dataSource = data.map((item, index) => ({
		key: index,
		loaiXe: item.loaiXe,
		chuTrinhToHop: item.chuTrinhToHop,
		chuTrinhDoThiCoBan: item.chuTrinhDoThiCoBan,
		chuTrinhDoThiPhu: item.chuTrinhDoThiPhu,
	}));

	return (
		<div className="tw-my-10 tw-flex tw-flex-col tw-gap-5">
			<p className="text-center tw-text-primary tw-font-semibold tw-text-3xl">
				Mức tiêu thụ nhiên liệu của {title}
			</p>
			<Table dataSource={dataSource} columns={columns} pagination={false} />
		</div>
	);
};

export default MucTieuThuNhienLieu;
