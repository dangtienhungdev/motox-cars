'use client';

import ScrollTop from '@/components/scroll-top/scroll-top';
import TabContent from './tab-content';
import { Tabs } from 'antd';
import { memo } from 'react';
import { motion } from 'framer-motion';
import priceList from '@/data/price-list';
import { useSearchParams } from 'next/navigation';

const CarsPage = () => {
	const tabs = priceList.fords;

	const id = useSearchParams().get('id');

	const items = tabs.map((tab) => {
		return {
			label: tab.label,
			key: tab.id.toString(),
			children: <TabContent data={tab} />,
		};
	});

	const onChange = (key: string) => {
		console.log(key);
	};

	if (!id) {
		return (
			<motion.div className="w-full xl:px-px80 lg:px-10 md:px-6 px-4 py-6 h-full">
				<ScrollTop />
				<p>Đang cập nhật dữ liệu...</p>
			</motion.div>
		);
	}

	return (
		<motion.div className="w-full xl:px-px80 lg:px-10 md:px-6 px-4 py-6 h-full">
			<ScrollTop />

			<Tabs
				size="large"
				defaultActiveKey={id}
				items={items}
				onChange={onChange}
			/>
		</motion.div>
	);
};

export default memo(CarsPage);
