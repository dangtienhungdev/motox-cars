import { formatCurrency } from '@/utils/fomatCurrency';
import Image from 'next/image';
import { memo } from 'react';

const ThongSoKyThuat = ({ thongSo }: { thongSo: any }) => {
	console.log('🚀 ~ ThongSoKyThuat ~ thongSo:', thongSo);
	if (!thongSo) {
		return <p className="">Chúng tôi đang cập nhật thông số xe</p>;
	}
	return (
		<section className="grid grid-cols-3 gap-6">
			{thongSo.map((thongSoItem: any) => {
				return (
					<section className="shadow rounded-md" key={thongSoItem.id}>
						<section>
							<Image
								src={thongSoItem.image}
								alt={thongSoItem.title}
								height={150}
								width={150}
								className="h-[160px] w-full object-cover"
							/>
						</section>
						<section className="px-8 py-6">
							<h4 className="font-semibold lg:text-2xl text-lg text-primary">
								{thongSoItem.title}
							</h4>

							<p className="">{formatCurrency(Number(thongSoItem.price))}</p>
						</section>

						<section>
							{thongSoItem.info.map(
								(
									moTaThongSo: { title: string; desc: string[] },
									index: number
								) => {
									return (
										<section
											className="px-8 py-5 odd:bg-white even:bg-[#f7f7f7] pb-12"
											key={`${moTaThongSo.title} ${index}`}
										>
											<p className="text-lg font-medium text-primary text-center mb-3">
												{moTaThongSo.title}
											</p>
											<ul className="list-disc px-4 flex flex-col gap-2">
												{moTaThongSo.desc.map((moTaDesc, index) => {
													return (
														<li
															className="text-sm"
															key={`${index} ${moTaDesc}`}
														>
															{moTaDesc}
														</li>
													);
												})}
											</ul>
										</section>
									);
								}
							)}
						</section>
					</section>
				);
			})}
		</section>
	);
};

export default memo(ThongSoKyThuat);
