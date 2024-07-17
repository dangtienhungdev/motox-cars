const NhanBaoGiaXe = () => {
	return (
		<div
			className="bg-cover pickup-loaction-area"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/dcwdrvxdg/image/upload/v1721230350/tran-xuan-hieu/banner/brand-bg_kcnbwg.png")',
			}}
		>
			<div className="container">
				<div className="pickup-wrapper wow fadeInUp" data-wow-delay=".4s">
					<div className="pickup-items">
						<label className="field-label">Tên của bạn</label>
						<div className="category-oneadjust">
							<select name="cate" className="category">
								<option value={1}>Select Location</option>
								<option value={1}>Houston</option>
								<option value={1}>Texas</option>
								<option value={1}>New York</option>
								<option value={1}>Other Location</option>
							</select>
						</div>
					</div>
					<div className="pickup-items">
						<label className="field-label">Số điện thoại của bạn</label>
						<div
							id="datepicker"
							className="input-group date"
							data-date-format="dd-mm-yyyy"
						>
							<input
								className="form-control"
								type="text"
								placeholder="Check in"
								readOnly
							/>
							<span className="input-group-addon">
								{' '}
								<i className="fa-solid fa-calendar-days" />
							</span>
						</div>
					</div>
					<div className="pickup-items">
						<label className="field-label">Ngày bạn muốn đến</label>
						<div
							id="datepicker2"
							className="input-group date"
							data-date-format="dd-mm-yyyy"
						>
							<input
								className="form-control"
								type="text"
								placeholder="Check in"
								readOnly
							/>
							<span className="input-group-addon">
								{' '}
								<i className="fa-solid fa-calendar-days" />
							</span>
						</div>
					</div>
					<div className="pickup-items">
						<label className="field-label">Dòng xe quan tâm</label>
						<div className="category-oneadjust">
							<select name="cate" className="category">
								<option value={1}>cars</option>
								<option value={1}>sedan</option>
								<option value={1}>sports</option>
								<option value={1}>jeep</option>
								<option value={1}>limousine</option>
							</select>
						</div>
					</div>
					<div className="pickup-items">
						<label className="field-label style-2">button</label>
						<button className="pickup-btn" type="submit">
							Báo giá xe
						</button>
					</div>
				</div>
				<div className="brand-wrapper pt-80 pb-80"></div>
			</div>
		</div>
	);
};

export default NhanBaoGiaXe;
