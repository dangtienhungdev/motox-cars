import {
	PUBLIC_USER_ID,
	TEAMPLATE_EMAIL_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs';
import { Form, Input, Select, message, notification } from 'antd';
import { useEffect, useState } from 'react';

import { FieldType } from '@/types/data.type';
import emailjs from '@emailjs/browser';
import { FormProps } from 'antd/es/form/Form';

const NhanBaoGiaXe = () => {
	const [form] = Form.useForm<FieldType>();

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
		<div
			className="bg-cover pickup-loaction-area"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721230350/tran-xuan-hieu/banner/brand-bg_kcnbwg.png")',
			}}
		>
			{contextHolder}
			<div className="container">
				<Form
					layout="vertical"
					className="pickup-wrapper wow fadeInUp !tw-gap-5 lg:!tw-flex !tw-hidden "
					data-wow-delay=".4s"
					form={form}
					onFinish={onFinish}
					initialValues={{ hinhThucMua: '1', chonXe: 'everest' }}
				>
					<div className="pickup-items">
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
					<div className="pickup-items">
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
					<div className="pickup-items">
						<Form.Item<FieldType>
							label={
								<span className="label-text tw-text-base tw-font-medium tw-text-[#0c142e]">
									Hình thức mua
								</span>
							}
							name="hinhThucMua"
							className="!tw-px-0"
						>
							<Select
								variant="borderless"
								defaultValue="1"
								className="!tw-text-primary !tw-h-[58px] tw-rounded-lg tw-text-base tw-font-medium tw-bg-[#ECF0F4]"
								options={[
									{ value: '1', label: 'Trả thẳng' },
									{ value: '2', label: 'Trả góp' },
								]}
							/>
						</Form.Item>
					</div>
					<div className="pickup-items">
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
								className="tw-bg-[#ECF0F4] !tw-text-primary !tw-h-[58px] tw-rounded-lg tw-text-base tw-font-medium"
								variant="borderless"
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
					<div className="pickup-items">
						<button className="pickup-btn" type="submit">
							{isLoading ? 'Đang xử lý...' : 'Báo giá xe'}
						</button>
					</div>
				</Form>
				<div className="brand-wrapper pt-80 pb-80 lg:!tw-block !tw-hidden"></div>
			</div>
		</div>
	);
};

export default NhanBaoGiaXe;
