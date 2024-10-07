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
						<img
							src={
								'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722261400/tran-xuan-hieu/banner/toolmenu6_agkdeg.png'
							}
							alt="Call"
							height={56}
							width={56}
							className={cn(
								'tw-object-contain tw-flex-shrink-0 tw-h-[56px] tw-w-[56px]'
							)}
						/>
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
