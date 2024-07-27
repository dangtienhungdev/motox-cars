import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

interface MHeaderSelectionStartProps {
	open: boolean;
	setOpenSidebar: (open: boolean) => void;
}

const MHeaderSelectionStart = ({
	open,
	setOpenSidebar,
}: MHeaderSelectionStartProps) => {
	return (
		<div>
			<div className="fix-area">
				<div className={cn('offcanvas__info', { 'info-open': open })}>
					<div className="offcanvas__wrapper">
						<div className="offcanvas__content">
							<div className="mb-5 offcanvas__top d-flex justify-content-between align-items-center">
								<div className="offcanvas__logo">
									<a href="index.html">
										<img
											src="https://www.ford.com.vn/etc.clientlibs/dxdfoap/clientlibs/cmp-scripts/clientlib-site/resources/images/ford-logo.svg"
											alt="logo-img"
										/>
									</a>
								</div>
								<div
									className="offcanvas__close"
									onClick={() => setOpenSidebar(false)}
								>
									<button>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
							<p className="text d-none d-xl-block">
								Cảm ơn bạn đã ghé thăm trang web của chúng tôi. Nếu bạn cần thêm
								thông tin, hãy liên hệ với chúng tôi qua số điện thoại hoặc
								email dưới đây.
							</p>
							<div className="mb-3 mobile-menu fix mean-container">
								<div className="mean-bar">
									<Link
										to="#nav"
										className="meanmenu-reveal"
										style={{ right: 0, left: 'auto', display: 'inline' }}
									>
										<span>
											<span>
												<span />
											</span>
										</span>
									</Link>
									<nav className="mean-nav">
										<ul style={{ display: 'none' }}>
											{[
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
													link: '/',
												},
												{
													id: 5,
													title: 'Liên hệ',
													link: '/contact',
												},
											].map((item) => {
												return (
													<li
														className="!tw-bg-[#f3f7fb]"
														key={item.id}
														onClick={() => setOpenSidebar(false)}
													>
														<Link className="!tw-text-black" to={item.link}>
															{item.title}
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
								</div>
							</div>

							<div className="offcanvas__contact">
								<h4>Thông tin liên lạc</h4>
								<ul>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon">
											<i className="fal fa-map-marker-alt" />
										</div>
										<div className="offcanvas__contact-text">
											<p>Số 2 Tôn Thất Thuyết - Hà Nội</p>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-envelope" />
										</div>
										<div className="offcanvas__contact-text">
											<Link to="mailto:tranxuanhieu003@gmail.com">
												<span className="mailto:tranxuanhieu003@gmail.com">
													tranxuanhieu003@gmail.com
												</span>
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-clock" />
										</div>
										<div className="offcanvas__contact-text">
											<Link to={'#'}>Thứ 2 - Thứ 6: 8:00 - 17:00</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="far fa-phone" />
										</div>
										<div className="offcanvas__contact-text">
											<Link to="tel:0833096605">083 3096 605</Link>
										</div>
									</li>
								</ul>
								<div className="mt-4 header-button">
									<Link to="/me" className="text-center theme-btn">
										<span>
											Đăng ký báo giá
											<i className="fa-solid fa-arrow-right-long" />
										</span>
									</Link>
								</div>
								<div className="social-icon d-flex align-items-center">
									<Link
										to="https://www.facebook.com/profile.php?id=100077172526094"
										target="_blank"
									>
										<i className="fab fa-facebook-f" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={cn('offcanvas__overlay', { 'info-open': open })} />
		</div>
	);
};

export default MHeaderSelectionStart;
