import {
	NEXT_PUBLIC_TEAMPLATE_EMAIL_ID_DANGKY_LAI_XE,
	PUBLIC_USER_ID,
	TEAMPLATE_SERVICES_EMAIL_ID,
} from '@/configs/config';
import {
	Checkbox,
	Col,
	DatePicker,
	Drawer,
	Form,
	FormProps,
	Input,
	Row,
	message,
} from 'antd';
import { memo, useState } from 'react';

import { laiThuXeData } from '@/data/lai-thu-xe';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import parse from 'html-react-parser';

dayjs.extend(customParseFormat);
interface ILaiThuXeProps {
	open: boolean;
	onClose: () => void;
}

type FieldType = {
	username: string;
	phone: string;
	car: string;
	message: string;
	date: string;
};

const LaiThuXe = ({ open, onClose }: ILaiThuXeProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		const day = dayjs(values.date, 'DD/MM/YYYY').format('DD-MM-YYYY');
		const data = {
			...values,
			date: day,
			message: values.message || 'Không có lời nhắn',
			car: `Khách hàng ${values.username} muốn lái thử các dòng xe: ${values.car} vào ngày ${day}`,
		};

		setIsLoading && setIsLoading(true);

		emailjs
			.send(
				TEAMPLATE_SERVICES_EMAIL_ID,
				NEXT_PUBLIC_TEAMPLATE_EMAIL_ID_DANGKY_LAI_XE,
				data,
				PUBLIC_USER_ID
			)
			.then(
				function (response) {
					setIsLoading && setIsLoading(false);
					if (response.status === 200) {
						message.success(
							'Đăng ký lái xe thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.'
						);
					}
				},
				function () {
					setIsLoading && setIsLoading(false);
					message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
				}
			);
	};

	return (
		<Drawer
			title={<p className="md:text-base md:block hidden">Đăng ký lái thử xe</p>}
			onClose={onClose}
			open={open}
			width={800}
			extra={
				<label
					htmlFor="submit-form"
					className="bg-primary text-white py-3 px-5 rounded-lg cursor-pointer h-[50px] min-w-[180px] flex items-center justify-center"
				>
					{isLoading ? (
						<section className="animate-spin border-t-2 border-t-primary h-5 w-5 border-2 border-white rounded-full"></section>
					) : (
						laiThuXeData.sendButton
					)}
				</label>
			}
		>
			<p className="">{parse(laiThuXeData.desc)}</p>

			<section className="mt-10">
				<Form
					name="basic"
					layout="vertical"
					onFinish={onFinish}
					autoComplete="on"
					initialValues={{
						date: dayjs(dayjs(new Date()).format('DD/MM/YYYY'), 'DD/MM/YYYY'),
					}}
				>
					<Row gutter={24}>
						<Col span={12} xs={24}>
							<Form.Item<FieldType>
								label={'Họ và tên'}
								name="username"
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập họ và tên!',
									},
								]}
							>
								<Input size="large" placeholder={'Họ và tên của bạn'} />
							</Form.Item>
						</Col>

						<Col span={12} xs={24}>
							<Form.Item<FieldType>
								label={'Số điện thoại'}
								name="phone"
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập số điện thoại của bạn!',
									},
								]}
							>
								<Input size="large" placeholder={'Số điện thoại của bạn'} />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item<FieldType>
								label={'Chọn xe bạn muốn lái thử'}
								name="car"
								rules={[
									{
										required: true,
										message: 'Vui lòng chọn xe bạn muốn lái thử!',
									},
								]}
							>
								<Checkbox.Group style={{ width: '100%' }}>
									<Row gutter={[40, 15]}>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-ranger">Ford Ranger</Checkbox>
										</Col>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-everest">Ford Everest</Checkbox>
										</Col>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-ranger-raptor">
												Ford Ranger Raptor
											</Checkbox>
										</Col>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-territory">Ford Territory</Checkbox>
										</Col>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-explorer">Ford Explorer</Checkbox>
										</Col>
										<Col span={8} xs={12} sm={12} md={8} lg={8}>
											<Checkbox value="ford-transit">Ford Transit</Checkbox>
										</Col>
									</Row>
								</Checkbox.Group>
							</Form.Item>
						</Col>

						<Col span={24}>
							<Form.Item<FieldType>
								label={'Ngày lái thử'}
								name="date"
								rules={[
									{
										required: true,
										message: 'Vui lòng chọn ngày lái thử!',
									},
								]}
								className="!w-full"
							>
								<DatePicker
									width={'100%'}
									className="!w-full"
									format={'DD/MM/YYYY'}
									placeholder={'Ngày bạn muốn lái thử'}
									size="large"
									value={dayjs(
										dayjs(new Date()).format('DD/MM/YYYY'),
										'DD/MM/YYYY'
									)}
									defaultValue={dayjs(
										dayjs(new Date()).format('DD/MM/YYYY'),
										'DD/MM/YYYY'
									)}
								/>
							</Form.Item>
						</Col>

						<Col span={24}>
							<Form.Item<FieldType> label={'Lời nhắn'} name="message">
								<Input.TextArea
									size="large"
									placeholder={'Lời nhắn của bạn (nếu có)'}
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

export default memo(LaiThuXe);
