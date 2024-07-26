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
			// icon: <i className="fas fa-angle-down" />,
			// children: [
			// 	{
			// 		id: 3.1,
			// 		title: 'Ford Everest',
			// 		link: '/ford-everest',
			// 	},
			// 	{
			// 		id: 3.2,
			// 		title: 'Ford Ranger',
			// 		link: '/ford-ranger',
			// 	},
			// 	{
			// 		id: 3.3,
			// 		title: 'Ford Ranger Raptor',
			// 		link: '/ford-ranger-raptor',
			// 	},
			// 	{
			// 		id: 3.4,
			// 		title: 'Ford Explorer',
			// 		link: '/ford-explorer',
			// 	},
			// 	{
			// 		id: 3.5,
			// 		title: 'Ford Territory',
			// 		link: '/ford-territory',
			// 	},
			// 	{
			// 		id: 3.6,
			// 		title: 'Ford Transit',
			// 		link: '/ford-transit',
			// 	},
			// ],
		},
		{
			id: 4,
			title: 'Sản phẩm',
			link: '/ford-everest',
			icon: <i className="fas fa-angle-down" />,
			children: [
				{
					id: 4.1,
					title: 'Ford Everest',
					link: '/ford-everest',
				},
				{
					id: 4.2,
					title: 'Ford Ranger',
					link: '/ford-ranger',
				},
				{
					id: 4.3,
					title: 'Ford Ranger Raptor',
					link: '/ford-ranger-raptor',
				},
				{
					id: 4.4,
					title: 'Ford Explorer',
					link: '/ford-explorer',
				},
				{
					id: 4.5,
					title: 'Ford Territory',
					link: '/ford-territory',
				},
				{
					id: 4.6,
					title: 'Ford Transit',
					link: '/ford-transit',
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

	return (
		<>
			<MHeaderSelectionStart open={openSidebar} />

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
							<div className="header-right d-flex justify-content-end align-items-center">
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
								<button className="search-trigger search-icon">
									<i className="fa fa-search" aria-hidden="true" />
								</button>
								<div className="header-button">
									<a href="car-details.html" className="header-btn">
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
		</>
	);
};

export default HeaderSectionStart;
