import cn from '@/libs/clsxm';
import Image from 'next/image';

interface DongXeProps {
	className?: {
		wrapper?: string;
		image?: string;
		title?: string;
	};
}

const DongXe = ({ className }: DongXeProps) => {
	const data = [
		{
			id: 1,
			title: 'Ford Ranger Raptor',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
		{
			id: 2,
			title: 'Ford Ranger',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
		{
			id: 3,
			title: 'Ford Everest',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
		{
			id: 4,
			title: 'Ford Territory',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
		{
			id: 5,
			title: 'Ford Explorer',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
		{
			id: 5,
			title: 'Ford Transit',
			image:
				'https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg',
		},
	];
	return (
		<section
			className={cn(
				'pt-px80 grid lg:grid-cols-3 lg:gap-14 md:gap-8 gap-4 grid-cols-2',
				className?.wrapper
			)}
		>
			{data.map((item) => (
				<section
					className="flex items-center justify-center gap-4 cursor-pointer overflow-hidden w-fit rounded-xl mx-auto relative"
					key={item.id}
				>
					<Image
						src={item.image}
						width={300}
						height={200}
						className="w-[300px] h-[200px] rounded-xl object-cover hover:scale-105 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
						alt={item.title}
					/>
					<h1 className="absolute bottom-4 text-white drop-shadow-lg uppercase text-base whitespace-nowrap left-1/2 -translate-x-1/2 z-10">
						{item.title}
					</h1>
				</section>
			))}
		</section>
	);
};

export default DongXe;
