import DongXe from '@/components/dong-xe';

export default function Home() {
	return (
		<section className="relative w-full">
			<section className="bg-[url('https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/desktop/Bronco_2160x926_Desktop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg')] bg-cover bg-center bg-no-repeat pt-[49%] w-full"></section>
			<section className="p-px80">
				<section className="text-center flex justify-center flex-col gap-3 items-center">
					<h2 className="text-base text-primary font-semibold w-fit text-center py-1 border-b-2 border-primary/100">
						Các mẫu xe tại Ford Hà Thành
					</h2>
					<p className="text-2xl font-semibold tracking-wide">
						LỰA CHỌN DÒNG XE FORD PHÙ HỢP VỚI BẠN
					</p>
				</section>

				<DongXe />
			</section>
		</section>
	);
}
