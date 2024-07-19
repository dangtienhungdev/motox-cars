import { createBrowserRouter } from 'react-router-dom';
import LayoutCars from './layouts';
import HomePage from './pages';
import Introduce from './pages/introduce';
import NotFound from './pages/not-found';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <LayoutCars />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/introduce',
				element: <Introduce />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
