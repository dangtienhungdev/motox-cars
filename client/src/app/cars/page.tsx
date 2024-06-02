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
	return (
		<motion.div className="w-full px-px80 py-6 h-full">
			<ScrollTop />

			<Tabs size="large" defaultActiveKey="5" items={items} />
		</motion.div>
	);
};

export default memo(CarsPage);
