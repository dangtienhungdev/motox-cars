import {
	PUBLIC_USER_ID,
	TEAMPLATE_EMAIL_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs';
import {
	Button,
	Col,
	Form,
	FormInstance,
	FormProps,
	Input,
	Radio,
	RadioChangeEvent,
	Row,
	Select,
	message,
} from 'antd';
import { memo, useState } from 'react';

import baoGiaXeData from '@/data/bao-gia-xe';
import { FieldType } from '@/types/data.type';
import emailjs from '@emailjs/browser';
import { options } from '../modal-bao-gia/init';

const Content = ({
	setIsLoading,
	isSubmit,
	form,
	onCancel,
}: {
	setIsLoading?: (value: boolean) => void;
	isSubmit?: boolean;
	form: FormInstance<FieldType>;
	onCancel?: () => void;
}) => {
	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setIsLoading && setIsLoading(true);
		const data = {
			...values,
			chonXe: `${values.chonXe}`,
			hinhThucMua:
				value === 1 || values.hinhThucMua === undefined ? 'Trả hết' : 'Trả góp',
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
			)
			.then(() => {
				// close modal
				onCancel && onCancel();
			})
			.catch(() => {
				setIsLoading && setIsLoading(false);
				onCancel && onCancel();
				message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
			});
	};

	const [value, setValue] = useState(1);

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value);
	};

	// const onChangeCascader: CascaderProps<Option>['onChange'] = (value) => {
	// 	console.log(value);
	// };

	return (
		<section className="mt-10">
			<Form
				name="basic"
				layout="vertical"
				onFinish={onFinish}
				autoComplete="on"
				form={form}
			>
				<Row gutter={24}>
					<Col span={24}>
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

					<Col span={24}>
						<Form.Item<FieldType>
							label={baoGiaXeData.form.phone.title}
							name="phone"
							rules={[
								{ required: true, message: baoGiaXeData.form.validate.phone },
								// regex /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
								{
									pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
									message: 'Số điện thoại không hợp lệ',
								},
							]}
						>
							<Input size="large" placeholder={'Nhập số điện thoại của bạn'} />
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item<FieldType>
							label={baoGiaXeData.form.hinhThucMua.title}
							name="hinhThucMua"
						>
							<Radio.Group
								defaultValue={1}
								onChange={onChange}
								value={value}
								size="large"
							>
								<Radio value={1}>Trả thẳng</Radio>
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
							{/* <Cascader
								options={options}
								onChange={onChangeCascader}
								size="large"
								placeholder="Please select"
							/> */}
							<Select
								defaultValue="ford-everest"
								allowClear
								size="large"
								options={options}
							/>
						</Form.Item>
					</Col>
				</Row>

				<input type="submit" id="submit-form" className="!tw-hidden" />

				{isSubmit && (
					<Row>
						<Col span={24}>
							<Form.Item>
								<Button
									htmlType="submit"
									type="primary"
									className="tw-w-full tw-text-white tw-bg-primary"
									size="large"
									id="submit-form"
								>
									Nhận báo giá
								</Button>
							</Form.Item>
						</Col>
					</Row>
				)}
			</Form>
		</section>
	);
};

export default memo(Content);
