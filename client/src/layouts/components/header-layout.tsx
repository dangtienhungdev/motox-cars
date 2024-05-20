import { ChatBubbleIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import Logo from '~/images/logo.png';

const HeaderLayout = () => {
	const menus = [
		{
			id: '1',
			name: 'Trang chủ',
			link: '/',
		},
		{
			id: '2',
			name: 'Giới thiệu',
			link: '/gioi-thieu',
		},
		{
			id: '3',
			name: 'Bảng giá xe',
			link: '/bang-gia-xe',
		},
		{
			id: '4',
			name: 'Sản phẩm',
			link: '/san-pham',
		},
		{
			id: '6',
			name: 'Liên hệ',
			link: '/lien-he',
		},
	];

	return (
		<header className="fixed hidden lg:block w-full top-0 left-0 right-0 z-order-1">
			<nav className="bg-primary text-white h-12 flex justify-between items-center px-20">
				<section className="flex items-center gap-2">
					<span className="">
						<EnvelopeClosedIcon className="w-4 h-4" />
					</span>
					<p className="flex items-center">
						<span className="">Hot Line:</span>
						<span className="text-base">+0946937769</span>
					</p>
				</section>
				<section className="flex items-center gap-2">
					<span className="">
						<EnvelopeClosedIcon className="w-4 h-4" />
					</span>
					<p className="flex items-center">
						<span className="">Hot Line:</span>
						<span className="text-base">+0946937769</span>
					</p>
				</section>
			</nav>

			<section className="w-full max-w-[calc(100vw_-_160px)] bg-white left-1/2 -translate-x-1/2 absolute top-12 h-20 rounded-b-lg flex items-center justify-between px-6">
				<section className="flex-shrink-0">
					<Image
						src={Logo}
						alt="logo"
						width={123}
						height={40}
						className="object-contain"
					/>
				</section>

				<section className="flex items-center gap-5 flex-1 justify-center">
					{menus.map((menu) => (
						<Link
							href={menu.link}
							key={menu.id}
							className="text-base text-primary font-medium"
						>
							{menu.name}
						</Link>
					))}
				</section>

				<section className="">
					<Button
						type="primary"
						className="!bg-primary text-white py-3 px-6 flex items-center gap-2 flex-shrink-0 flex-row-reverse !text-base !h-12 w-[166px]"
						icon={<ChatBubbleIcon />}
					>
						Nhận báo giá
					</Button>
				</section>
			</section>
		</header>
	);
};

export default memo(HeaderLayout);
