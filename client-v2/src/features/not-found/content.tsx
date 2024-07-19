import Button from './btn';

const Content404 = () => {
	return (
		<div className="display">
			<div className="display__img">
				<img
					src={
						'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721238885/tran-xuan-hieu/banner/download_c1w6ox.png'
					}
					alt="404-Scarecrow"
				/>
			</div>
			<div className="display__content">
				<h2 className="display__content--info">404</h2>
				<p className="display__content--text">
					Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa khỏi hệ thống của
					chúng tôi
				</p>
				<Button />
			</div>
		</div>
	);
};

export default Content404;
