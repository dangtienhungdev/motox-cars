import { memo } from 'react';

const Location = () => {
	return (
		<section>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.000058407259!2d105.890736!3d21.052682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99daa632481%3A0x4d07f84fe30be957!2zQ8O0bmcgdHkgQ1Agw5QgVMO0IFRoxrDGoW5nIE3huqFpIFF14buRYyBU4bq_IFZp4buHdA!5e0!3m2!1svi!2sus!4v1716619298103!5m2!1svi!2sus"
				// width={}
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
