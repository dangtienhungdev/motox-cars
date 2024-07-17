const HeroSectionStart = () => {
	return (
		<section className="hero-section hero-1 fix">
			<div className="array-button">
				<button className="image-array-left">
					<i className="fa-solid fa-chevron-left" />
				</button>
				<button className="image-array-right">
					<i className="fa-solid fa-chevron-right" />
				</button>
			</div>
			<div className="swiper hero-slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div
							className="bg-cover hero-image"
							style={{
								backgroundImage:
									'url("https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717922240/tran-xuan-hieu/banner-ford-ranger-next-gen_lyisup.jpg")',
							}}
						>
							<div className="overlay-shape">
								<img
									src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721229300/tran-xuan-hieu/banner/overlay_xjqkpw.png"
									alt="img"
								/>
							</div>
						</div>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-12">
									<div className="text-center hero-content">
										<h4
											className="text-white"
											data-animation="fadeInUp"
											data-delay="1.3s"
										>
											Đặt nhận báo giá xe ngay hôm nay
										</h4>
										<h1
											className="text-white"
											data-animation="fadeInUp"
											data-delay="1.3s"
										>
											Xe <span>Ford</span>
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div
							className="bg-cover hero-image"
							style={{
								backgroundImage:
									'url("https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721229104/tran-xuan-hieu/banner/banner-3-2233431j29483_wgxvfy.webp")',
							}}
						>
							<div className="overlay-shape">
								<img
									src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721229300/tran-xuan-hieu/banner/overlay_xjqkpw.png"
									alt="img"
								/>
							</div>
						</div>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-12">
									<div className="text-center hero-content">
										<h4
											className="text-white"
											data-animation="fadeInUp"
											data-delay="1.3s"
										>
											Đặt nhận báo giá xe ngay hôm nay
										</h4>
										<h1
											className="text-white"
											data-animation="fadeInUp"
											data-delay="1.3s"
										>
											Xe <span>Ford</span>
										</h1>
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

export default HeroSectionStart;
