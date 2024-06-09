import { Image, Table } from 'antd';

import FormBaoGia from '@/components/form-bao-gia';
import { formatCurrency } from '@/utils/fomatCurrency';
import parse from 'html-react-parser';
import Link from 'next/link';
import { memo } from 'react';
import FordRanger from './ford-ranger';

const GioiThieu = ({ ford }: any) => {
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
			render: (
				_: string,
				record: { id: string; title: string; price: string; slug: string }
			) => {
				return <span>{formatCurrency(Number(record.price))}</span>;
			},
		},
	];

	const dataSource = gioithieu.children.map(
		(item: { id: string; title: string; price: string; slug: string }) => {
			return {
				key: item.id,
				...item,
			};
		}
	);

	return (
		<section>
			{/* trailer */}
			<section className="grid lg:grid-cols-2 grid-cols-1 gap-10">
				<section className="">{gioithieu?.video}</section>
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
							<h1 className="text-lg font-semibold text-primary">
								{info.des1}
							</h1>
							<Image src={info.image1} alt={info.des1} />

							<p className="text-base">{parse(info.des2)}</p>
							<p className="text-base">{parse(info.des3)}</p>

							<h2 className="text-base">{parse(info.ul1)}</h2>
							{info?.listDesc && (
								<ul className="text-base flex flex-col gap-2 ml-10">
									{info?.listDesc?.map((item: string, index: number) => (
										<li className="text-base list-disc" key={`${index}${item}`}>
											{item}
										</li>
									))}
								</ul>
							)}

							{info?.des4 && (
								<h1 className="text-lg font-semibold text-primary">
									{info?.des4}
								</h1>
							)}
							{info?.des5 && <Image src={info?.des5} alt={info?.des5} />}
							{info?.des6 && <p className="text-base">{parse(info?.des6)}</p>}

							{info?.des7 && <Image src={info?.des7} alt={info?.des7} />}
							{info?.des8 && <p className="text-base">{parse(info?.des8)}</p>}

							{info?.des9 && <Image src={info?.des9} alt={info?.des9} />}
							{info?.des10 && <p className="text-base">{parse(info?.des10)}</p>}

							{info?.des11 && <Image src={info?.des11} alt={info?.des11} />}
							{info?.des12 && <p className="text-base">{parse(info?.des12)}</p>}

							{info?.des13 && <Image src={info?.des13} alt={info?.des13} />}
							{info?.des14 && <p className="text-base">{parse(info?.des14)}</p>}
							{info?.des15 && <p className="text-base">{parse(info?.des15)}</p>}

							{info?.des16 && <Image src={info?.des16} alt={info?.des16} />}
							{info?.des17 && <p className="text-base">{parse(info?.des17)}</p>}

							{info?.des18 && <Image src={info?.des18} alt={info?.des18} />}

							{/* FordRanger */}
							<FordRanger ford={ford} />
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
