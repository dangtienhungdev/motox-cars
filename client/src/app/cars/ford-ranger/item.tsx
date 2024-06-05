import Image from 'next/image';
import Link from 'next/link';
import { Table } from 'antd';
import { formatCurrency } from '@/utils/fomatCurrency';
import { memo } from 'react';
import parse from 'html-react-parser';

const FordItem = ({ data }: any) => {
	if (!data) {
		return <section className=""></section>;
	}
	const { title, image, price, desc, listDesc } = data;
	return (
		<>
			{title && (
				<h1 className="font-medium text-lg text-primary uppercase">
					GIÁ XE {title}
				</h1>
			)}

			{image && (
				<Image
					src={image}
					alt={title}
					width={520}
					height={300}
					className="w-full h-full object-contain"
				/>
			)}

			{title && price && (
				<Table
					size="small"
					columns={[
						{
							title: (
								<span className="text-base font-medium">Tên sản phẩm</span>
							),
							dataIndex: 'title',
							key: 'title',
							render: (text: string) => (
								<Link href={'/'} className="text-base">
									{text}
								</Link>
							),
						},
						{
							title: (
								<span className="text-base font-medium">Giá sản phẩm</span>
							),
							dataIndex: 'price',
							key: 'price',
							render: (text: string) => {
								return <span>{formatCurrency(Number(text))}</span>;
							},
						},
					]}
					dataSource={[
						{
							key: 1,
							title: title,
							price: price,
						},
					]}
					pagination={false}
				/>
			)}

			{desc && <p className="text-base">{parse(desc)}</p>}

			{listDesc && (
				<ul className="text-base flex flex-col gap-2 ml-10">
					{listDesc?.map((item: string, index: number) => (
						<li className="text-base list-disc" key={`${index}${item}`}>
							{item}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default memo(FordItem);
