import { motion, useScroll } from 'framer-motion';

import { memo } from 'react';

const ScrollTop = () => {
	const { scrollYProgress } = useScroll();
	return (
		<motion.section
			className="fixed h-0.5 top-0 left-0 right-0 origin-[0%] bg-primary z-order-1"
			style={{ scaleX: scrollYProgress }}
		></motion.section>
	);
};

export default memo(ScrollTop);
