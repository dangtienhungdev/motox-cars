'use client';

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

const BaoGiaXe = ({ handleCancel, isModalOpen }: IBaoGiaXeProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [form] = useForm<FieldType>();

	return (
		<Drawer
			title={<p className="md:block hidden">{baoGiaXeData.title}</p>}
			onClose={handleCancel}
			open={isModalOpen}
			width={800}
			extra={
				<label
					htmlFor="submit-form"
					onClick={() => form.submit()}
					className="bg-primary text-white py-3 px-5 rounded-lg cursor-pointer h-[50px] min-w-[180px] flex items-center justify-center"
				>
					{isLoading ? (
						<section className="animate-spin border-t-2 border-t-primary h-5 w-5 border-2 border-white rounded-full"></section>
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

export default memo(BaoGiaXe);
