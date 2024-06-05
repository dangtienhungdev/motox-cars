'use client';

import { Carousel, Modal } from 'antd';
import { useEffect, useState } from 'react';

import Content from '@/components/bao-gia/content';
import DongXe from '@/components/dong-xe';
import baoGiaXeData from '@/data/bao-gia-xe';
import parse from 'html-react-parser';

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
				<section className="bg-[url('https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://picsum.photos/536/354')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
				<section className="bg-[url('https://picsum.photos/536/354')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
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

				<Content setIsLoading={setIsLoading} />
			</Modal>
		</section>
	);
}
