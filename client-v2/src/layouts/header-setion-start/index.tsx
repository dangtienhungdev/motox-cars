import { Link } from 'react-router-dom';
import SearchInput from '../search-input';

const HeaderSectionStart = () => {
	return (
		<>
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
												<li className="has-dropdown active menu-thumb">
													<Link to="/">Trang chủ</Link>
												</li>
												<li>
													<Link to="/introduce">Giới thiệu</Link>
												</li>
												<li className="has-dropdown">
													<Link to="/">
														Bảng giá xe
														<i className="fas fa-angle-down" />
													</Link>
													<ul className="submenu">
														<li>
															<Link to="gallery.html">Gallery</Link>
														</li>
														<li>
															<Link to="faq.html">Faq's</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="program-details.html">
														Sản phẩm
														<i className="fas fa-angle-down" />
													</Link>
													<ul className="submenu">
														<li>
															<a href="car-grid.html">Car Grid</a>
														</li>
														<li>
															<a href="car-list.html">Car List</a>
														</li>
														<li>
															<a href="car-list-sidebar.html">Car Sidebar</a>
														</li>
														<li>
															<a href="car-details.html">Car Details</a>
														</li>
													</ul>
												</li>
												<li>
													<a href="contact.html">Liên hệ</a>
												</li>
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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
										/>
									</svg>
								</button>
								<div className="header-button">
									<a href="car-details.html" className="header-btn">
										Tìm xe bạn muốn báo giá
									</a>
								</div>
								<div className="my-auto header__hamburger d-xl-none">
									<div className="sidebar__toggle">
										<i className="fas fa-bars" />
									</div>
								</div>
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
