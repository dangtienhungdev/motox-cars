import GiaoXeKhachHang from './giao-xe-khach-hang';

const FeedbackKhachHang = () => {
	return (
		<section className="testimonial-section fix section-padding">
			<div className="testimonial-bg-shape">
				<img
					src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721234644/tran-xuan-hieu/giao-xe/testimonial-bg_r1s71j.jpg"
					alt="shape-img"
				/>
			</div>
			<div className="container">
				<div className="section-title-area">
					<div className="section-title">
						<img
							src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231120/icon/sub-icon_qklxrk.png"
							alt="icon-img"
							className="wow fadeInUp"
						/>
						<span className="wow fadeInUp" data-wow-delay=".2s">
							Họ Nói Gì Về Ford Hà Thành
						</span>
						<h2 className="wow fadeInUp" data-wow-delay=".4s">
							Những khách hàng đã <br />
							tin tưởng chúng tôi
						</h2>
					</div>
					<p className="wow fadeInUp" data-wow-delay=".5s">
						Chúng tôi luôn cố gắng mang lại dịch vụ tốt nhất cho khách hàng,{' '}
						<br />
						Xin cảm ơn sự tin tưởng của quý khách hàng đã dành cho chúng tôi
					</p>
				</div>
				<div className="swiper testimonial-slider !tw-hidden">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="testimonial-card-items">
								<div className="testimoni-bg-shape">
									<div className="testimonial-items-top">
										<div className="icon">
											<i className="fa-solid fa-quote-left" />
										</div>
										<p>
											I was very impresed by the remons service lorem ipsum is
											simply free text used by copy typing refreshing. Neque
											porro est qui dolorem ipsum quia.
										</p>
										<div className="star">
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
										</div>
									</div>
								</div>
								<div className="gap-3 client-info-items d-flex align-items-center">
									<div
										className="bg-cover client-img"
										style={{
											backgroundImage:
												'url("assets/img/testimonial/client-1.png")',
										}}
									></div>
									<div className="content">
										<h5>Jessica Brown</h5>
										<span>Customer</span>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="testimonial-card-items">
								<div className="testimoni-bg-shape">
									<div className="testimonial-items-top">
										<div className="icon">
											<i className="fa-solid fa-quote-left" />
										</div>
										<p>
											I was very impresed by the remons service lorem ipsum is
											simply free text used by copy typing refreshing. Neque
											porro est qui dolorem ipsum quia.
										</p>
										<div className="star">
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
										</div>
									</div>
								</div>
								<div className="gap-3 client-info-items d-flex align-items-center">
									<div
										className="bg-cover client-img"
										style={{
											backgroundImage:
												'url("assets/img/testimonial/client-2.html")',
										}}
									></div>
									<div className="content">
										<h5>Kevin Martin</h5>
										<span>Customer</span>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="testimonial-card-items">
								<div className="testimoni-bg-shape">
									<div className="testimonial-items-top">
										<div className="icon">
											<i className="fa-solid fa-quote-left" />
										</div>
										<p>
											I was very impresed by the remons service lorem ipsum is
											simply free text used by copy typing refreshing. Neque
											porro est qui dolorem ipsum quia.
										</p>
										<div className="star">
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
											<i className="fa-solid fa-star" />
										</div>
									</div>
								</div>
								<div className="gap-3 client-info-items d-flex align-items-center">
									<div
										className="bg-cover client-img"
										style={{
											backgroundImage:
												'url("assets/img/testimonial/client-3.png")',
										}}
									></div>
									<div className="content">
										<h5>Jessica Brown</h5>
										<span>Customer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className="tw-flex tw-justify-center">
					<GiaoXeKhachHang />
				</section>
			</div>
		</section>
	);
};

export default FeedbackKhachHang;
