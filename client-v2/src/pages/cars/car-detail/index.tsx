import { Link, useParams, useSearchParams } from 'react-router-dom';

import BannerPage from '@/components/banner';
import Content from '@/components/modal-bao-gia';
import baoGiaXeData from '@/data/bao-gia-xe';
import priceList from '@/data/price-list';
import { products } from '@/data/product';
import { FieldType } from '@/types/data.type';
import { TMoTaXe } from '@/types/price-list';
import { formatCurrency } from '@/utils/format-currency';
import { Image, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import CacMauSac from './components/cac-mau-sac';
import MucTieuThuNhienLieu from './components/muc-tieu-thu-nhien-lieu';

const CarDetail = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [form] = useForm<FieldType>();

	const tabs = priceList.fords;

	// lấy id từ url
	const { id } = useParams();
	// lấy ra params từ url
	const [params] = useSearchParams();

	// lấy dữ liệu từ params
	const ford = params.get('ford');
	const idHangXe = params.get('id');

	// lấy dữ liệu từ tabs
	const carDetail = tabs.find((tab) => tab.id === Number(idHangXe));

	// lấy ra xe chi tiết dựa vào id
	const thongTinXe = products.find(
		(product) => product.id === Number(idHangXe)
	);

	// lấy ra xe chi tiết dựa vào id
	const xeCanTim: any = thongTinXe?.xe.find((x) => x.id === id);

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

	if (!id || !carDetail || !idHangXe || !ford || !xeCanTim) {
		return (
			<div>
				<BannerPage title={`Thông tin của xe`} />

				<div className="tw-w-full tw-h-full tw-px-4 tw-py-6 xl:tw-px-px80 lg:tw-px-10 md:tw-px-6">
					<p className="tw-text-center">Đang cập nhật dữ liệu...</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<BannerPage title={`Thông tin của xe ${xeCanTim.title}`} />

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
							<section className="tw-w-5 tw-flex tw-items-center tw-justify-center tw-h-5 tw-border-2 tw-border-t-2 !tw-border-white tw-rounded-full tw-border-t-primary">
								Loading...
							</section>
						) : (
							baoGiaXeData.sendButton
						)}
					</label>,
				]}
			>
				<p className="">{parse(baoGiaXeData.desc)}</p>

				<Content form={form} setIsLoading={setIsLoading} />
			</Modal>

			<section className="car-details fix section-padding">
				<div className="container">
					<div className="car-details-wrapper">
						<div className="row g-5">
							<div className="col-lg-12">
								<div className="car-details-items">
									<div className="car-image">
										<img
											src={xeCanTim?.image}
											alt={xeCanTim?.title}
											className="tw-w-full"
										/>
									</div>
									<div className="car-content !tw-p-2 md:!tw-p-7">
										<h3 className="!tw-text-xl md:tw-text-[26px]">
											{xeCanTim?.title}
										</h3>
										<h6>
											<span>Giá chỉ từ</span>{' '}
											{formatCurrency(Number(xeCanTim?.price))}
										</h6>
										<p className="mt-4 mb-4">{thongTinXe?.titleTraGop}</p>
										{thongTinXe?.desc && (
											<p className="">{parse(thongTinXe?.desc)}</p>
										)}
										{thongTinXe &&
											thongTinXe?.gioithieu &&
											thongTinXe.gioithieu.video && (
												<div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-py-4">
													{thongTinXe.gioithieu.video}
												</div>
											)}

										{(xeCanTim as any)?.moTaXe && (
											<section className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 md:tw-gap-10">
												{xeCanTim.moTaXe.map((itemXe: TMoTaXe) => (
													<div
														className="tw-flex tw-gap-3 tw-w-full tw-flex-col"
														key={itemXe.id}
													>
														<Image
															src={itemXe.image}
															alt={itemXe.title}
															className="tw-w-full"
														/>
														<h5 className="tw-font-semibold tw-text-primary tw-text-lg">
															{itemXe.title}
														</h5>
														<p className="">{itemXe.desc}</p>
													</div>
												))}
											</section>
										)}

										{xeCanTim?.tieuThuNhienLieu && (
											<MucTieuThuNhienLieu
												title={xeCanTim.title}
												data={xeCanTim.tieuThuNhienLieu}
											/>
										)}
									</div>
								</div>

								{xeCanTim?.mauSac && (
									<CacMauSac title={xeCanTim.title} mauSac={xeCanTim?.mauSac} />
								)}
							</div>
							{/* <BaoGiaXe /> */}
						</div>
					</div>
				</div>
			</section>

			{thongTinXe && thongTinXe.xe.filter((x) => x.id !== id).length > 0 && (
				<section className="pt-0 car-rentals-section-2 section-padding fix">
					<div className="container">
						<div className="text-center section-title">
							<img
								src={
									'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721231120/icon/sub-icon_qklxrk.png'
								}
								alt="icon-img"
								className="wow fadeInUp"
							/>
							<span className="wow fadeInUp" data-wow-delay=".2s">
								Các dòng xe khác của {carDetail.label}
							</span>
							<h2 className="wow fadeInUp" data-wow-delay=".4s">
								Các dòng xe tương tự
							</h2>
						</div>
						<div className="row">
							{thongTinXe &&
								thongTinXe.xe.length > 0 &&
								thongTinXe.xe
									.filter((x) => x.id !== id)
									.map((item) => (
										<div
											className="col-xl-4 tw-overflow-hidden col-lg-6 col-md-6 wow fadeInUp !tw-border !tw-border-gray-300"
											data-wow-delay=".3s"
											key={item.id}
										>
											<div className="car-rentals-items tw-overflow-hidden">
												<div className="car-image !tw-overflow-hidden">
													<img
														src={item.image}
														alt={item.title}
														className="!tw-h-[250px] tw-object-cover tw-rounded-t-md"
													/>
												</div>
												<div className="car-content">
													<div className="post-cat">2024 Model</div>

													<h4>
														<Link
															to={`/car/${item.id}?id=${idHangXe}&ford=${ford}`}
															className="tw-truncate"
														>
															{item.title}
														</Link>
													</h4>
													<h6>
														<span>Giá chỉ từ</span>{' '}
														{formatCurrency(Number(item.price))}
													</h6>

													<Link
														to={`/car/${item.id}?id=${idHangXe}&ford=${ford}`}
														className="text-center tw-mt-5 !tw-bg-[#015CB5] !tw-text-white theme-btn bg-color w-100"
													>
														Xem chi tiết{' '}
														<i className="fa-solid fa-arrow-right ps-1" />
													</Link>
												</div>
											</div>
										</div>
									))}
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default CarDetail;
