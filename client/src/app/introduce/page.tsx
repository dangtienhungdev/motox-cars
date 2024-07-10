'use client';

import Content from '@/components/bao-gia/content';
import FormBaoGia from '@/components/form-bao-gia';
import { introduce } from '@/data/introduce';
import { Image } from 'antd';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';
import { memo } from 'react';

const Introduce = () => {
	const [form] = useForm();
	return (
		<section className="xl:p-px80 lg:p-10 md:p-6 p-4">
			<section className="grid grid-cols-12 gap-4">
				<section className="col-span-12 lg:col-span-8 flex flex-col gap-4">
					<h1 className="lg:text-2xl text-xl font-semibold text-primary">
						{parse(introduce.title)}
					</h1>
					<section className="w-full">
						<iframe
							className="w-full min-h-[500px]"
							width={560}
							height={315}
							src="https://www.youtube.com/embed/NrmOvjBbU2Y?si=5Sz81kpxCd1iA0Y8"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</section>

					<p className="lg:text-xl text-lg font-semibold text-primary">
						{parse(introduce.des1)}
					</p>
					<h2 className="">{parse(introduce.des2)}</h2>

					<ul className="list-disc pl-10">
						{introduce.list.map((item: string, index: number) => (
							<li className="" key={`${index}${item}`}>
								{parse(item)}
							</li>
						))}
					</ul>

					<p className="">{parse(introduce.des3)}</p>
					<p className="">{parse(introduce.des4)}</p>
					<p className="">{parse(introduce.des5)}</p>

					<Image
						src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1720630519/tran-xuan-hieu/ford-transit/IMG_8555-768x426_g0lmag.jpg"
						alt="Ford Transit"
					/>

					<ul className="list-disc pl-10">
						{introduce.list2.map((item: string, index: number) => (
							<li className="" key={`${index}${item}`}>
								{parse(item)}
							</li>
						))}
					</ul>

					<h1 className="lg:text-2xl text-xl font-semibold text-primary">
						{parse(introduce.des6)}
					</h1>
					<Image
						src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1720630676/tran-xuan-hieu/ford-transit/IMG_2736_jqv9aq.jpg"
						alt="Ford Transit"
					/>
					<p className="">{parse(introduce.des7)}</p>
					<p className="">{parse(introduce.des8)}</p>
					<p className="lg:text-xl text-lg font-semibold text-primary">
						{parse(introduce.des9)}
					</p>
					<p className="">{parse(introduce.des10)}</p>
					<p className="">{parse(introduce.des11)}</p>
					<p className="lg:text-xl text-lg font-semibold text-primary">
						{parse(introduce.des12)}
					</p>

					<ul className="flex flex-col gap-4">
						{introduce.cotLoi.map((item: any) => (
							<ul className="list-disc" key={item.id}>
								<h1 className="lg:text-xl text-lg font-semibold text-primary">
									{item.title}
								</h1>
								<ul className="list-disc pl-10 flex flex-col gap-3 mt-3">
									{item.desc.map((desc: string, index: number) => (
										<li className="" key={`${index}${desc}`}>
											{parse(desc)}
										</li>
									))}
								</ul>
							</ul>
						))}
					</ul>

					<Image
						src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1720630613/tran-xuan-hieu/ford-transit/IMG_6855_euwd3t.jpg"
						alt="Ford Transit"
					/>
				</section>
				<section className="col-span-12 lg:col-span-4">
					<FormBaoGia>
						<Content form={form} isSubmit={true} />
					</FormBaoGia>
				</section>
			</section>
		</section>
	);
};

export default memo(Introduce);
