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
	return (
		<section className={cn('flex flex-col w-full', className?.classContainer)}>
			<HeaderLayout />
			<main className={cn(className?.classMain)}>{children}</main>
			<FooterLayout />
		</section>
	);
};

export default memo(CarLayout);
