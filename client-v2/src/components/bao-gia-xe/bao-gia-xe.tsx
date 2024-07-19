import {
	PUBLIC_USER_ID,
	TEAMPLATE_EMAIL_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs';
import { Button, Form, Input, Select, message, notification } from 'antd';
import { FormProps, useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';

import { FieldType } from '@/types/data.type';
import emailjs from '@emailjs/browser';

const BaoGiaXe = () => {
	const [form] = useForm();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChooseCar = (value: string) => {
		switch (value) {
			case 'everest':
				return 'Ford Everest';
			case 'ranger':
				return 'Ford Ranger';
			case 'ranger-raptor':
				return 'Ford Ranger Raptor';
			case 'territory':
				return 'Ford Territory';
			case 'explorer':
				return 'Ford Explorer';
			case 'transit':
				return 'Ford Transit';
		}
	};

	const [api, contextHolder] = notification.useNotification();

	const openNotification = () => {
		api.open({
			message: 'Gửi báo giá thành công!',
			description:
				'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể. Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi!',
			duration: 0,
		});
	};

	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setIsLoading && setIsLoading(true);
		const data = {
			...values,
			chonXe: handleChooseCar(values.chonXe),
			hinhThucMua:
				values.hinhThucMua === '1' || values.hinhThucMua === undefined
					? 'Trả hết'
					: 'Trả góp',
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
				function () {
					setIsLoading(false);
					message.success(
						'Báo giá thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.'
					);
					openNotification();
				},
				function () {
					setIsLoading && setIsLoading(false);
					message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
				}
			)
			.catch(() => {
				setIsLoading && setIsLoading(false);
				message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
			});
	};

	useEffect(() => {
		form.setFieldsValue({ hinhThucMua: '1', chonXe: 'everest' });
	}, []);

	return (
		<div className="col-lg-4">
			{contextHolder}
			<div className="car-list-sidebar">
				<h4 className="title">Nhận báo giá xe</h4>
				<Form
					form={form}
					onFinish={onFinish}
					layout="vertical"
					// id="contact-form"
					className="contact-form-items"
					initialValues={{ hinhThucMua: '1', chonXe: 'everest' }}
				>
					<div className="row g-4">
						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Họ và tên của bạn
									</span>
								}
								name="username"
								className=""
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập họ và tên!',
									},
								]}
							>
								<Input
									variant="borderless"
									className="tw-bg-white !tw-text-primary !tw-h-[58px] tw-px-4"
									size="large"
									placeholder={'Họ và tên của bạn'}
								/>
							</Form.Item>
						</div>
						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Email
									</span>
								}
								name="email"
								className=""
							>
								<Input
									variant="borderless"
									className="tw-bg-white !tw-text-primary !tw-h-[58px] tw-px-4"
									size="large"
									placeholder={'Email của bạn'}
								/>
							</Form.Item>
						</div>
						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Số điện thoại
									</span>
								}
								name="phone"
								className=""
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập số điện thoại!',
									},
								]}
							>
								<Input
									variant="borderless"
									className="tw-bg-white !tw-text-primary !tw-h-[58px] tw-px-4"
									size="large"
									placeholder={'Số điện thoại của bạn'}
								/>
							</Form.Item>
						</div>
						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Hình thức mua
									</span>
								}
								name="hinhThucMua"
								className=""
							>
								<Select
									defaultValue="1"
									className="tw-bg-white !tw-text-primary !tw-h-[58px] tw-px-4 tw-rounded-lg tw-text-base tw-font-medium"
									variant="borderless"
									// onChange={handleChange}
									options={[
										{ value: '1', label: 'Trả thẳng' },
										{ value: '2', label: 'Trả góp' },
									]}
								/>
							</Form.Item>
						</div>
						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Dòng xe bạn quan tâm
									</span>
								}
								name="chonXe"
								className=""
								rules={[
									{
										required: true,
										message: 'Vui lòng chọn dòng xe bạn quan tâm!',
									},
								]}
							>
								<Select
									defaultValue="everest"
									className="tw-bg-white !tw-text-primary !tw-h-[58px] tw-px-4 tw-rounded-lg tw-text-base tw-font-medium"
									variant="borderless"
									// onChange={handleChange}
									options={[
										{ value: 'everest', label: 'Ford Everest' },
										{ value: 'ranger', label: 'Ford Ranger' },
										{ value: 'ranger-raptor', label: 'Ford Ranger Raptor' },
										{ value: 'territory', label: 'Ford Territory' },
										{ value: 'explorer', label: 'Ford Explorer' },
										{ value: 'transit', label: 'Ford Transit' },
									]}
								/>
							</Form.Item>
						</div>

						<div className="col-lg-12">
							<Form.Item<FieldType>
								label={
									<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
										Lời nhắn của bạn
									</span>
								}
								name="message"
								className=""
							>
								<Input.TextArea
									className="tw-bg-white !tw-text-primary tw-px-4 tw-rounded-lg tw-text-base"
									variant="borderless"
									size="large"
									placeholder={'Lời nhắn của bạn'}
								/>
							</Form.Item>
						</div>

						<div className="col-lg-12">
							<div className="form-clt">
								<Button
									htmlType="submit"
									className="tw-bg-primary tw-text-white tw-font-medium tw-text-lg !tw-rounded-lg !tw-h-14 !tw-w-fit tw-px-5 hover:!tw-bg-primary hover:!tw-text-white"
								>
									{isLoading ? 'Đang xử lý...' : 'Nhận báo giá'}
								</Button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default BaoGiaXe;
