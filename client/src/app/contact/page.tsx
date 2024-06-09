'use client';

import DongXe from '@/components/dong-xe';
import FormBaoGia from '@/components/form-bao-gia';
import ScrollTop from '@/components/scroll-top/scroll-top';
import contactData from '@/data/contact';
import { motion } from 'framer-motion';
import { memo } from 'react';
import PrivateSeller from './components/private-seller';

const ContactPage = () => {
	return (
		<motion.section className="flex flex-col">
			<ScrollTop />

			{/* banner */}
			<aside className="lg:pt-[30%] md:pt-[40%] pt-[50%] scale-100 bg-[url(https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717922240/tran-xuan-hieu/banner-ford-ranger-next-gen_lyisup.jpg)] bg-no-repeat md:bg-bottom bg-center bg-cover md:bg-origin-content rounded-none relative">
				<section className="absolute md:flex hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex-1 items-center justify-center">
					<section>
						<span className="text-xl font-semibold leading-6 text-white">
							{contactData.bannerTitle}
						</span>
					</section>
					<section>
						<h1 className="font-bold text-white capitalize lg:text-[64px] md:text-3xl text-2xl">
							{contactData.sellerProfile.title}
						</h1>
					</section>
				</section>
			</aside>

			{/* seller profile */}
			<main className="xl:px-px80 lg:px-10 md:px-6 px-4 md:py-px80 py-10">
				<PrivateSeller />

				<section className="grid grid-cols-12 xl:gap-16 lg:gap-5 gap-4">
					<section className="col-span-12 lg:col-span-8">
						<section>
							<h1 className="mb-6 text-3xl font-bold">
								{contactData.introduce.title}
							</h1>
							{/* <p className="text-gray">{contactData.introduce.desc}</p> */}
							<section className="flex flex-col w-full gap-2">
								<h1 className="">
									Chúng tôi không chỉ bán sản phẩm - Chúng tôi còn trách nhiệm
									với sản phẩm!
								</h1>
								<p className="">
									Cam kết khi mua xe tại Ford Hà Thành - Hotline (24/7) :
									<span className="text-primary font-medium">083 3096 605</span>
								</p>
								<p className="">
									Với đội ngũ nhiều năm kinh nghiệm bán xe, tin rằng sẽ giúp anh
									chị lựa chọn được chiếc xe ưng ý nhất cho bản thân và gia
									đình. Ngoài việc tư vấn, còn hỗ trợ anh chị:
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
											trả góp
										</span>
										trả đến 70 - 80%, lãi thấp.{' '}
									</li>
								</ul>
							</section>
						</section>

						<section className="pt-px80">
							<h1 className="mb-6 md:text-3xl text-2xl font-bold w-fit py-2 relative">
								Các dòng xe tại Hà Thành Ford
								<section className="absolute md:block hidden top-full left-0 w-1/3 h-0.5 bg-primary"></section>
							</h1>
							<DongXe className={{ wrapper: 'pt-10' }} />
						</section>
					</section>

					<FormBaoGia />
				</section>
			</main>
		</motion.section>
	);
};

export default memo(ContactPage);
