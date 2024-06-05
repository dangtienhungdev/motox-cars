import FordItem from './item';
import { Table } from 'antd';
import { memo } from 'react';

const FordRanger = ({ ford }: any) => {
	const { gioithieu } = ford;
	const { info } = gioithieu;

	const columnThongSoKyThuatFordRanger = [
		{
			title: <span className="text-base font-medium">Tên thông số</span>,
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: <span className="text-base font-medium">Mô tả</span>,
			dataIndex: 'desc',
			key: 'desc',
		},
	];

	const thongSoKyThuatFordRanger = info?.fordRanger?.map(
		(item: { id: number; title: string; desc: string }) => {
			return {
				key: item.id,
				title: item.title,
				desc: item.desc,
			};
		}
	);
	return (
		<>
			{thongSoKyThuatFordRanger && (
				<Table
					size="small"
					columns={columnThongSoKyThuatFordRanger}
					dataSource={thongSoKyThuatFordRanger}
					pagination={false}
				/>
			)}

			{/* fordRangerStormtrak */}
			<FordItem data={info?.fordRangerStormtrak} />

			{/* fordRangerWildtrak */}
			<FordItem data={info?.fordRangerWildtrak} />

			{/* fordRangerSport */}
			<FordItem data={info?.fordRangerSport} />

			{/* fordRangerXLS44 */}
			<FordItem data={info?.fordRangerXLS44} />

			{/* fordRangerXLS42At */}
			<FordItem data={info?.fordRangerXLS42AT} />

			{/* fordRangerXLSMT */}
			<FordItem data={info?.fordRangerXLSMT} />
			{/* fordRangerXLMT2024 */}

			<FordItem data={info?.fordRangerXLMT2024} />
		</>
	);
};

export default memo(FordRanger);
