'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useHomePage } from '@/hooks/usePathName';
import cn from '@/libs/clsxm';
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
				className={cn('flex flex-col w-full', className?.classContainer)}
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
				</main>
				<FooterLayout />
			</motion.section>
		</AnimatePresence>
	);
};

export default memo(CarLayout);
