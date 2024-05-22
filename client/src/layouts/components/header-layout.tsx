'use client';

import { ChatBubbleIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';

import header from '@/data/header';
import cn from '@/libs/clsxm';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import Logo from '~/images/logo.png';
import menus from '../menus';

const HeaderLayout = ({ isHomePage }: { isHomePage: boolean }) => {
	return (
		<AnimatePresence>
			<motion.header
				// initial={{ y: -100 }}
				// animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				exit={{ y: -100 }}
				className={cn('hidden lg:block w-full top-0 left-0 right-0 z-order-1', {
					fixed: isHomePage,
				})}
			>
				<nav
					className={cn(
						'bg-primary text-white h-12 flex justify-between items-center px-px80',
						{ hidden: !isHomePage }
					)}
				>
					<section className="flex items-center gap-2">
						<span className="">
							<EnvelopeClosedIcon className="w-4 h-4" />
						</span>
						<p className="flex items-center">
							<span className="">Hot Line:</span>
							<span className="text-base">{header.hotline}</span>
						</p>
					</section>
					<section className="flex items-center gap-2">
						<span className="">
							<EnvelopeClosedIcon className="w-4 h-4" />
						</span>
						<p className="flex items-center">
							<span className="">Hot Line:</span>
							<span className="text-base">{header.hotline}</span>
						</p>
					</section>
				</nav>

				<section
					className={cn(
						'w-full shadow-md bg-white left-1/2 h-20 flex items-center justify-between',
						{
							'top-12 rounded-b-lg px-6 max-w-[calc(100vw_-_160px)] absolute  -translate-x-1/2':
								isHomePage,
						},
						{ 'top-0 px-px80 fixed right-0 left-0': !isHomePage }
					)}
				>
					<section className="flex-shrink-0">
						<Image
							src={Logo}
							alt="logo"
							width={123}
							height={40}
							className="object-contain"
						/>
					</section>

					<section className="flex items-center gap-5 flex-1 justify-center">
						{menus.map((menu) => (
							<Link
								href={menu.link}
								key={menu.id}
								className="text-base text-primary font-medium"
							>
								{menu.name}
							</Link>
						))}
					</section>

					<section className="">
						<Button
							type="primary"
							className="!bg-primary text-white py-3 px-6 flex items-center gap-2 flex-shrink-0 flex-row-reverse !text-base !h-12 w-[166px]"
							icon={<ChatBubbleIcon />}
						>
							{header.baogia}
						</Button>
					</section>
				</section>
			</motion.header>
		</AnimatePresence>
	);
};

export default memo(HeaderLayout);
