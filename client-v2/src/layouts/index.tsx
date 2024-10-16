import { Link, Outlet } from 'react-router-dom';

import BaoGiaXeModal from '@/components/bao-gia';
import { cn } from '@/utils/cn';
import { Tooltip } from 'antd';
import { useState } from 'react';
import Footer from './footer';
import NavFooter from './footer/nav-footer';
import HeaderSectionStart from './header-setion-start';
import HeaderTopSelectionStart from './header-top-selection-start';

const LayoutCars = () => {
	const contacts = [
		{
			id: 1,
			title: 'Liên hệ với tôi qua zalo',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722137058/tran-xuan-hieu/banner/icons8-zalo-56_v16hax.png',
			link: 'https://zalo.me/0833096605',
		},
		{
			id: 2,
			title: 'Liên hệ với tôi qua số điện thoại',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1718548252/tran-xuan-hieu/widget_icon_click_to_call_zzkmlw.svg',
			link: 'tel:083 3096 605',
		},
	];

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<div>
			<HeaderTopSelectionStart />

			<HeaderSectionStart />
			<Outlet />

			<NavFooter />

			<section className="tw-fixed tw-right-5 tw-bottom-5 tw-flex tw-flex-col tw-gap-4 tw-z-[999]">
				<Tooltip title={'Nhận báo giá xe'}>
					<button
						className={cn(
							'tw-fixed tw-h-[56px] !tw-bottom-[250px] tw-border tw-border-primary !tw-bg-primary tw-w-[56px] tw-cursor-pointer tw-bg-transparent tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 tw-z-50 tw-right-4'
						)}
						onClick={() => setIsModalOpen(true)}
					>
						{/* <img
							src={
								'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722261400/tran-xuan-hieu/banner/toolmenu6_agkdeg.png'
							}
							alt="Call"
							height={56}
							width={56}
							className={cn(
								'tw-object-contain tw-flex-shrink-0 tw-h-[56px] tw-w-[56px]'
							)}
						/> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="tw-size-6 tw-stroke-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
							/>
						</svg>
					</button>
				</Tooltip>
				{contacts.map((contact) => {
					return (
						<Tooltip title={contact.title} key={contact.id}>
							<Link
								to={contact.link}
								target="_blank"
								className={cn(
									'tw-fixed tw-h-[56px] tw-w-[56px] tw-cursor-pointer tw-bg-transparent tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 tw-z-50 tw-right-4 tw-bottom-[60px]',
									{ '!tw-bottom-[120px]': contact.id === 1 },
									{ '!tw-bottom-[180px]': contact.id === 2 },
									{
										'!tw-bottom-[250px] tw-border tw-border-primary !tw-bg-primary':
											contact.id === 3,
									}
									// { '!tw-h-[32px] !tw-w-[32px] tw-right-8': contact.id === 2 }
								)}
							>
								<img
									src={contact.image}
									alt="Call"
									height={56}
									width={56}
									className={cn(
										'tw-object-contain tw-flex-shrink-0 tw-h-[56px] tw-w-[56px]',
										{ '!tw-h-[50px] !tw-w-[50px]': contact.id === 2 }
									)}
								/>
							</Link>
						</Tooltip>
					);
				})}
			</section>

			<BaoGiaXeModal
				isModalOpen={isModalOpen}
				handleOk={() => setIsModalOpen(false)}
				handleCancel={() => setIsModalOpen(false)}
			/>

			<Footer />
		</div>
	);
};

export default LayoutCars;
