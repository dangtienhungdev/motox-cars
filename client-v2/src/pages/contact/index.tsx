import BannerPage from '@/components/banner';
import { cacDongXe } from '@/data/cac-dong-xe';
import { Link } from 'react-router-dom';

const ContactPage = () => {
	return (
		<div>
			<BannerPage title="Liên hệ" />

			<section className="news-details-section fix section-padding">
				<div className="container">
					<div className="news-details-wrapper">
						<div className="row g-5">
							<div className="col-lg-8">
								<div className="news-details-items">
									<div className="news-image">
										<img
											src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1722052465/tran-xuan-hieu/438240952_1925112034592176_1395851832589699881_n.jpg_eahvdh.jpg"
											alt="news-img"
										/>
									</div>
									<div className="news-details-content">
										<ul className="list-admin">
											<li>
												<i className="fa-solid fa-circle-user" />
												Trần Xuân Hiếu
											</li>
											<li>/</li>
											<li>
												<i className="fa-solid fa-comments" />
												083 3096 605
											</li>
										</ul>
										<h3 className="!tw-text-xl">
											Trần Xuân Hiếu - Ford Hà Thành - Hotline (24/7): 083 3096
											605
										</h3>
										<section className="flex flex-col w-full gap-2 tw-mt-5">
											<p className="">
												Chúng tôi không chỉ bán sản phẩm - Chúng tôi còn trách
												nhiệm với sản phẩm!
											</p>
											<p className="">
												Cam kết khi mua xe tại Ford Hà Thành - Hotline (24/7) :
												<span className="font-medium text-primary">
													083 3096 605
												</span>
											</p>
											<p className="">
												Với đội ngũ nhiều năm kinh nghiệm bán xe, tin rằng sẽ
												giúp anh chị lựa chọn được chiếc xe ưng ý nhất cho bản
												thân và gia đình. Ngoài việc tư vấn, còn hỗ trợ anh chị:
											</p>
											<ul className="list-disc pl-7">
												<li>
													<span className="font-medium text-primary-l10">
														Báo giá
													</span>{' '}
													xe tốt nhất | Nhiều{' '}
													<span className="font-medium text-primary-l10">
														khuyến mãi
													</span>{' '}
													và quà tặng hấp dẫn.
												</li>
												<li>
													<span className="font-medium text-primary-l10">
														Lái thử
													</span>{' '}
													xe tận nhà | Tư vấn vay{' '}
													<span className="font-medium text-primary-l10">
														trả góp{' '}
													</span>
													trả đến 70 - 80%, lãi thấp.{' '}
												</li>
											</ul>
										</section>
									</div>
								</div>

								<div className="pt-5 comment-form-wrap">
									<h3>Nhận báo giá</h3>
									<form action="#" id="contact-form" method="POST">
										<div className="row g-4">
											<div className="col-lg-6">
												<div className="form-clt">
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Your Name"
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-clt">
													<input
														type="text"
														name="email"
														id="email2"
														placeholder="Your Email"
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-clt">
													<textarea
														name="message"
														id="message"
														placeholder="Write a Comment"
														defaultValue={''}
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<button type="submit" className="theme-btn">
													Nhận báo giá
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="main-sidebar">
									<div className="single-sidebar-widget !tw-p-5">
										<div className="wid-title">
											<h3>Các dòng xe</h3>
										</div>
										<div className="!tw-grid !tw-grid-cols-1 !tw-gap-5 g-4 mt-30">
											{cacDongXe.map((item) => {
												return (
													<div
														className="wow fadeInUp !tw-bg-white"
														data-wow-delay=".3s"
														key={item.id}
													>
														<div className="popular-card-items">
															<div className="content">
																<h4>
																	<Link
																		to={`/cars?id=${item.id}`}
																		className="tw-text-lg"
																	>
																		{item.title}
																	</Link>
																</h4>
																{/* <p>Available for Rent</p> */}
															</div>
															<Link
																className="car-image"
																to={`/cars?id=${item.id}`}
															>
																<img src={item.image} alt="img" />
															</Link>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
