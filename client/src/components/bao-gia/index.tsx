'use client';

import {
	PUBLIC_USER_ID,
	TEAMPLATE_EMAIL_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs/config';
import {
	Cascader,
	CascaderProps,
	Col,
	Drawer,
	Form,
	FormProps,
	Input,
	Radio,
	RadioChangeEvent,
	Row,
	message,
} from 'antd';
import { memo, useState } from 'react';
import { Option, options } from './init';

import baoGiaXeData from '@/data/bao-gia-xe';
import emailjs from '@emailjs/browser';
import parse from 'html-react-parser';

interface IBaoGiaXeProps {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}

type FieldType = {
	username: string;
	email: string;
	phone: string;
	address: string;
	hinhThucMua: string;
	message: string;
	chonXe: string;
};

const BaoGiaXe = ({ handleCancel, isModalOpen }: IBaoGiaXeProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setIsLoading(true);
		const data = {
			...values,
			chonXe: `${values.chonXe[0]}/ ${values.chonXe[1]}/ ${values.chonXe[2]}`,
			hinhThucMua: value === 1 ? 'Trả hết' : 'Trả góp',
			message: values.message || 'Không có lời nhắn',
		};
		emailjs
			.send(
				TEAMPLATE_SERVICES_EMAIL_ID,
				TEAMPLATE_EMAIL_ID,
				data,
				PUBLIC_USER_ID
			)
			.then(
				function (response) {
					setIsLoading(false);
					if (response.status === 200) {
						message.success(
							'Báo giá thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.'
						);
					}
				},
				function () {
					setIsLoading(false);
					message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
				}
			);
	};

	const [value, setValue] = useState(1);

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value);
	};

	const onChangeCascader: CascaderProps<Option>['onChange'] = (value) => {
		console.log(value);
	};

	return (
		<Drawer
			title={baoGiaXeData.title}
			onClose={handleCancel}
			open={isModalOpen}
			width={800}
			extra={
				<label
					htmlFor="submit-form"
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

			<section className="mt-10">
				<Form
					name="basic"
					layout="vertical"
					onFinish={onFinish}
					autoComplete="on"
				>
					<Row gutter={24}>
						<Col span={12}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.username.title}
								name="username"
								rules={[
									{
										required: true,
										message: baoGiaXeData.form.validate.username,
									},
								]}
							>
								<Input
									size="large"
									placeholder={baoGiaXeData.form.username.placeholder}
								/>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.email.title}
								name="email"
								rules={[
									{
										type: 'email',
										message: baoGiaXeData.form.validate.notEmail,
									},
									{
										required: true,
										message: baoGiaXeData.form.validate.email,
									},
								]}
							>
								<Input
									size="large"
									placeholder={baoGiaXeData.form.email.placeholder}
								/>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.phone.title}
								name="phone"
								rules={[
									{ required: true, message: baoGiaXeData.form.validate.phone },
								]}
							>
								<Input
									size="large"
									placeholder={baoGiaXeData.form.username.placeholder}
								/>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.hinhThucMua.title}
								name="hinhThucMua"
								rules={[
									{
										required: true,
										message: baoGiaXeData.form.validate.hinhThucMua,
									},
								]}
							>
								<Radio.Group onChange={onChange} value={value} size="large">
									<Radio value={1}>Trả hết</Radio>
									<Radio value={2}>Trả góp</Radio>
								</Radio.Group>
							</Form.Item>
						</Col>

						<Col span={24}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.hinhThucMua.title}
								name="chonXe"
								rules={[
									{
										required: true,
										message: baoGiaXeData.form.validate.chonXe,
									},
								]}
							>
								<Cascader
									options={options}
									onChange={onChangeCascader}
									size="large"
									placeholder="Please select"
								/>
							</Form.Item>
						</Col>

						<Col span={24}>
							<Form.Item<FieldType>
								label={baoGiaXeData.form.message.title}
								name="message"
							>
								<Input.TextArea
									size="large"
									placeholder={baoGiaXeData.form.message.placeholder}
								/>
							</Form.Item>
						</Col>
					</Row>

					<Input type="submit" id="submit-form" className="!hidden" />
				</Form>
			</section>
		</Drawer>
	);
};

export default memo(BaoGiaXe);
