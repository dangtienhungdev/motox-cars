import { Link, useParams, useSearchParams } from 'react-router-dom';

import BannerPage from '@/components/banner';
import BaoGiaXe from '@/components/bao-gia-xe/bao-gia-xe';
import priceList from '@/data/price-list';
import { products } from '@/data/product';
import { formatCurrency } from '@/utils/format-currency';
import parse from 'html-react-parser';

const CarDetail = () => {
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
	// console.log('🚀 ~ CarDetail ~ carDetail:', carDetail);

	// lấy ra xe chi tiết dựa vào id
	const thongTinXe = products.find(
		(product) => product.id === Number(idHangXe)
	);
	console.log('🚀 ~ CarDetail ~ thongTinXe:', thongTinXe);

	// lấy ra xe chi tiết dựa vào id
	const xeCanTim = thongTinXe?.xe.find((x) => x.id === id);
	console.log('🚀 ~ CarDetail ~ xeCanTim:', xeCanTim);

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
			<BannerPage title={`Thông tin của xe ${carDetail.label}`} />

			<section className="car-details fix section-padding">
				<div className="container">
					<div className="car-details-wrapper">
						<div className="row g-5">
							<div className="col-lg-8">
								<div className="car-details-items">
									<div className="car-image">
										<img
											src={xeCanTim?.image}
											alt={xeCanTim?.title}
											className="tw-w-full"
										/>
									</div>
									<div className="car-content">
										<h3>{xeCanTim?.title}</h3>
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
										{/* <div className="price-table-area">
											<h6>
												Table Price <span>( by day of the week )</span>
											</h6>
											<div className="price-table-items section-bg">
												<p>Monday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items">
												<p>Tuesday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items section-bg">
												<p>Wednesday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items">
												<p>Thursday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items section-bg">
												<p>Friday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items">
												<p>Saturday</p>
												<p>$70.00</p>
											</div>
											<div className="price-table-items section-bg">
												<p>Sunday</p>
												<p>$70.00</p>
											</div>
										</div> */}
									</div>
								</div>
								{/* <div className="car-booking-items">
									<div className="booking-header">
										<h3>Request for Booking</h3>
										<p>
											Send your requirement to us. We will check email and
											contact you soon.
										</p>
									</div>
									<form
										action="#"
										id="contact-form"
										method="POST"
										className="contact-form-items"
									>
										<div className="row g-4">
											<div className="col-lg-6">
												<div className="form-clt">
													<label className="label-text">Your Name</label>
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Afzaal Islam"
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-clt">
													<label className="label-text">Email</label>
													<input
														type="text"
														name="email"
														id="email"
														placeholder="pixydrops@gmail.com"
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-clt">
													<label className="label-text">Phone Number</label>
													<input
														type="text"
														name="phone"
														id="phone"
														placeholder="+ 00 0000 - 000"
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-clt">
													<label className="label-text">Address</label>
													<input
														type="text"
														name="address"
														id="address"
														placeholder="Address"
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-clt">
													<label className="label-text">Pick-up Location</label>
													<div className="category-oneadjust">
														<select
															name="cate"
															className="category"
															style={{ display: 'none' }}
														>
															<option value={1}>Select Location</option>
															<option value={1}>Houston</option>
															<option value={1}>Texas</option>
															<option value={1}>New York</option>
															<option value={1}>Other Location</option>
														</select>
														<div className="nice-select category" tabIndex={0}>
															<span className="current">Select Location</span>
															<ul className="list">
																<li data-value={1} className="option selected">
																	Select Location
																</li>
																<li data-value={1} className="option">
																	Houston
																</li>
																<li data-value={1} className="option">
																	Texas
																</li>
																<li data-value={1} className="option">
																	New York
																</li>
																<li data-value={1} className="option">
																	Other Location
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-clt">
													<label className="label-text">Pick-up Date</label>
													<div
														id="datepicker3"
														className="input-group date"
														data-date-format="dd-mm-yyyy"
													>
														<input
															className="form-control"
															type="text"
															placeholder="Check in"
															readOnly
														/>
														<span className="input-group-addon">
															{' '}
															<i className="fa-solid fa-calendar-days" />
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-clt">
													<label className="label-text">Drop-off Date</label>
													<div
														id="datepicker4"
														className="input-group date"
														data-date-format="dd-mm-yyyy"
													>
														<input
															className="form-control"
															type="text"
															placeholder="Check in"
															readOnly
														/>
														<span className="input-group-addon">
															{' '}
															<i className="fa-solid fa-calendar-days" />
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-5">
												<div className="input-save-items-area">
													<div className="input-save-items">
														<div className="mb-3 input-save d-flex align-items-center">
															<input
																type="checkbox"
																className="form-check-input"
																name="save-for-next"
																id="saveForNext1"
															/>
															<label htmlFor="saveForNext1">Driver</label>
														</div>
														<div className="input-save d-flex align-items-center">
															<input
																type="checkbox"
																className="form-check-input"
																name="save-for-next"
																id="saveForNext2"
															/>
															<label htmlFor="saveForNext2">Baby Seat</label>
														</div>
													</div>
													<div className="input-save-items">
														<div className="mb-3 input-save d-flex align-items-center">
															<label>$10.00 / Day</label>
														</div>
														<div className="input-save d-flex align-items-center">
															<label>$30.00 / Total</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button className="theme-btn" type="submit">
													Send Request
												</button>
											</div>
										</div>
									</form>
								</div> */}
							</div>

							<BaoGiaXe />
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
											className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp !tw-border !tw-border-gray-300"
											data-wow-delay=".3s"
											key={item.id}
										>
											<div className="car-rentals-items">
												<div className="car-image">
													<img src={item.image} alt={item.title} />
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
														book now{' '}
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
