'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useHomePage } from '@/hooks/usePathName';
import cn from '@/libs/clsxm';
import { FloatButton } from 'antd';
import Image from 'next/image';
import { memo } from 'react';
import FooterLayout from './components/footer-layout';
import HeaderLayout from './components/header-layout';

interface CarLayoutProps {
	children: React.ReactNode;
	className?: {
		classContainer?: string;
		classMain?: string;
	};
}

const CarLayout = ({ children, className }: CarLayoutProps) => {
	const isHomePage = useHomePage();

	return (
		<AnimatePresence>
			<motion.section
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				exit={{ y: -100 }}
				transition={{ duration: 0.5 }}
				className={cn(
					'flex flex-col w-full overflow-x-hidden',
					className?.classContainer
				)}
			>
				<HeaderLayout isHomePage={isHomePage} />
				<main
					className={cn(
						'flex-1 min-h-[calc(100vh_-_80px)]',
						{ 'pt-px80': !isHomePage },
						{ 'lg:mt-12 mt-[calc(80px_+_48px)]': isHomePage },
						className?.classMain
					)}
				>
					{children}
					<FloatButton
						icon={
							<Image
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717866930/tran-xuan-hieu/messenger_niax8a.png'
								}
								alt="Messenger"
								height={56}
								width={56}
								className="object-contain w-full flex-shrink-0"
							/>
						}
						type="default"
						style={{ right: 24, height: 56, width: 56, padding: 0 }}
						className="!p-0"
					/>
				</main>
				<FooterLayout />
			</motion.section>
		</AnimatePresence>
	);
};

export default memo(CarLayout);
