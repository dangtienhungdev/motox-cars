import { TPriceList } from '@/types/price-list.type';
import { formatCurrency } from '@/utils/fomatCurrency';
import { Table } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

interface TabContentProps {
	data: TPriceList;
}

const TabContent = ({ data }: TabContentProps) => {
	const columns = [
		{
			title: <span className="text-base font-medium">Tên sản phẩm</span>,
			dataIndex: 'title',
			key: 'title',
			render: (text: string) => (
				<Link href={'/'} className="text-base">
					{text}
				</Link>
			),
		},
		{
			title: <span className="text-base font-medium">Giá sản phẩm</span>,
			dataIndex: 'price',
			key: 'price',
			render: (text: string) => {
				return <span>{formatCurrency(Number(text))}</span>;
			},
		},
	];

	const dataSource = data.children.map((item) => {
		return {
			key: item.id,
			title: item.title,
			price: item.price,
		};
	});

	return (
		<section className="grid grid-cols-3 gap-20">
			<section className="col-span-1">
				<Image
					src={data.thumnail}
					alt={data.label}
					className="w-full"
					height={300}
					width={300}
				/>
			</section>

			<section className="col-span-2">
				<Table columns={columns} dataSource={dataSource} pagination={false} />
			</section>
		</section>
	);
};

export default TabContent;
