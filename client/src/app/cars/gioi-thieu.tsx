import { Image, Table } from 'antd';

import Content from '@/components/bao-gia/content';
import FormBaoGia from '@/components/form-bao-gia';
import { FieldType } from '@/types/data.type';
import { formatCurrency } from '@/utils/fomatCurrency';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';
import Link from 'next/link';
import { memo } from 'react';
import FordExplorer from './ford-explorer';
import FordRanger from './ford-ranger';

const GioiThieu = ({ ford }: any) => {
	const { gioithieu } = ford;
	const { info } = gioithieu;
	const [form] = useForm<FieldType>();

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
				{gioithieu?.video && <section className="">{gioithieu?.video}</section>}
				<section className="">
					{gioithieu?.heading1 && (
						<p className="text-primary font-semibold text-xl">
							{gioithieu?.heading1}
						</p>
					)}

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
				{gioithieu?.desc && (
					<p className="text-base">{parse(gioithieu.desc)}</p>
				)}

				<section className="grid grid-cols-12 gap-4 mt-10">
					<section className="col-span-12 lg:col-span-8">
						<section className="flex flex-col gap-4">
							{info?.des1 && (
								<h2 className="text-lg font-semibold text-primary">
									{info?.des1}
								</h2>
							)}
							{info?.image1 && <Image src={info?.image1} alt={info?.des1} />}

							{info?.des2 && <p className="text-base">{parse(info?.des2)}</p>}
							{info?.des3 && <p className="text-base">{parse(info?.des3)}</p>}

							{info?.ul1 && <h2 className="text-base">{parse(info?.ul1)}</h2>}
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
								<h4 className="text-lg font-semibold text-primary">
									{info?.des4}
								</h4>
							)}
							{info?.des5 && <Image src={info?.des5} alt={info?.des5} />}
							{info?.des6 && <p className="text-base">{parse(info?.des6)}</p>}

							{info?.des7 && <Image src={info?.des7} alt={info?.des7} />}
							{info?.des8 && <p className="text-base">{parse(info?.des8)}</p>}
							{info?.des88 && <p className="text-base">{parse(info?.des88)}</p>}
							{info?.des89 && <p className="text-base">{parse(info?.des89)}</p>}

							{info?.des9 && <Image src={info?.des9} alt={info?.des9} />}
							{info?.des10 && <p className="text-base">{parse(info?.des10)}</p>}

							{info?.listDesc88 && (
								<ul className="text-base flex flex-col gap-2 ml-10">
									{info?.listDesc88?.map((item: string, index: number) => (
										<li className="text-base list-disc" key={`${index}${item}`}>
											{item}
										</li>
									))}
								</ul>
							)}

							{info?.des11 && <Image src={info?.des11} alt={info?.des11} />}
							{info?.des12 && <p className="text-base">{parse(info?.des12)}</p>}

							{info?.des13 && <Image src={info?.des13} alt={info?.des13} />}
							{info?.des14 && <p className="text-base">{parse(info?.des14)}</p>}
							{info?.des15 && <p className="text-base">{parse(info?.des15)}</p>}

							{info?.des16 && <Image src={info?.des16} alt={info?.des16} />}
							{info?.des17 && <p className="text-base">{parse(info?.des17)}</p>}

							{info?.des18 && <Image src={info?.des18} alt={info?.des18} />}

							{info?.des19 && <Image src={info?.des18} alt={info?.des19} />}
							{info?.des20 && <p className="text-base">{parse(info?.des20)}</p>}

							{info?.des21 && <Image src={info?.des21} alt={info?.des21} />}
							{info?.des22 && <p className="text-base">{parse(info?.des22)}</p>}

							{info?.des23 && <Image src={info?.des23} alt={info?.des23} />}
							{info?.des24 && <p className="text-base">{parse(info?.des24)}</p>}

							{info?.des25 && <Image src={info?.des25} alt={info?.des25} />}
							{info?.des26 && <p className="text-base">{parse(info?.des26)}</p>}

							{info?.des27 && <Image src={info?.des27} alt={info?.des27} />}
							{info?.des28 && <p className="text-base">{parse(info?.des28)}</p>}

							{info?.des29 && <Image src={info?.des29} alt={info?.des29} />}
							{info?.des30 && <p className="text-base">{parse(info?.des30)}</p>}

							{info?.des31 && <Image src={info?.des31} alt={info?.des31} />}
							{info?.des32 && <p className="text-base">{parse(info?.des32)}</p>}

							{info?.des33 && <Image src={info?.des33} alt={info?.des33} />}
							{info?.des34 && <p className="text-base">{parse(info?.des34)}</p>}

							{info?.des35 && <Image src={info?.des35} alt={info?.des35} />}
							{info?.des36 && <p className="text-base">{parse(info?.des36)}</p>}
							{info?.des37 && <p className="text-base">{parse(info?.des37)}</p>}

							{info?.des38 && <Image src={info?.des38} alt={info?.des38} />}
							{info?.des39 && <p className="text-base">{parse(info?.des39)}</p>}

							{info?.des40 && <Image src={info?.des40} alt={info?.des40} />}
							{info?.des41 && <p className="text-base">{parse(info?.des41)}</p>}

							{info?.des42 && <Image src={info?.des42} alt={info?.des42} />}
							{info?.des43 && <p className="text-base">{parse(info?.des43)}</p>}

							{/* FordRanger */}
							<FordRanger ford={ford} />

							{/* ford explorer */}
							<FordExplorer ford={ford} />
							{/* {info?.fordExplorer && ()} */}
						</section>
					</section>
					<section className="col-span-12 lg:col-span-4">
						<FormBaoGia>
							<Content form={form} isSubmit={true} />
						</FormBaoGia>
					</section>
				</section>
			</section>
		</section>
	);
};

export default memo(GioiThieu);
