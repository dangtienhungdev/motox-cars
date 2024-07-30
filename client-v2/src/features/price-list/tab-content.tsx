import { TPriceList } from '@/types/price-list';
import { formatCurrency } from '@/utils/format-currency';
import { Link } from 'react-router-dom';

interface TabContentProps {
	data: TPriceList;
	id: number;
}

const TabContent = ({ data, id }: TabContentProps) => {
	return (
		<div className="gap-4 row">
			{data.children.map((item) => {
				return (
					<div className="col-lg-12" key={item.id}>
						<div className="car-list-items style-2">
							<Link
								to={`/car/${item.id}?id=${id}&ford=${data.slug}`}
								className="tw-bg-contain tw-bg-center tw-bg-no-repeat car-image"
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							>
								<div className="post-cat">2024 Model</div>
							</Link>
							<div className="car-content">
								<h3>
									<Link to={`/car/${item.id}?id=${id}&ford=${data.slug}`}>
										{item.title}
									</Link>
								</h3>
								<div className="star">
									<span className="tw-text-base tw-font-medium tw-text-primary">
										{formatCurrency(Number(item.price))}
									</span>
								</div>
								<p>
									To deliver on the promise of technology and human ingenuity We
									help our clients become the next and best versions of
									themselves.
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TabContent;
