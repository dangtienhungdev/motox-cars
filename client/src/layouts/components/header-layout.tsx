'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChatBubbleIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { memo, useState } from 'react';

import BaoGiaXe from '@/components/bao-gia';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import ScrollTop from '@/components/scroll-top/scroll-top';
import SidebarMobile from './sidebar-mobile';
import cn from '@/libs/clsxm';
import header from '@/data/header';
import menus from '../menus';

const HeaderLayout = ({ isHomePage }: { isHomePage: boolean }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const [isOpenSidebar, setisOpenSidebar] = useState<boolean>(false);

	return (
		<AnimatePresence>
			<ScrollTop />
			<motion.header
				transition={{ duration: 0.5 }}
				exit={{ y: -100 }}
				className={cn('block w-full top-0 left-0 right-0 z-order-7', {
					fixed: isHomePage,
				})}
			>
				<nav
					className={cn(
						'bg-primary text-white h-12 hidden md:flex justify-between items-center xl:px-px80 lg:px-10 md:px-6 px-4',
						{ '!hidden': !isHomePage }
					)}
				>
					{/* how to click phone call phone */}
					<Link
						href={`tel:${header.hotline}`}
						className="flex items-center gap-2"
					>
						<span className="">
							<EnvelopeClosedIcon className="w-4 h-4" />
						</span>
						<p className="flex items-center">
							<span className="">Hot Line: </span>
							<span className="text-base">{header.hotline}</span>
						</p>
					</Link>
					<Link
						href={`https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new`}
						target="_blank"
						className="flex items-center gap-2"
					>
						<span className="">
							<EnvelopeClosedIcon className="w-4 h-4" />
						</span>
						<p className="flex items-center">
							<span className="">Email: </span>
							<span className="text-base">{'tranxuanhieu003@gmail.com'}</span>
						</p>
					</Link>
				</nav>

				<section
					className={cn(
						'w-full shadow-md bg-white left-1/2 h-20 flex items-center justify-between',
						{
							'top-12 lg:rounded-b-lg px-6 lg:max-w-[calc(100vw_-_160px)] lg:absolute  lg:-translate-x-1/2':
								isHomePage,
						},
						{
							'top-0 xl:px-px80 lg:px-10 md:px-6 px-4 fixed right-0 left-0':
								!isHomePage,
						}
					)}
				>
					<Button
						onClick={() => setisOpenSidebar(!isOpenSidebar)}
						className="!h-12 !w-12 !flex lg:!hidden items-center justify-center flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 flex-shrink-0"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</Button>
					<section className="flex-shrink-0 lg:block hidden">
						<Link href={'/'}>
							<Image
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png'
								}
								alt="logo"
								width={123}
								height={40}
								className="object-contain"
							/>
						</Link>
					</section>

					<section className="lg:flex hidden items-center gap-5 flex-1 justify-center">
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
							onClick={() => setIsModalOpen(true)}
							className="!bg-primary text-white py-3 px-6 flex items-center gap-2 flex-shrink-0 flex-row-reverse !text-base !h-12 w-[166px]"
							icon={<ChatBubbleIcon />}
						>
							{header.baogia}
						</Button>
					</section>
				</section>
			</motion.header>

			<BaoGiaXe
				isModalOpen={isModalOpen}
				handleOk={() => setIsModalOpen(false)}
				handleCancel={() => setIsModalOpen(false)}
			/>

			<SidebarMobile
				isOpenSidebar={isOpenSidebar}
				setIsOpenSidebar={setisOpenSidebar}
			/>
		</AnimatePresence>
	);
};

export default memo(HeaderLayout);
