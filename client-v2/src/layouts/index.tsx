import { Outlet } from 'react-router-dom';
import Footer from './footer';
import NavFooter from './footer/nav-footer';
import HeaderSectionStart from './header-setion-start';
import HeaderTopSelectionStart from './header-top-selection-start';

const LayoutCars = () => {
	return (
		<div>
			<HeaderTopSelectionStart />

			<HeaderSectionStart />
			<Outlet />

			<NavFooter />

			<Footer />
		</div>
	);
};

export default LayoutCars;
