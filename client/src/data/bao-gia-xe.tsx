const baoGiaXeData = {
	title: 'Đăng ký nhận báo giá xe',
	sendButton: 'Gửi yêu cầu báo giá',
	desc: /*html*/ `Chào anh chị, để nhận được <span className="font-semibold">“Báo giá đặc biệt”</span> từ <span className="font-semibold">Ford Hà Thành</span>, các anh chị hãy liên hệ ngay cho Hotline theo số <span className="font-semibold">083.3096.605</span> hoặc điền thông tin vào font báo giá dưới đây. Xin cảm ơn!`,
	form: {
		username: {
			title: 'Họ và tên',
			placeholder: 'Nhập họ và tên',
		},
		phone: {
			title: 'Số điện thoại',
			placeholder: 'Nhập số điện thoại',
		},
		email: {
			title: 'Email',
			placeholder: 'Nhập email',
		},
		hinhThucMua: {
			title: 'Hình thức mua',
			placeholder: 'Chọn hình thức mua',
		},
		message: {
			title: 'Lời nhắn',
			placeholder: 'Nhập lời nhắn',
		},
		chonXe: {
			title: 'Chọn xe',
			placeholder: 'Chọn xe',
		},
		validate: {
			username: 'Vui lòng nhập họ tên',
			phone: 'Vui lòng nhập số điện thoại',
			email: 'Vui lòng nhập email',
			hinhThucMua: 'Vui lòng chọn hình thức mua',
			notEmail: 'Email không hợp lệ',
			notPhone: 'Số điện thoại không hợp lệ',
			chonXe: 'Vui lòng chọn xe cần báo giá',
		},
	},
	sp: [
		{
			id: 1,
			value: 'Xe SUV',
			children: [
				{
					id: 1,
					label: 'Ford Territory',
					children: [
						{
							id: 1,
							value: 'Ford Territory Titanium X 1.5L AT',
							price: '954000000',
						},
						{
							id: 2,
							value: 'Ford Territory Titanium 1.5L AT',
							price: '909000000',
						},
						{
							id: 3,
							value: 'Ford Territory Trend 1.5L AT',
							price: '822000000',
						},
					],
				},
				{
					id: 2,
					value: 'Ford Everest',
					children: [
						{
							id: 1,
							value: 'Ford Everest Platinum 4×4 AT',
							price: '0',
						},
						{
							id: 2,
							value: 'Ford Everest Titanium+ 4×4 AT',
							price: '1468000000',
						},
						{
							id: 3,
							value: 'Ford Everest Titanium AT 4×2 AT',
							price: '1299000000',
						},
						{
							id: 4,
							value: 'Ford Everest Sport 4×2 AT',
							price: '1178000000',
						},
						{
							id: 5,
							value: 'Ford Everest Ambient 4×2 AT',
							price: '1099000000',
						},
					],
				},
				{
					id: 3,
					value: 'Ford Explorer',
					children: [
						{
							id: 1,
							value: 'Ford Explorer Limited ',
							price: '2439000000',
						},
					],
				},
			],
		},
		{
			id: 2,
			value: 'Xe Thương Mại',
			children: [
				{
					id: 1,
					value: 'Ford Ranger Raptor',
					children: [
						{
							id: 1,
							value: 'Ford Ranger Raptor 2024',
							price: '1299000000',
						},
					],
				},
				{
					id: 2,
					value: 'Ford Transit',
					children: [
						{
							id: 1,
							value: 'Ford Transit 2024',
							price: '849000000',
						},
					],
				},
			],
		},
	],
};

export default baoGiaXeData;
