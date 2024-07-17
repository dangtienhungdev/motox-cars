const QuyenLoiCuaBan = () => {
	const data = [
		{
			id: 1,
			title1: 'Dễ dàng',
			title2: 'Nhanh chóng báo giá',
			content: 'Chúng tôi sẽ báo giá cho bạn trong thời gian ngắn nhất',
			icon: 'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231545/icon/box-icon-bg1_qudxdg.png',
			bgButton:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231607/icon/bg-button-iconbox_vxu2mn.png',
			icon1:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231676/icon/icon-1_av3j8x.png',
		},
		{
			id: 2,
			title1: 'Giá cả hấp dẫn',
			title2: 'Tốt nhất thị trường',
			content: 'Chúng tôi cam kết giá cả tốt nhất thị trường',
			icon: 'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231743/icon/box-icon-bg2_yjiibj.png',
			bgButton:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231607/icon/bg-button-iconbox_vxu2mn.png',
			icon1:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231784/icon/icon-2_dfxegb.png',
		},
		{
			id: 3,
			title1: 'Khách hàng',
			title2: '100% hài lòng',
			content: 'Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu',
			icon: 'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231854/icon/box-icon-bg3_yayqyx.png',
			bgButton:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231607/icon/bg-button-iconbox_vxu2mn.png',
			icon1:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231889/icon/icon-3_nb0tnc.png',
		},
	];
	return (
		<section className="feature-benefit section section-padding fix">
			<div className="container">
				<div className="text-center section-title">
					<img
						src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231120/icon/sub-icon_qklxrk.png"
						alt="icon-img"
						className="wow fadeInUp"
					/>
					<span className="wow fadeInUp" data-wow-delay=".2s">
						Lợi ích của bạn
					</span>
					<h2 className="wow fadeInUp" data-wow-delay=".4s">
						Tại sao bạn nên báo giá tại <br />
						Ford Hà Thành
					</h2>
				</div>
				<div className="row">
					{data.map((item) => {
						return (
							<div
								key={item.id}
								className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="feature-benefit-items">
									<div className="icon-box-shape">
										<img src={item.icon} alt="shape-img" />
									</div>
									<div className="bg-button-shape">
										<img src={item.bgButton} alt="shape-img" />
									</div>
									<div className="feature-content">
										<h4>
											<a href="car-details.html">{item.title1}</a>
											<br />
											<a href="car-details.html">{item.title2}</a>
										</h4>
										<p>{item.content}</p>
										<div className="icon">
											<img src={item.icon1} alt="icon-img" />
										</div>
									</div>
									<div className="feature-button">
										<a href="car-details.html" className="link-btn">
											Xem thêm <i className="fa-solid fa-arrow-right ps-1" />
										</a>
									</div>
								</div>
							</div>
						);
					})}

					{/* <div
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<div className="feature-benefit-items">
							<div className="icon-box-shape">
								<img
									src="assets/img/feature-benefit/box-icon-bg2.png"
									alt="shape-img"
								/>
							</div>
							<div className="bg-button-shape">
								<img
									src="assets/img/feature-benefit/bg-button-iconbox.png"
									alt="shape-img"
								/>
							</div>
							<div className="feature-content">
								<h4>
									<a href="car-details.html">
										Too Many <br />
										Pickup Locations
									</a>
								</h4>
								<p>
									Neque porro quisquam est, qui fre dolorem ipsum quia dolor.
								</p>
								<div className="icon">
									<img
										src="assets/img/feature-benefit/icon-2.png"
										alt="icon-img"
									/>
								</div>
							</div>
							<div className="feature-button">
								<a href="car-details.html" className="link-btn">
									View More <i className="fa-solid fa-arrow-right ps-1" />
								</a>
							</div>
						</div>
					</div>
					<div
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<div className="feature-benefit-items">
							<div className="icon-box-shape">
								<img
									src="assets/img/feature-benefit/box-icon-bg3.png"
									alt="shape-img"
								/>
							</div>
							<div className="bg-button-shape">
								<img
									src="assets/img/feature-benefit/bg-button-iconbox.png"
									alt="shape-img"
								/>
							</div>
							<div className="feature-content">
								<h4>
									<a href="car-details.html">
										Customers <br />
										100% Satisfied
									</a>
								</h4>
								<p>
									Neque porro quisquam est, qui fre dolorem ipsum quia dolor.
								</p>
								<div className="icon">
									<img
										src="assets/img/feature-benefit/icon-3.png"
										alt="icon-img"
									/>
								</div>
							</div>
							<div className="feature-button">
								<a href="car-details.html" className="link-btn">
									View More <i className="fa-solid fa-arrow-right ps-1" />
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default QuyenLoiCuaBan;
