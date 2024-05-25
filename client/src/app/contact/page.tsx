'use client';

import ScrollTop from '@/components/scroll-top/scroll-top';
import contactData from '@/data/contact';
import { motion } from 'framer-motion';
import { memo } from 'react';
import FormSeller from './components/form-seller';
import Location from './components/location';
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

						<section className=""></section>
					</section>
					<section className="hideen block lg:col-span-4">
						<section className="flex flex-col gap-10">
							<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
								<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
									{contactData.location.title}
								</h2>
								<Location />
							</section>

							<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
								<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
									{contactData.contact.title}
								</h2>
								<FormSeller />
							</section>
						</section>
					</section>
				</section>
			</main>
		</motion.section>
	);
};

export default memo(ContactPage);
