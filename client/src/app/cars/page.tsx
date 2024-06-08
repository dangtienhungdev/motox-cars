'use client';

import { memo, useEffect, useState } from 'react';

import ScrollTop from '@/components/scroll-top/scroll-top';
import priceList from '@/data/price-list';
import { Tabs } from 'antd';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import TabContent from './tab-content';

const CarsPage = () => {
	const tabs = priceList.fords;
	const [isTabActive, setIsTabActive] = useState(1);
	const pathName = useSearchParams();
	const idCar = pathName.get('id');

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

	useEffect(() => {
		if (idCar) {
			setIsTabActive(Number(idCar));
		} else {
			setIsTabActive(1);
		}
	}, [idCar]);

	return (
		<motion.div className="w-full xl:px-px80 lg:px-10 md:px-6 px-4 py-6 h-full">
			<ScrollTop />

			<Tabs
				size="large"
				defaultActiveKey={isTabActive.toString()}
				items={items}
				onChange={onChange}
			/>
		</motion.div>
	);
};

export default memo(CarsPage);
