'use client';

import { AnimatePresence, motion } from 'framer-motion';

import FooterLayout from './components/footer-layout';
import HeaderLayout from './components/header-layout';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from 'antd';
import Zalo from '~/socials/icons8-zalo-56.png';
import cn from '@/libs/clsxm';
import { memo } from 'react';
import { useHomePage } from '@/hooks/usePathName';

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
					<Tooltip title="Liên hệ với tôi qua số điện thoại">
						<Link href={'https://zalo.me/0833096605'} target="_blank">
							<section className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[220px]">
								<Image
									src={Zalo}
									alt="Call"
									height={56}
									width={56}
									className="object-contain flex-shrink-0 h-[56px] w-[56px]"
								/>
							</section>
						</Link>
					</Tooltip>
					<Tooltip title="Liên hệ với tôi qua số điện thoại">
						<Link
							href={`tel:083 3096 605`}
							className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[140px]"
						>
							<Image
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1718548252/tran-xuan-hieu/widget_icon_click_to_call_zzkmlw.svg'
								}
								alt="Call"
								height={56}
								width={56}
								className="object-contain flex-shrink-0 h-[56px] w-[56px]"
							/>
						</Link>
					</Tooltip>
					<Tooltip title="Liện hệ với tôi qua messager">
						<section className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[60px]">
							<Image
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717866930/tran-xuan-hieu/messenger_niax8a.png'
								}
								alt="Call"
								height={56}
								width={56}
								className="object-contain flex-shrink-0 h-[56px] w-[56px]"
							/>
						</section>
					</Tooltip>
				</main>

				<FooterLayout />
			</motion.section>
		</AnimatePresence>
	);
};

export default memo(CarLayout);
