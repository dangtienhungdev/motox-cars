import { Button, Drawer } from 'antd';

import Link from 'next/link';
import { memo } from 'react';
import menus from '../menus';

interface SidebarMobileProps {
	isOpenSidebar: boolean;
	setIsOpenSidebar: (isOpenSidebar: boolean) => void;
}

const SidebarMobile = ({
	isOpenSidebar,
	setIsOpenSidebar,
}: SidebarMobileProps) => {
	return (
		<Drawer
			// title="Basic Drawer"
			placement="left"
			onClose={() => setIsOpenSidebar(false)}
			open={isOpenSidebar}
			footer={false}
			headerStyle={{ display: 'none' }}
		>
			<section className="flex flex-col items-start gap-5 flex-1 justify-center">
				{menus.map((menu) => (
					<Link
						href={menu.link}
						key={menu.id}
						className="text-base text-primary py-3 font-medium flex justify-start w-full text-left"
					>
						<Button className="!w-full !text-left !border-none outline-none ring-0 focus-visible:ring-0">
							{menu.name}
						</Button>
					</Link>
				))}
			</section>
		</Drawer>
	);
};

export default memo(SidebarMobile);
