import FormSeller from '@/app/contact/components/form-seller';
import Location from '@/app/contact/components/location';
import contactData from '@/data/contact';
import { memo } from 'react';

const FormBaoGia = () => {
	return (
		<section className="hideen block lg:col-span-4">
			<section className="flex flex-col gap-10">
				<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
					<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
						{contactData.location.title}
					</h2>
					<Location />
				</section>

				<section className="w-full p-4 xl:p-6 rounded-md bg-gray-l1">
					<h2 className="text-2xl font-bold mb-8 pl-2 border-l-2 border-l-primary">
						{contactData.contact.title}
					</h2>
					<FormSeller />
				</section>
			</section>
		</section>
	);
};

export default memo(FormBaoGia);
