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
															<Link to="gallery.html">Xe Ford</Link>
														</li>
														<li>
															<Link to="faq.html">Xe Ford</Link>
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
															<Link to="car-grid.html">Ford 1</Link>
														</li>
														<li>
															<Link to="car-list.html">Ford 1</Link>
														</li>
														<li>
															<Link to="car-list-sidebar.html">Ford 1</Link>
														</li>
														<li>
															<Link to="car-details.html">Ford 1</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="contact.html">Liên hệ</Link>
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
									<i className="fa fa-search" aria-hidden="true" />
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
