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
			<aside className="pt-[25%] scale-100 bg-[url(https://motorx-six.vercel.app/_next/static/media/page-title.22db88fc.jpg)] bg-no-repeat bg-top bg-cover rounded-none relative">
				<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full h-full flex-1 items-center justify-center">
					<section>
						<span className="text-xl font-semibold leading-6 text-white">
							{contactData.bannerTitle}
						</span>
					</section>
					<section>
						<h1 className="font-bold text-white capitalize text-[64px]">
							{contactData.sellerProfile.title}
						</h1>
					</section>
				</section>
			</aside>

			{/* seller profile */}
			<main className="px-px80 py-px80">
				<PrivateSeller />

				<section className="grid grid-cols-12 xl:gap-16 lg:gap-5 gap-4">
					<section className="col-span-12 lg:col-span-8">
						<section>
							<h1 className="mb-6 text-3xl font-bold">
								{contactData.introduce.title}
							</h1>
							<p className="text-gray">{contactData.introduce.desc}</p>
						</section>

						<section className="pt-px80">
							<h1 className="mb-6 text-3xl font-bold w-fit py-2 relative">
								Các dòng xe tại Hà Thành Ford
								<section className="absolute top-full left-0 w-1/3 h-0.5 bg-primary"></section>
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
