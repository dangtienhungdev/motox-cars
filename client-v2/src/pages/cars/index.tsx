import BannerPage from '@/components/banner';
import priceList from '@/data/price-list';
import TabContent from '@/features/price-list/tab-content';
import { Tabs } from 'antd';
import { useSearchParams } from 'react-router-dom';

const CarPage = () => {
	const tabs = priceList.fords;

	const [params] = useSearchParams();
	const id = params.get('id');

	const items = tabs.map((tab) => {
		return {
			label: <span className="tw-text-base">{tab.label}</span>,
			key: tab.id.toString(),
			children: <TabContent data={tab} id={tab.id} />,
		};
	});

	if (!id) {
		return (
			<div>
				<BannerPage title={`Thông tin của xe`} />

				<div className="tw-w-full tw-h-full tw-px-4 tw-py-6 xl:tw-px-px80 lg:tw-px-10 md:tw-px-6">
					<p className="tw-text-center">Đang cập nhật dữ liệu...</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<BannerPage title="Bảng giá xe Ford" />

			<section className="car-list-section section-padding fix">
				<div className="container xl:!tw-w-[1300px] tw-mx-auto">
					<div className="car-list-wrapper">
						<div className="row g-4">
							<div className="col-lg-12">
								<div className="row g-4">
									<Tabs defaultActiveKey={id} items={items} />
								</div>
							</div>

							{/* <BaoGiaXe /> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CarPage;
