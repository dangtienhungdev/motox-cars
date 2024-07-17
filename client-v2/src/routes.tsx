import { createBrowserRouter } from 'react-router-dom';
import LayoutCars from './layouts';
import HomePage from './pages';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <LayoutCars />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);
