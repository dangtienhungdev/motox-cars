import {
	Cascader,
	CascaderProps,
	Col,
	Form,
	FormProps,
	Input,
	Radio,
	RadioChangeEvent,
	Row,
	message,
} from 'antd';
import { Option, options } from './init';
import {
	PUBLIC_USER_ID,
	TEAMPLATE_EMAIL_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs/config';
import { memo, useState } from 'react';

import baoGiaXeData from '@/data/bao-gia-xe';
import emailjs from '@emailjs/browser';

type FieldType = {
	username: string;
	email: string;
	phone: string;
	address: string;
	hinhThucMua: string;
	message: string;
	chonXe: string;
};

const Content = ({
	setIsLoading,
}: {
	setIsLoading?: (value: boolean) => void;
}) => {
	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setIsLoading && setIsLoading(true);
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
					setIsLoading && setIsLoading(false);
					if (response.status === 200) {
						message.success(
							'Báo giá thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.'
						);
					}
				},
				function () {
					setIsLoading && setIsLoading(false);
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
							<Radio.Group
								defaultValue={1}
								onChange={onChange}
								value={value}
								size="large"
							>
								<Radio value={1}>Trả hết</Radio>
								<Radio value={2}>Trả góp</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item<FieldType>
							label={'Dòng xe'}
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
	);
};

export default memo(Content);
