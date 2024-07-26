import { Link } from 'react-router-dom';

const HeaderTopSelectionStart = () => {
	return (
		<>
			{/* responsive */}

			<div className="header-top-section">
				<div className="container-fluid">
					<div className="header-top-wrapper">
						<ul className="contact-list">
							<li>
								<i className="fas fa-envelope" />
								<Link to="mailto:tranxuanhieu003@gmail.com" className="link">
									tranxuanhieu003@gmail.com
								</Link>
							</li>
							<li>
								<i className="fas fa-map-marker-alt" />
								Số 2 Tôn Thất Thuyết - Hà Nội (Đối diện bến xe Mỹ Đình)
							</li>
						</ul>
						<div className="header-top-right">
							<div className="social-icon d-flex align-items-center">
								<Link
									to="https://www.facebook.com/profile.php?id=100077172526094"
									target="_blank"
								>
									<i className="fa-brands fa-facebook" />
								</Link>
								{/* <Link to="#">
									<i className="fa-brands fa-facebook" />
								</Link>
								<Link to="#">
									<i className="fa-brands fa-pinterest-p" />
								</Link>
								<Link to="#">
									<i className="fa-brands fa-instagram" />
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderTopSelectionStart;
