import BackToTopStart from '../components/back-to-top-start';
import PreloaderStart from '../components/preloader-start';
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
		</div>
	);
};

export default HomePage;
