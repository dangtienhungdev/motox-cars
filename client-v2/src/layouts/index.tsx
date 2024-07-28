import { Link, Outlet } from 'react-router-dom';

import { cn } from '@/utils/cn';
import { Tooltip } from 'antd';
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

	return (
		<div>
			<HeaderTopSelectionStart />

			<HeaderSectionStart />
			<Outlet />

			<NavFooter />

			<section className="tw-fixed tw-right-5 tw-bottom-5 tw-flex tw-flex-col tw-gap-4 tw-z-[999]">
				{contacts.map((contact) => {
					return (
						<Tooltip title={contact.title} key={contact.id}>
							<Link
								to={contact.link}
								target="_blank"
								className={cn(
									'tw-fixed tw-h-[56px] tw-w-[56px] tw-cursor-pointer tw-bg-transparent tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 tw-z-50 tw-right-6 tw-bottom-[140px]',
									{ '!tw-bottom-[220px]': contact.id === 1 }
								)}
							>
								<img
									src={contact.image}
									alt="Call"
									height={56}
									width={56}
									className="tw-object-contain tw-flex-shrink-0 tw-h-[56px] tw-w-[56px]"
								/>
							</Link>
						</Tooltip>
					);
				})}
			</section>
			<Footer />
		</div>
	);
};

export default LayoutCars;
