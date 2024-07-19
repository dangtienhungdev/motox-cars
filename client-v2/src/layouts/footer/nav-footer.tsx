import { Link } from 'react-router-dom';

const NavFooter = () => {
	return (
		<section className="cta-cheap-rental-section">
			<div className="container">
				<div className="cta-cheap-rental">
					<div
						className="cta-cheap-rental-left wow fadeInUp"
						data-wow-delay="
              .3s"
					>
						<div className="logo-thumb">
							<Link to="/">
								<img
									src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721235457/tran-xuan-hieu/giao-xe/ford-logo-white_e08nfc.svg"
									alt="logo-img"
								/>
							</Link>
						</div>
						<h4 className="text-white">
							Đăng ký báo giá xe ngay hôm nay để nhận ưu đãi lớn
						</h4>
					</div>
					<div
						className="social-icon d-flex align-items-center wow fadeInUp"
						data-wow-delay="
              .5s"
					>
						<Link
							to="https://www.facebook.com/profile.php?id=100077172526094"
							target="_blank"
						>
							<i className="fab fa-facebook-f" />
						</Link>
						{/* <Link to="#">
							<i className="fab fa-twitter" />
						</Link>
						<Link to="#">
							<i className="fa-brands fa-linkedin-in" />
						</Link>
						<Link to="#">
							<i className="fa-brands fa-youtube" />
						</Link> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavFooter;
