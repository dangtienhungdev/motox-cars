import { Link } from 'react-router-dom';

type BannerPageProps = {
	title: string;
};

const BannerPage = ({ title }: BannerPageProps) => {
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
					<ul
						className="breadcrumb-items wow fadeInUp md:!tw-flex !tw-hidden"
						data-wow-delay=".3s"
					>
						<li>
							<Link to="/" className="">
								Trang chủ
							</Link>
						</li>
						<li>
							<i className="fas fa-chevron-right" />
						</li>
						<li>{title}</li>
					</ul>
					<h1
						className="wow fadeInUp md:text !tw-text-lg md:tw-text-[50px] tw-leading-[112%]"
						data-wow-delay=".5s"
					>
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default BannerPage;
