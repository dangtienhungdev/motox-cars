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
		<section className="grid lg:grid-cols-3 grid-cols-2 gap-20">
			<section className="lg:col-span-1 hidden lg:block col-span-2">
				<Image
					src={data.thumnail}
					alt={data.label}
					className="w-full"
					height={300}
					width={300}
				/>
			</section>

			<section className="lg:col-span-2 col-span-2">
				<Table columns={columns} dataSource={dataSource} pagination={false} />
			</section>

			<section className="lg:col-span-1 lg:hidden col-span-2">
				<Image
					src={data.thumnail}
					alt={data.label}
					className="w-full"
					height={300}
					width={300}
				/>
			</section>
		</section>
	);
};

export default TabContent;
