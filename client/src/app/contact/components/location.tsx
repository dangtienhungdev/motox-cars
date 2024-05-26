import { memo } from 'react';

const Location = () => {
	return (
		<section>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.2823706888331!2d105.78074658943775!3d21.02822169410474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b2de700001%3A0xce7671b253d40386!2zU8O0zIEgMiBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWkgMTAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1716705020766!5m2!1sen!2s"
				className="w-full"
				height={300}
				style={{ border: 0 }}
				allowFullScreen
				key={1}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</section>
	);
};

export default memo(Location);
