import { Image } from 'antd';
import parse from 'html-react-parser';

const FordExplorer = ({ ford }: any) => {
	const { fordExplorer } = ford?.gioithieu?.info;

	if (!fordExplorer) {
		return null;
	}
	return (
		<section className="-mt-20 w-full flex flex-col gap-4">
			{fordExplorer?.imageFordExplorer1 && (
				<section className="w-full flex justify-center">
					<Image
						src={fordExplorer?.imageFordExplorer1}
						alt={fordExplorer?.imageFordExplorer1}
						className="!w-full mx-auto"
					/>
				</section>
			)}

			{fordExplorer?.des1 && (
				<p className="text-base">{parse(fordExplorer?.des1)}</p>
			)}
			{fordExplorer?.des2 && (
				<p className="text-base">{parse(fordExplorer?.des2)}</p>
			)}
			{fordExplorer?.ul1 && (
				<p className="text-base">{parse(fordExplorer?.ul1)}</p>
			)}
			{fordExplorer?.listDesc && (
				<ul className="text-base flex flex-col gap-2 ml-10">
					{fordExplorer?.listDesc?.map((item: string, index: number) => (
						<li className="text-base list-disc" key={`${index}${item}`}>
							{item}
						</li>
					))}
				</ul>
			)}

			{fordExplorer?.des3 && (
				<p className="text-base">{parse(fordExplorer?.des3)}</p>
			)}
		</section>
	);
};

export default FordExplorer;
