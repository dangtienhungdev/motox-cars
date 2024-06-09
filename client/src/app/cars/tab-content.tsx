'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Button, Tabs, TabsProps, Tooltip } from 'antd';
import { memo, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import BaoGiaXe from '@/components/bao-gia';
import { products } from '@/data/products';
import { TPriceList } from '@/types/price-list.type';
import { formatCurrency } from '@/utils/fomatCurrency';
import parse from 'html-react-parser';
import Image from 'next/image';
import GioiThieu from './gioi-thieu';
import HinhAnhThucTe from './hinh-anh-thuc-te';
import ThongSo from './thong-so';

// Import Swiper styles

const TabContent = ({ data }: { data: TPriceList }) => {
	const ford = products.find((product) => product.id === data.id);
	const [imageActive, setImageActive] = useState(0);

	const handleImageActive = (index: number) => {
		setImageActive(index);
	};

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	if (!ford) {
		return <section className="">Đang cập nhật dữ liệu...</section>;
	}

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: <span className="text-base">Giới thiệu sản phẩm</span>,
			children: <GioiThieu ford={ford} />,
		},
		{
			key: '2',
			label: <span className="text-base">Thông số kỹ thuật</span>,
			children: <ThongSo />,
		},
		{
			key: '3',
			label: <span className="text-base">Hình ảnh thực tế</span>,
			children: <HinhAnhThucTe />,
		},
	];

	return (
		<section className="">
			<section className="grid lg:grid-cols-2 grid-cols-1 gap-10">
				<section className="flex flex-col gap-8">
					<h1 className="lg:text-2xl text-lg font-semibold text-primary">
						{ford.title}
					</h1>

					<p className="text-gray-l10 font-medium text-xl">
						Giá từ:{' '}
						<span className="text-primary-l10">
							{formatCurrency(Number(ford.price))}
						</span>
					</p>

					<section className="flex items-center gap-5">
						<Button
							size="large"
							type="primary"
							onClick={() => setIsModalOpen(true)}
							className="!rounded-md text-base font-medium text-white !px-10"
						>
							Báo giá
						</Button>
						<Button
							size="large"
							type="primary"
							className="!rounded-md text-base font-medium text-white !px-10"
						>
							Lái thử
						</Button>
					</section>

					<section className="flex flex-col gap-2">
						<p className="font-medium text-xl">{ford.titleTraGop}</p>
						<p className="text-base">{parse(ford.desc)}</p>
					</section>
				</section>
				<section className="mb-10 lg:mb-0">
					<section className="">
						<Image
							src={ford.maMauXe[imageActive].image}
							alt={ford.maMauXe[imageActive].title}
							height={370}
							width={570}
							className="lg:w-[70%] md:!w-full mx-auto object-contain"
						/>
					</section>

					<section className="flex items-center justify-center gap-4 mt-10">
						{ford.maMauXe.map((item, index) => (
							<Tooltip key={item.id} title={item.title}>
								<button
									onClick={() => handleImageActive(index)}
									className={`h-6 w-6 rounded-full bg-[${item.color}] shadow cursor-pointer`}
									style={{ backgroundColor: item.color }}
									key={item.id}
								></button>
							</Tooltip>
						))}
					</section>
				</section>
			</section>

			<section className="my-10 py-10 hidden lg:block">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					className="mySwiper"
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Navigation]}
				>
					{/* <section className="my-10 py-10 lg:grid-cols-5 xl:gap-6 lg:gap-6 lg:grid hidden"> */}
					{ford.xe.map((item) => (
						<SwiperSlide key={item.id}>
							<Tooltip title={item.title} key={item.id}>
								<section className="flex flex-col h-[260px] gap-4 hover:shadow transition-all duration-200 border rounded-sm overflow-hidden cursor-pointer">
									<section className="flex-shrink-0 flex items-center justify-center">
										<Image
											src={item.image}
											alt={item.title}
											height={110}
											width={165}
											className="object-contain w-full"
										/>
									</section>
									<section className="px-4 pb-4 flex flex-1 flex-col">
										<p className="font-semibold text-base">{item.title}</p>
										<p className="text-gray-l10 mt-auto font-medium text-base">
											<span className="text-primary-l10">
												{formatCurrency(Number(item.price))}
											</span>
										</p>
									</section>
								</section>
							</Tooltip>
						</SwiperSlide>
					))}
					{/* </section> */}
				</Swiper>
			</section>

			<Tabs defaultActiveKey="1" items={items} />

			<BaoGiaXe
				isModalOpen={isModalOpen}
				handleOk={() => setIsModalOpen(false)}
				handleCancel={() => setIsModalOpen(false)}
			/>
		</section>
	);
};

export default memo(TabContent);
