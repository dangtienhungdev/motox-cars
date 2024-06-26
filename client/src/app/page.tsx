'use client';

import { Carousel, Modal } from 'antd';
import { useEffect, useState } from 'react';

import Content from '@/components/bao-gia/content';
import DongXe from '@/components/dong-xe';
import baoGiaXeData from '@/data/bao-gia-xe';
import { FieldType } from '@/types/data.type';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';

export default function Home() {
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
		showModal();

		return () => setIsModalOpen(false);
	}, []);

	return (
		<section className="relative w-full">
			<Carousel autoplay autoplaySpeed={3000}>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/anh-bia-ranger-2022_pivjwc.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/anh-bia-everest-2022_u3kdhy.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/anh-bia-explorer-2022_znrrw7.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/anh-bia-transit-2022_jdheck.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/anh-bia-raptor-2022_n3uzps.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-territory-2023-fordlongbien_com-35_iw978e.jpg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
			</Carousel>
			<section className="xl:p-px80 lg:p-10 md:p-6 p-4 overflow-hidden">
				<section className="text-center flex justify-center flex-col gap-3 items-center">
					<h2 className="text-base text-primary font-semibold w-fit text-center py-1 border-b-2 border-primary/100">
						Các mẫu xe tại Ford Hà Thành
					</h2>
					<p className="md:text-2xl text-lg font-semibold tracking-wide">
						LỰA CHỌN DÒNG XE FORD PHÙ HỢP VỚI BẠN
					</p>
				</section>

				<DongXe />
			</section>

			<Modal
				title="ĐĂNG KÝ NHẬN BÁO GIÁ"
				open={isModalOpen}
				onOk={handleOk}
				width={800}
				className="w-full max-w-[800px]"
				onCancel={handleCancel}
				footer={[
					<label
						key={'ahihi'}
						htmlFor="submit-form"
						className="bg-primary text-white !py-2 px-5 rounded-lg cursor-pointer h-[50px] min-w-[180px] flex items-center justify-center"
					>
						{isLoading ? (
							<section className="animate-spin border-t-2 border-t-primary h-5 w-5 border-2 border-white rounded-full"></section>
						) : (
							baoGiaXeData.sendButton
						)}
					</label>,
				]}
			>
				<p className="">{parse(baoGiaXeData.desc)}</p>

				<Content form={form} setIsLoading={setIsLoading} />
			</Modal>
		</section>
	);
}
