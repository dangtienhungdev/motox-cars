'use client';

import ScrollTop from '@/components/scroll-top/scroll-top';
import priceList from '@/data/price-list';
import { Tabs } from 'antd';
import { motion } from 'framer-motion';
import { memo } from 'react';
import TabContent from './tab-content';

const CarsPage = () => {
	const tabs = priceList.fords;
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

	return (
		<motion.div className="w-full xl:px-px80 lg:px-10 md:px-6 px-4 py-6 h-full">
			<ScrollTop />

			<Tabs
				size="large"
				defaultActiveKey={tabs[0].id.toString()}
				items={items}
				onChange={onChange}
			/>
		</motion.div>
	);
};

export default memo(CarsPage);
