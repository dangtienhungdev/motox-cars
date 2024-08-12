import BaoGiaXeModal from '@/components/bao-gia';
import { Tooltip } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MHeaderSelectionStart from '../header-top-selection-start/m-header-selection';
import SearchInput from '../search-input';

const HeaderSectionStart = () => {
	const data = [
		{
			id: 1,
			title: 'Trang chủ',
			link: '/',
		},
		{
			id: 2,
			title: 'Giới thiệu',
			link: '/introduce',
		},
		{
			id: 3,
			title: 'Bảng giá xe',
			link: '/price-list',
		},
		{
			id: 4,
			title: 'Sản phẩm',
			link: '/cars?id=5',
			icon: <i className="fas fa-angle-down" />,
			children: [
				{
					id: 4.1,
					title: 'Ford Everest',
					link: '/cars?id=5',
				},
				{
					id: 4.2,
					title: 'Ford Ranger',
					link: '/cars?id=1',
				},
				{
					id: 4.3,
					title: 'Ford Ranger Raptor',
					link: '/cars?id=2',
				},
				{
					id: 4.4,
					title: 'Ford Explorer',
					link: '/cars?id=6',
				},
				{
					id: 4.5,
					title: 'Ford Territory',
					link: '/cars?id=4',
				},
				{
					id: 4.6,
					title: 'Ford Transit',
					link: '/cars?id=7',
				},
			],
		},
		{
			id: 5,
			title: 'Liên hệ',
			link: '/contact',
		},
	];

	const [openSidebar, setOpenSidebar] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<MHeaderSelectionStart
				open={openSidebar}
				setOpenSidebar={setOpenSidebar}
			/>

			<header id="header-sticky" className="header-1">
				<div className="container-fluid">
					<div className="mega-menu-wrapper">
						<div className="header-main">
							<div className="header-left">
								<div className="logo">
									<Link to="/" className="header-logo">
										<img
											src="https://www.ford.com.vn/etc.clientlibs/dxdfoap/clientlibs/cmp-scripts/clientlib-site/resources/images/ford-logo.svg"
											alt="logo-img"
											height={56}
											width={152}
										/>
									</Link>
								</div>
								<div className="mean__menu-wrapper">
									<div className="main-menu">
										<nav id="mobile-menu">
											<ul>
												{data.map((item) => {
													return (
														<li
															className="has-dropdown active menu-thumb"
															key={item.id}
														>
															<Link to={`${item.link}`}>
																{item.title}
																{item.icon && item.icon}
															</Link>
															<ul className="submenu">
																{item.children &&
																	item.children.length > 0 &&
																	item.children.map((child) => {
																		return (
																			<li key={child.id}>
																				<Link to={`${child.link}`}>
																					{child.title}
																				</Link>
																			</li>
																		);
																	})}
															</ul>
														</li>
													);
												})}
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div className="header-right d-flex !tw-gap-4 justify-content-end align-items-center">
								<div className="icon-items">
									<Link to="tel:0833096605" className="icon">
										<i className="fas fa-phone-alt" />
									</Link>
									<div className="content">
										<p>Gọi cho tôi bất cứ khi nào</p>
										<h6>
											<Link to="tel:0833096605">083 3096 605</Link>
										</h6>
									</div>
								</div>
								<Tooltip title="Nhận báo giá xe">
									<button
										className="search-trigger search-icon tw-bg-primary tw-h-[33px] tw-relative tw-w-[33px] tw-rounded-full tw-flex tw-items-center tw-justify-center"
										onClick={() => setIsModalOpen(true)}
									>
										<img
											src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722261400/tran-xuan-hieu/banner/toolmenu6_agkdeg.png"
											alt="logo"
											className="tw-w-8 tw-h-8 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
										/>
									</button>
								</Tooltip>
								<div className="header-button">
									<a href="/contact" className="header-btn">
										Tìm xe bạn muốn báo giá
									</a>
								</div>
								<button
									onClick={() => setOpenSidebar(!openSidebar)}
									className="my-auto header__hamburger d-xl-none tw-cursor-pointer"
								>
									<div className="sidebar__toggle">
										<i className="fas fa-bars" />
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>

			<SearchInput />

			<BaoGiaXeModal
				isModalOpen={isModalOpen}
				handleOk={() => setIsModalOpen(false)}
				handleCancel={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default HeaderSectionStart;
