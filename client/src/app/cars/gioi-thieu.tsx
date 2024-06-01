import { Image, Table } from 'antd';

import FormBaoGia from '@/components/form-bao-gia';
import { formatCurrency } from '@/utils/fomatCurrency';
import parse from 'html-react-parser';
import Link from 'next/link';
import { memo } from 'react';

const GioiThieu = ({ ford }: any) => {
	console.log('🚀 ~ GioiThieu ~ ford:', ford);
	const { gioithieu } = ford;
	const { info } = gioithieu;

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

	const dataSource = gioithieu.children.map(
		(item: { id: number; title: string; price: number; slug: string }) => {
			return {
				key: item.id,
				title: item.title,
				price: item.price,
			};
		}
	);

	return (
		<section>
			{/* trailer */}
			<section className="grid grid-cols-2 gap-10">
				<section className="">
					<iframe
						width={560}
						height={315}
						src="https://www.youtube.com/embed/xU7DgFURYDA?si=C0kJXKqirLthXuNr"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="w-full min-h-[400px]"
					/>
				</section>
				<section className="">
					<p className="text-primary font-semibold text-xl">
						{gioithieu.heading1}
					</p>

					<section className="mt-8">
						<Table
							columns={columns}
							dataSource={dataSource}
							pagination={false}
						/>
					</section>
				</section>
			</section>

			{/* content */}
			<section className="mt-10">
				<p className="text-base">{parse(gioithieu.desc)}</p>

				<section className="grid grid-cols-12 gap-4 mt-10">
					<section className="col-span-12 lg:col-span-8">
						<section className="flex flex-col gap-4">
							<h1 className="">{info.des1}</h1>
							<Image src={info.image1} alt={info.des1} />

							<p className="text-base">{parse(info.des2)}</p>
							<p className="text-base">{parse(info.des3)}</p>

							<h2 className="text-base">{parse(info.ul1)}</h2>
							<ul className="text-base flex flex-col gap-2 ml-10">
								{info.listDesc.map((item: string, index: number) => (
									<li className="text-base list-disc" key={`${index}${item}`}>
										{item}
									</li>
								))}
							</ul>
						</section>
					</section>
					<section className="col-span-12 lg:col-span-4">
						<FormBaoGia />
					</section>
				</section>
			</section>
		</section>
	);
};

export default memo(GioiThieu);
