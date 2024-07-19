import BackToTopStart from '../components/back-to-top-start';
import PreloaderStart from '../components/preloader-start';
import CacDongXe from '../features/home/components/cac-dong-xe';
import FeedbackKhachHang from '../features/home/components/feedback-khach-hang';
import HeroSectionStart from '../features/home/components/hero-sectiontion-start';
import NhanBaoGiaXe from '../features/home/components/nhan-bao-gia';
import QuyenLoiCuaBan from '../features/home/components/quyen-loi-cua-ban';

const HomePage = () => {
	return (
		<div>
			{/* preloader */}
			<PreloaderStart />
			{/* back to top */}
			<BackToTopStart />

			{/* hero section start */}
			<HeroSectionStart />

			{/* nhan bao gia xe */}
			<NhanBaoGiaXe />

			{/* lợi ích của bạn */}
			<QuyenLoiCuaBan />

			{/* các dòng xe của bạn */}
			<CacDongXe />

			{/* khach hang tin tuong */}
			<FeedbackKhachHang />

			{/* giao xe cho khach hang */}
			{/* <GiaoXeKhachHang /> */}
		</div>
	);
};

export default HomePage;
