import { Link, Outlet } from 'react-router-dom';

import { Tooltip } from 'antd';
import Footer from './footer';
import NavFooter from './footer/nav-footer';
import HeaderSectionStart from './header-setion-start';
import HeaderTopSelectionStart from './header-top-selection-start';

const LayoutCars = () => {
	return (
		<div>
			<HeaderTopSelectionStart />

			<HeaderSectionStart />
			<Outlet />

			<NavFooter />

			<section className="tw-fixed tw-right-5 tw-bottom-5 tw-flex tw-flex-col tw-gap-4">
				<Tooltip title="Liên hệ với tôi qua zalo">
					<Link to={'https://zalo.me/0833096605'} target="_blank">
						<section className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[220px]">
							<img
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722137058/tran-xuan-hieu/banner/icons8-zalo-56_v16hax.png'
								}
								alt="Call"
								height={56}
								width={56}
								className="object-contain flex-shrink-0 h-[56px] w-[56px]"
							/>
						</section>
					</Link>
				</Tooltip>
				<Tooltip title="Liện hệ với tôi qua messager">
					<Link
						target="_blank"
						to={'https://m.me/223278341521153'}
						rel="noopener noreferrer"
						className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[60px]"
					>
						<img
							src={
								'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717866930/tran-xuan-hieu/messenger_niax8a.png'
							}
							alt="Call"
							height={56}
							width={56}
							className="object-contain flex-shrink-0 h-[56px] w-[56px]"
						/>
					</Link>
				</Tooltip>
				<Tooltip title="Liên hệ với tôi qua số điện thoại">
					<Link
						to={`tel:083 3096 605`}
						className="fixed h-[56px] w-[56px] cursor-pointer bg-white flex items-center justify-center rounded-full p-1 z-50 right-6 bottom-[140px]"
					>
						<img
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
			</section>
			<Footer />
		</div>
	);
};

export default LayoutCars;
