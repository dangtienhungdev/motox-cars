import { Link } from 'react-router-dom';

const CacDongXe = () => {
	const data = [
		{
			id: 5,
			title: 'Ford Everest',
			slug: 'ford-everest',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-everest-2022-mau-cam-icon-fordlongbien_com_tpiye8.jpg',
		},
		{
			id: 1,
			title: 'Ford Ranger',
			slug: 'ford-ranger',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-wildtrak-mau-vang-luxe-icon2-fordlongbien_com_l40h2a.jpg',
		},
		{
			id: 2,
			title: 'Ford Ranger Raptor',
			slug: 'ford-ranger-raptor',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-raptor-2023-mau-do-icon-fordlongbien_com_uuafxd.jpg',
		},
		{
			id: 6,
			title: 'Ford Explorer',
			slug: 'ford-explorer',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-explorer-2022-icon-mau-do-fordlongbien_com-300x200_ghtqzg.jpg',
		},
		{
			id: 4,
			title: 'Ford Territory',
			slug: 'ford-territory',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-territory-2023-icon-fordlongbien_com_cynra9.jpg',
		},

		{
			id: 7,
			title: 'Ford Transit',
			slug: 'ford-transit',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-transit-fordlongbien_com-icon-1_e5lfxu.jpg',
		},
	];
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
					{data.map((item) => {
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
