'use client';

import ScrollTop from '@/components/scroll-top/scroll-top';
import TabContent from './components/tab-content';
import { Tabs } from 'antd';
import { memo } from 'react';
import { motion } from 'framer-motion';
import priceList from '@/data/price-list';

const PriceList = () => {
	const tabs = priceList.fords;

	const items = tabs.map((tab) => {
		return {
			label: tab.label,
			key: tab.id.toString(),
			children: <TabContent data={tab} id={tab.id} />,
		};
	});

	return (
		<motion.div className="w-full xl:px-px80 lg:px-10 md:px-6 px-4 py-6 h-full">
			<ScrollTop />

			<Tabs size="large" defaultActiveKey="1" items={items} />
		</motion.div>
	);
};

export default memo(PriceList);
