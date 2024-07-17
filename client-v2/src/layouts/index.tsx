import { Outlet } from 'react-router-dom';
import HeaderSectionStart from './header-setion-start';
import HeaderTopSelectionStart from './header-top-selection-start';

const LayoutCars = () => {
	return (
		<div>
			<HeaderTopSelectionStart />

			<HeaderSectionStart />
			<Outlet />
		</div>
	);
};

export default LayoutCars;
