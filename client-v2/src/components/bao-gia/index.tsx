import { memo, useState } from 'react';

import baoGiaXeData from '@/data/bao-gia-xe';
import { FieldType } from '@/types/data.type';
import { Drawer } from 'antd';
import { useForm } from 'antd/es/form/Form';
import parse from 'html-react-parser';
import Content from './content';

interface IBaoGiaXeProps {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}

const BaoGiaXeModal = ({ handleCancel, isModalOpen }: IBaoGiaXeProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [form] = useForm<FieldType>();

	return (
		<Drawer
			title={<p className="tw-hidden md:tw-block">{baoGiaXeData.title}</p>}
			onClose={handleCancel}
			open={isModalOpen}
			width={800}
			extra={
				<label
					htmlFor="submit-form"
					onClick={() => form.submit()}
					className="tw-bg-primary tw-text-white tw-py-3 tw-px-5 tw-rounded-lg tw-cursor-pointer tw-h-[50px] tw-min-w-[180px] tw-flex tw-items-center tw-justify-center"
				>
					{isLoading ? (
						<section className="tw-w-5 tw-h-5 tw-border-2 tw-border-t-2 tw-border-white tw-rounded-full tw-animate-spin tw-border-t-primary"></section>
					) : (
						baoGiaXeData.sendButton
					)}
				</label>
			}
		>
			<p className="">{parse(baoGiaXeData.desc)}</p>

			<Content
				onCancel={handleCancel}
				setIsLoading={setIsLoading}
				form={form}
			/>
		</Drawer>
	);
};

export default memo(BaoGiaXeModal);
