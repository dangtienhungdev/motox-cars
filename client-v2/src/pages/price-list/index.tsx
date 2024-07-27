import { Image, Table, Tabs } from 'antd';

import BannerPage from '@/components/banner';
import BaoGiaXe from '@/components/bao-gia-xe/bao-gia-xe';
import priceList from '@/data/price-list';
import { TPriceList } from '@/types/price-list';
import { formatCurrency } from '@/utils/format-currency';
import { Link } from 'react-router-dom';

interface TabContentProps {
	data: TPriceList;
	id: number;
}

const PriceList = () => {
	const tabs = priceList.fords;

	const items = tabs.map((tab) => {
		return {
			label: <span className="!tw-text-lg">{tab.label}</span>,
			key: tab.id.toString(),
			children: <TabContent data={tab} id={tab.id} />,
		};
	});

	return (
		<div>
			<BannerPage title="Bảng giá xe Ford" />

			<section className="car-list-section section-padding fix">
				<div className="container xl:!tw-w-[1300px] tw-mx-auto">
					<div className="car-list-wrapper">
						<div className="row g-4 !tw-flex-col-reverse lg:!tw-flex-row">
							<BaoGiaXe />

							<div className="col-lg-8">
								<div className="row g-4">
									<Tabs defaultActiveKey="5" items={items} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const TabContent = ({ data, id }: TabContentProps) => {
	console.log('🚀 ~ TabContent ~ id:', id);
	console.log('🚀 ~ TabContent ~ data:', data);
	const columns = [
		{
			title: <span className="!tw-text-lg tw-font-medium">Tên sản phẩm</span>,
			dataIndex: 'title',
			key: 'title',
			render: (text: string, record: any) => {
				console.log('🚀 ~ TabContent ~ record:', record);
				return (
					<Link
						to={`/car/${record.id}?id=${id}&ford=${data.slug}`}
						className="tw-text-base"
					>
						{text}
					</Link>
				);
			},
		},
		{
			title: <span className="tw-text-lg tw-font-medium">Giá sản phẩm</span>,
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
			id: item.id,
			slug: item.id,
			title: item.title,
			price: item.price,
		};
	});
	console.log('🚀 ~ dataSource ~ dataSource:', dataSource);

	return (
		<section className="tw-grid tw-grid-cols-1 tw-gap-10 lg:tw-grid-cols-1 tw-w-full">
			<section className="tw-hidden lg:tw-col-span-1 lg:tw-flex tw-items-center tw-justify-center">
				<Image
					src={data.thumnail}
					alt={data.label}
					className="mx-auto tw-w-full tw-object-contain"
				/>
			</section>

			<section className="tw-col-span-2 lg:tw-col-span-2">
				<Table columns={columns} dataSource={dataSource} pagination={false} />
			</section>

			<section className="tw-flex lg:tw-col-span-1 lg:tw-hidden tw-items-center tw-justify-center">
				<Image src={data.thumnail} alt={data.label} className="tw-w-full" />
			</section>
		</section>
	);
};

export default PriceList;
