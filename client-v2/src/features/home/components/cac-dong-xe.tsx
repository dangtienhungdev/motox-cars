import { cacDongXe } from '@/data/cac-dong-xe';
import { Link } from 'react-router-dom';

const CacDongXe = () => {
	return (
		<section className="popular-car-section fix section-padding">
			<div className="container">
				<div className="text-center section-title">
					<img
						src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231120/icon/sub-icon_qklxrk.png"
						alt="icon-img"
						className="wow fadeInUp"
					/>
					<span className="wow fadeInUp" data-wow-delay=".2s">
						Các dòng xe
					</span>
					<h2 className="wow fadeInUp" data-wow-delay=".4s">
						Đa dạng dòng xe cho bạn lựa chọn
					</h2>
				</div>
				<div className="row g-4 mt-30">
					{cacDongXe.map((item) => {
						return (
							<div
								className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
								data-wow-delay=".3s"
								key={item.id}
							>
								<div className="popular-card-items">
									<div className="content">
										<h4>
											<Link to={`/cars?id=${item.id}`}>{item.title}</Link>
										</h4>
										{/* <p>Available for Rent</p> */}
									</div>
									<div className="car-image">
										<img src={item.image} alt="img" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{/* <div className="popular-car-text wow fadeInUp" data-wow-delay=".4s">
					<h6>Car rental services specifically for our customers.</h6>
					<a href="car-details.html" className="theme-btn">
						Find a car
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default CacDongXe;
