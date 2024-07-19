import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer-section fix">
			<div className="container">
				<div className="footer-widgets-wrapper">
					<div className="row justify-content-between">
						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".2s"
						>
							<div className="single-footer-widget shape-map">
								<div className="widget-head">
									<h4>Liên hệ với tôi</h4>
								</div>
								<div className="footer-content">
									<p>Số 2 Tôn Thất Thuyết - Hà Nội (Đối diện bến xe Mỹ Đình)</p>
									<ul className="contact-info">
										<li>
											<i className="fa-regular fa-envelope" />
											<Link to="mailto:tranxuanhieu003@gmail.com">
												tranxuanhieu003@gmail.com
											</Link>
										</li>
										<li>
											<i className="fa-solid fa-phone-volume" />
											<a href="tel:0833096605">083 3096 605</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="single-footer-widget">
								<div className="widget-head">
									<h4>Danh mục</h4>
								</div>
								<ul className="list-items">
									<li>
										<a href="/">Trang chủ</a>
									</li>
									<li>
										<a href="car-details.html">Giới thiệu</a>
									</li>
									<li>
										<a href="news-details.html">Bảng giá xe</a>
									</li>
									<li>
										<a href="gallery.html">Sản phẩm</a>
									</li>
									<li>
										<a href="contact.html">Thông tin liên hệ</a>
									</li>
								</ul>
							</div>
						</div>
						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="single-footer-widget">
								<div className="widget-head">
									<h4>Khách hàng tin tưởng chúng tôi</h4>
								</div>
								<div className="footer-gallery">
									<div className="gallery-wrap">
										<div className="gallery-item">
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233148/tran-xuan-hieu/giao-xe/z5607543067601_4160cc7aea8acc801e75e069fb0beb3c_uf3uv8.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233148/tran-xuan-hieu/giao-xe/z5607543067601_4160cc7aea8acc801e75e069fb0beb3c_uf3uv8.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233145/tran-xuan-hieu/giao-xe/z5607543019458_f0419f1f1f2030571e34be5034e4996b_ko7tlq.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233145/tran-xuan-hieu/giao-xe/z5607543019458_f0419f1f1f2030571e34be5034e4996b_ko7tlq.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233140/tran-xuan-hieu/giao-xe/z5607543199435_45eb9cd95952bab8f73a29ccd9058e6e_ta78yl.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233140/tran-xuan-hieu/giao-xe/z5607543199435_45eb9cd95952bab8f73a29ccd9058e6e_ta78yl.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
										</div>
										<div className="gallery-item">
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233139/tran-xuan-hieu/giao-xe/z5607543386110_46a2174376471cc1ca17dd0e6a89ee64_ufcn9k.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233139/tran-xuan-hieu/giao-xe/z5607543386110_46a2174376471cc1ca17dd0e6a89ee64_ufcn9k.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233140/tran-xuan-hieu/giao-xe/z5607543392783_754b92a67d0c64186dabc5e216829645_sxltwd.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233140/tran-xuan-hieu/giao-xe/z5607543392783_754b92a67d0c64186dabc5e216829645_sxltwd.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
											<div className="thumb">
												<a
													href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233135/tran-xuan-hieu/giao-xe/z5607543170985_84838613bbb945e95194cf33f7126cbb_fcva8m.jpg"
													className="img-popup"
												>
													<img
														src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721233135/tran-xuan-hieu/giao-xe/z5607543170985_84838613bbb945e95194cf33f7126cbb_fcva8m.jpg"
														alt="gallery-img"
													/>
													<div className="icon">
														<i className="far fa-plus" />
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".8s"
						>
							<div className="single-footer-widget">
								<div className="widget-head">
									<h4>Đăng ký báo giá</h4>
								</div>
								<div className="footer-content">
									<p>Đăng ký báo giá xe ngay hôm nay để nhận ưu đã</p>
									<div className="footer-input">
										<input
											type="email"
											id="email2"
											placeholder="Email address"
										/>
										<button className="newsletter-btn" type="submit">
											<i className="fa-regular fa-paper-plane" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
