import contactData from '@/data/contact';
import Image from 'next/image';
import { infoSeller } from '../init';

const PrivateSeller = () => {
	return (
		<>
			<nav className="flex md:gap-10 gap-5 items-center pb-10 border-b border-b-gray-200">
				<section className="md:h-36 md:w-36 h-28 w-28 rounded-full object-cover flex-shrink-0">
					<Image
						src={
							'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717921645/tran-xuan-hieu/z5520621669533_8cefedf6fb9c0750792c2291a199e2ca_phrgwj.jpg'
						}
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

					<h1 className="md:text-4xl text-2xl font-bold">
						{contactData.sellerProfile.name}
					</h1>
				</section>
			</nav>

			<section className="flex flex-col md:gap-8 gap-6 md:flex-row xl:gap-16 lg:gap-10 py-12">
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
		</>
	);
};

export default PrivateSeller;
