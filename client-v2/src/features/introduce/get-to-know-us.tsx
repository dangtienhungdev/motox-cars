import { Link } from 'react-router-dom';

const GetToKnowUs = () => {
	return (
		<section className="about-section fix section-padding">
			<div className="container">
				<div className="about-wrapper-2">
					<div className="row g-4">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
							<div className="about-image">
								<img
									src="https://www.hathanhford.com.vn/wp-content/uploads/IMG_8555-768x426.jpg"
									alt="about-image"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-content">
								<div className="section-title">
									<img
										src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231120/icon/sub-icon_qklxrk.png"
										alt="icon-img"
										className="wow fadeInUp"
									/>
									<span className="wow fadeInUp" data-wow-delay=".2s">
										Tầm nhìn &amp; Sứ mệnh
									</span>
									<h2 className="wow fadeInUp" data-wow-delay=".4s">
										Uy tín - Chất lượng - Dịch vụ
									</h2>
								</div>
								<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".6s">
									Hà Thành Ford là cam kết cung cấp những sản phẩm ô tô chính
									hãng. Dịch vụ bảo hành sửa chữa hoàn hảo với đội ngũ cán bộ
									nhân viên lành nghề, tận tâm, chuyên nghiệp luôn sẵn sàng phục
									vụ khách hàng.
								</p>
								<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".6s">
									Phương châm vàng trong mọi hoạt động của Hà Thành Ford là
								</p>
								<div className="about-list-wrapper">
									<div
										className="about-list-items wow fadeInUp"
										data-wow-delay=".3s"
									>
										<ul>
											<li>
												<i className="fa-solid fa-arrow-right" />
												Trung thực
											</li>
											<li>
												<i className="fa-solid fa-arrow-right" />
												Tôn trọng
											</li>
											<li>
												<i className="fa-solid fa-arrow-right" />
												Tin cậy
											</li>
											<li>
												<i className="fa-solid fa-arrow-right" />
												Học hỏi
											</li>
											<li>
												<i className="fa-solid fa-arrow-right" />
												Truyền cảm hứng
											</li>
										</ul>
										<Link to="/me" className="theme-btn">
											Đăng ký báo giá
											<i className="fa-solid fa-arrow-right-long" />
										</Link>
									</div>
									<div
										className="author-items wow fadeInUp"
										data-wow-delay=".5s"
									>
										<Link to="tel:0833096605">
											<div className="icon">
												<i className="fa-solid fa-phone" />
											</div>
										</Link>
										<p>Liên hệ với chúng tôi qua</p>
										<h6>
											<Link to="tel:0833096605">083 3096 605</Link>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetToKnowUs;
