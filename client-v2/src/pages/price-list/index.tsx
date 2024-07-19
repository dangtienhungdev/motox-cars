import BannerPage from '@/components/banner';
import BaoGiaXe from '@/components/bao-gia-xe/bao-gia-xe';
import priceList from '@/data/price-list';
import TabContent from '@/features/price-list/tab-content';
import { Tabs } from 'antd';

const PriceList = () => {
	const tabs = priceList.fords;

	const items = tabs.map((tab) => {
		return {
			label: <span className="tw-text-base">{tab.label}</span>,
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
						<div className="row g-4">
							<div className="col-lg-8">
								<div className="row g-4">
									<Tabs defaultActiveKey="5" items={items} />
								</div>
							</div>

							<BaoGiaXe />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PriceList;
