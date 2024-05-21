import contactData from '@/data/contact';
import Image from 'next/image';
import { memo } from 'react';
import SellerProfile from '~/images/seller-profile.jpg';
import { infoSeller } from './init';

const ContactPage = () => {
	return (
		<section className="flex flex-col">
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
			<main className="px-px80 pt-px80">
				<nav className="flex gap-10 items-center pb-10 border-b border-b-gray-200">
					<section className="h-36 w-36 rounded-full object-cover flex-shrink-0">
						<Image
							src={SellerProfile}
							alt="seller profile"
							className="object-cover rounded-full h-full w-full"
							height={144}
							width={144}
						/>
					</section>

					<section className="flex flex-col gap-3">
						<h2 className="text-primary font-medium">
							{contactData.sellerProfile.privateSeller}
						</h2>

						<h1 className="text-4xl font-bold">
							{contactData.sellerProfile.name}
						</h1>
					</section>
				</nav>

				<section className="flex flex-row xl:gap-16 lg:gap-10 py-12">
					{infoSeller.map((info) => {
						return (
							<section className="flex gap-4 items-center" key={info.id}>
								<section className="h-12 w-12 flex flex-shrink-0 text-primary items-center justify-center rounded-full shadow">
									{info.icon}
								</section>

								<section className="flex flex-col gap-1">
									<h2 className="text-primary font-semibold">{info.title}</h2>
									<p className="font-medium">{info.value}</p>
								</section>
							</section>
						);
					})}
				</section>
			</main>
		</section>
	);
};

export default memo(ContactPage);
