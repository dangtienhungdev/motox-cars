import FacebookIcon from '~/socials/facebook.png';
import Image from 'next/image';
import Link from 'next/link';
import Location from '@/app/contact/components/location';
import { memo } from 'react';

const FooterLayout = () => {
	const footers = [
		{
			id: 1,
			title: 'Trụ sở Hà Thành Ford',
			children: [
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>
					),
					title: 'Cụm Công nghiệp Lai Xá, Kim Chung, Hoài Đức, Hà Nội',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
							/>
						</svg>
					),
					title: '083 3096 605',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					),
					title: 'tranxuanhieu003@gmail.com',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					),
					title: 'Thứ 2 - Thứ 7 Từ 8h00 - 17h00',
				},
			],
		},
		{
			id: 2,
			title: 'Chi nhánh Mỹ Đình',
			children: [
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>
					),
					title: 'Số 2 Tôn Thất Thuyết - Hà Nội (Đối diện bến xe Mỹ Đình)',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
							/>
						</svg>
					),
					title: '083 3096 605',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					),
					title: 'tranxuanhieu003@gmail.com',
				},
				{
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					),
					title: 'Thứ 2 - Thứ 7 Từ 8h00 - 17h00',
				},
			],
		},
	];

	return (
		<footer className="grid grid-cols-1 md:grid-cols-2 h-fit gap-10 lg:grid-cols-3 xl:grid-cols-4 bg-primary text-white py-10 xl:px-px80 lg:px-10 md:px-6 px-4">
			{footers.map((footer) => (
				<section className="flex flex-col gap-3" key={footer.id}>
					<h2 className="text-white font-medium text-xl">{footer.title}</h2>
					<ul className="flex flex-col gap-2">
						{footer.children.map((child, index) => (
							<li
								className="flex leading-5 items-center gap-2 cursor-pointer"
								key={`${index}${child.title}`}
							>
								<span className="">{child.icon}</span>
								<span className="text-sm">{child.title}</span>
							</li>
						))}
					</ul>
				</section>
			))}
			<section className="flex flex-col gap-3">
				<h2 className="text-white font-medium text-xl">
					Đường đến Hà Thành Ford
				</h2>
				<Location />
			</section>
			<section className="flex flex-col gap-3">
				<h2 className="text-white font-medium text-xl">Liên hệ với tôi</h2>
				<section className="flex flex-col gap-2">
					<Link
						href={`https://facebook.com/txh.1510?mibextid=JRoKGi`}
						target="_blank"
					>
						<section className="flex leading-5 items-center gap-2 cursor-pointer">
							<Image
								src={FacebookIcon}
								height={16}
								width={16}
								className="h-4 w-4"
								alt="facebook"
							/>
							<span className="text-sm">Trần Xuân Hiếu</span>
						</section>
					</Link>
					<section className="flex leading-5 items-center gap-2 cursor-pointer">
						<span className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
								/>
							</svg>
						</span>
						<span className="text-sm">083 3096 605</span>
					</section>
				</section>
			</section>
		</footer>
	);
};

export default memo(FooterLayout);
