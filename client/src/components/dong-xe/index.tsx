import cn from '@/libs/clsxm';
import Image from 'next/image';
import Link from 'next/link';

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
			id: 2,
			title: 'Ford Ranger Raptor',
			slug: 'ford-ranger-raptor',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-raptor-2023-mau-do-icon-fordlongbien_com_uuafxd.jpg',
		},
		{
			id: 1,
			title: 'Ford Ranger',
			slug: 'ford-ranger',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-ranger-wildtrak-mau-vang-luxe-icon2-fordlongbien_com_l40h2a.jpg',
		},
		{
			id: 5,
			title: 'Ford Everest',
			slug: 'ford-everest',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-everest-2022-mau-cam-icon-fordlongbien_com_tpiye8.jpg',
		},
		{
			id: 4,
			title: 'Ford Territory',
			slug: 'ford-territory',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-territory-2023-icon-fordlongbien_com_cynra9.jpg',
		},
		{
			id: 6,
			title: 'Ford Explorer',
			slug: 'ford-explorer',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819144/tran-xuan-hieu/ford-explorer-2022-icon-mau-do-fordlongbien_com-300x200_ghtqzg.jpg',
		},
		{
			id: 7,
			title: 'Ford Transit',
			slug: 'ford-transit',
			image:
				'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717819145/tran-xuan-hieu/ford-transit-fordlongbien_com-icon-1_e5lfxu.jpg',
		},
	];
	return (
		<section
			className={cn(
				'pt-px80 grid lg:grid-cols-3 lg:gap-14 md:gap-8 gap-4 md:grid-cols-2 grid-cols-1',
				className?.wrapper
			)}
		>
			{data.map((item) => (
				<Link key={item.id} href={`/cars?id=${item.id}`}>
					<section className="flex items-center flex-col justify-center gap-4 cursor-pointer overflow-hidden w-fit rounded-xl mx-auto relative">
						<Image
							src={item.image}
							width={300}
							height={200}
							className="w-[300px] h-[200px] rounded-xl object-contain hover:scale-105 transition-all duration-300 ease-in-out"
							alt={item.title}
						/>
						<h1 className="text-black drop-shadow-lg uppercase text-base whitespace-nowrap z-10">
							{item.title}
						</h1>
					</section>
				</Link>
			))}
		</section>
	);
};

export default DongXe;
