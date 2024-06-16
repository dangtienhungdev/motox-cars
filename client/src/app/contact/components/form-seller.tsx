import { Button, Form, FormProps, Input } from 'antd';

import contactData from '@/data/contact';
import { memo } from 'react';

type FieldType = {
	username?: string;
	email?: string;
	phone?: string;
	message?: string;
};

const FormSeller = () => {
	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
	};

	return (
		<section>
			<Form
				name="basic"
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
			>
				<Form.Item<FieldType>
					name="username"
					rules={[
						{ required: true, message: contactData.contact.form.name.validate },
					]}
				>
					<Input
						placeholder={contactData.contact.form.name.title}
						size="large"
						prefix={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
								/>
							</svg>
						}
					/>
				</Form.Item>

				<Form.Item<FieldType> name="email">
					<Input
						placeholder={contactData.contact.form.email.title}
						size="large"
						prefix={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						}
					/>
				</Form.Item>

				<Form.Item<FieldType>
					name="phone"
					rules={[
						{
							required: true,
							message: contactData.contact.form.phone.validate,
						},
					]}
				>
					<Input
						placeholder={contactData.contact.form.phone.title}
						size="large"
						prefix={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
								/>
							</svg>
						}
					/>
				</Form.Item>

				<Form.Item<FieldType>
					name="message"
					rules={[
						{
							required: true,
							message: contactData.contact.form.message.validate,
						},
					]}
				>
					<Input.TextArea
						placeholder={contactData.contact.form.message.title}
						size="large"
					/>
				</Form.Item>

				<Form.Item className="mb-0">
					<Button
						type="primary"
						htmlType="submit"
						className="w-full"
						size="large"
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</section>
	);
};

export default memo(FormSeller);
