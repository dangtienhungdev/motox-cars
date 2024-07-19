import { Link } from 'react-router-dom';

const BannerPage = () => {
	return (
		<div
			className="bg-cover breadcrumb-wrapper"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721237829/tran-xuan-hieu/banner/bg-header-banner_zyixpj.jpg")',
			}}
		>
			<div className="container">
				<div className="page-heading">
					<ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
						<li>
							<Link to="/">Trang chủ</Link>
						</li>
						<li>
							<i className="fas fa-chevron-right" />
						</li>
						<li>Giới thiệu</li>
					</ul>
					<h1 className="wow fadeInUp" data-wow-delay=".5s">
						Giới thiệu
					</h1>
				</div>
			</div>
		</div>
	);
};

export default BannerPage;
