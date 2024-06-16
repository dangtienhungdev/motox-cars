import Location from '@/app/contact/components/location';
import contactData from '@/data/contact';
import { memo } from 'react';

interface IFormBaoGiaProps {
	children: React.ReactNode;
}

const FormBaoGia = ({ children }: IFormBaoGiaProps) => {
	return (
		<section className="hideen block lg:col-span-4 col-span-12">
			<section className="flex flex-col gap-10">
				<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
					<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
						{contactData.location.title}
					</h2>
					<Location />
				</section>

				<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
					<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
						Nhận báo giá
					</h2>
					{children}
				</section>
			</section>
		</section>
	);
};

export default memo(FormBaoGia);
