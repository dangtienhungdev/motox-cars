import { TMauSac } from '@/types/data.type';
import { Image } from 'antd';
import { useState } from 'react';

interface CacMauSacProps {
	title: string;
	mauSac: TMauSac[];
}

const CacMauSac = ({ title, mauSac }: CacMauSacProps) => {
	const [imageActive, setImageActive] = useState(0);

	const handleImageActive = (index: number) => {
		setImageActive(index);
	};

	return (
		<div className="tw-my-10 tw-flex tw-flex-col tw-gap-5">
			<p className="text-center tw-text-primary tw-font-semibold tw-text-3xl">
				Khám phá các màu sắc của {title}
			</p>

			<section className="">
				<section className="tw-rounded-md tw-overflow-hidden tw-w-full tw-flex tw-items-center tw-justify-center">
					<Image
						src={mauSac[imageActive].image}
						alt={mauSac[imageActive].title}
						className="tw-rounded-md"
					/>
				</section>

				<section className="tw-flex tw-items-center tw-justify-center tw-gap-10 tw-mt-10">
					{mauSac.map((item, index) => (
						<section
							className="tw-flex tw-flex-col tw-gap-2 tw-items-center"
							key={item.id}
						>
							<button
								className={`${
									imageActive === index
										? 'tw-border-primary tw-border-2'
										: 'tw-border-transparent'
								} tw-cursor-pointer tw-mt-2 `}
								onClick={() => handleImageActive(index)}
							>
								<Image
									src={item.color}
									alt={item.title}
									className="!tw-h-10 !tw-w-10 tw-rounded-full tw-border-primary"
									preview={false}
								/>
							</button>

							<p className="tw-text-gray-500">{item.title}</p>
						</section>
					))}
				</section>
			</section>
		</div>
	);
};

export default CacMauSac;
