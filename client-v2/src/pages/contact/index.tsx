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
										<h3>The best fastest and most powerful road car</h3>
										<p className="mt-3">
											Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
											phaedrum. There are many variations of passages of Lorem
											Ipsum available, but the majority have alteration in some
											injected or words which don't look even slightly
											believable. If you are going to use a passage of Lorem
											Ipsum, you need to be sure there isn't anything embarrang
											hidden in the middle of text. All the Lorem Ipsum
											generators on the Internet tend to repeat predefined
											chunks as necessary, making this the first true generator
											on the Internet. It uses a dictionary of over 200 Latin
											words, combined with a handful of model sentence
											structures, to generate Lorem Ipsum which looks
											reasonable.
										</p>
										<p className="mt-4">
											Lorem Ipsum has been the industry's standard dummy text
											ever since the 1500s, when an unknown printer took a
											galley of type and scrambled it to make a type simen book.
											It has survived not only five centuries, but also the leap
											into electronic typesetting.
										</p>
										<p className="mt-4">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. orem Ipsum has been the industry's
											standard dummy text ever since the when an unknown printer
											took a galley of type and scrambled it to make a type
											specimen book.
										</p>
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
										{/* <div className="recent-post-area">
											{cacDongXe.map((item) => {
												return (
													<div className="recent-items" key={item.id}>
														<div className="recent-thumb">
															<img
																src={item.image}
																alt={item.title}
																className="tw-h-[140px] tw-w-[140px]"
															/>
														</div>
														<div className="recent-content">
															<ul>
																<li>
																	<i className="fa-solid fa-comments" />2
																	Comments
																</li>
															</ul>
															<h6>
																<Link to="news-details.html">{item.title}</Link>
															</h6>
														</div>
													</div>
												);
											})}
										</div> */}
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
															<div className="car-image">
																<img src={item.image} alt="img" />
															</div>
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
