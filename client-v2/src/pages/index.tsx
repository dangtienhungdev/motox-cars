import { useEffect, useState } from 'react';

import Content from '@/components/modal-bao-gia';
import baoGiaXeData from '@/data/bao-gia-xe';
import { FieldType } from '@/types/data.type';
import { Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';
import BackToTopStart from '../components/back-to-top-start';
import CacDongXe from '../features/home/components/cac-dong-xe';
import FeedbackKhachHang from '../features/home/components/feedback-khach-hang';
import HeroSectionStart from '../features/home/components/hero-sectiontion-start';
import NhanBaoGiaXe from '../features/home/components/nhan-bao-gia';
import QuyenLoiCuaBan from '../features/home/components/quyen-loi-cua-ban';

const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [form] = useForm<FieldType>();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		// showModal();
		// tôi muốn sau 3s mới hiện modal và chỉ hiện 1 lần duy nhất
		setTimeout(() => {
			showModal();
		}, 3000);

		return () => setIsModalOpen(false);
	}, []);
	return (
		<div>
			{/* preloader */}
			{/* <PreloaderStart /> */}
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

			<Modal
				title="ĐĂNG KÝ NHẬN BÁO GIÁ"
				open={isModalOpen}
				onOk={handleOk}
				width={800}
				className="tw-w-full tw-max-w-[800px]"
				onCancel={handleCancel}
				footer={[
					<label
						key={'ahihi'}
						htmlFor="submit-form"
						className="tw-bg-primary tw-text-white !tw-py-2 tw-px-5 tw-rounded-lg tw-cursor-pointer tw-h-[50px] tw-min-w-[180px] tw-flex tw-items-center tw-justify-center"
					>
						{isLoading ? (
							<section className="tw-w-5 tw-h-5 tw-border-2 tw-border-t-2 tw-border-white tw-rounded-full tw-animate-spin tw-border-t-primary"></section>
						) : (
							baoGiaXeData.sendButton
						)}
					</label>,
				]}
			>
				<p className="">{parse(baoGiaXeData.desc)}</p>

				<Content form={form} setIsLoading={setIsLoading} />
			</Modal>
		</div>
	);
};

export default HomePage;
