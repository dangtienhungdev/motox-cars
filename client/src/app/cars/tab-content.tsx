import { Button, Tabs, TabsProps, Tooltip } from 'antd';

import { products } from '@/data/products';
import { TPriceList } from '@/types/price-list.type';
import { formatCurrency } from '@/utils/fomatCurrency';
import parse from 'html-react-parser';
import Image from 'next/image';
import { memo } from 'react';
import GioiThieu from './gioi-thieu';
import HinhAnhThucTe from './hinh-anh-thuc-te';
import ThongSo from './thong-so';

const TabContent = ({ data }: { data: TPriceList }) => {
	const ford = products.find((product) => product.id === data.id);
	console.log('🚀 ~ TabContent ~ ford:', ford);

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
			<section className="grid grid-cols-2 gap-10">
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
				<section className="">
					<section className="">
						<Image
							src={ford.maMauXe[0].image}
							alt={ford.maMauXe[0].title}
							height={370}
							width={570}
							className="w-[70%] mx-auto object-contain"
						/>
					</section>

					<section className="flex items-center justify-center gap-4 mt-10">
						{ford.maMauXe.map((item) => (
							<section
								className={`h-6 w-6 rounded-full bg-[${item.color}] shadow cursor-pointer`}
								style={{ backgroundColor: item.color }}
								key={item.id}
							></section>
						))}
					</section>
				</section>
			</section>

			<section className="my-10 py-10 grid-cols-5 gap-10 grid">
				{ford.xe.map((item) => (
					<Tooltip title={item.title} key={item.id}>
						<section className="flex flex-col gap-4 hover:shadow transition-all duration-200 border rounded-sm overflow-hidden cursor-pointer">
							<section className="flex-shrink-0 flex items-center justify-center">
								<Image
									src={item.image}
									alt={item.title}
									height={110}
									width={165}
									className="object-contain w-full"
								/>
							</section>
							<section className="px-4 pb-4">
								<p className="font-semibold text-base">{item.title}</p>
								<p className="text-gray-l10 font-medium text-base">
									<span className="text-primary-l10">
										{formatCurrency(Number(item.price))}
									</span>
								</p>
							</section>
						</section>
					</Tooltip>
				))}
			</section>

			<Tabs defaultActiveKey="1" items={items} />
		</section>
	);
};

export default memo(TabContent);
