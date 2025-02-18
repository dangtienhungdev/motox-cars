import { createBrowserRouter } from "react-router-dom";
import AdsComponent from "./components/add-component";
import LayoutCars from "./layouts";
import HomePage from "./pages";
import CarPage from "./pages/cars";
import CarDetail from "./pages/cars/car-detail";
import ContactPage from "./pages/contact";
import Introduce from "./pages/introduce";
import NotFound from "./pages/not-found";
import PriceList from "./pages/price-list";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <LayoutCars />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/introduce",
				element: <Introduce />,
			},
			{
				path: "/price-list",
				element: <PriceList />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/cars",
				element: <CarPage />,
			},
			{
				path: "/car/:id",
				element: <CarDetail />,
			},
			{
				path: "/ads",
				element: (
					<div>
						test ads
						<AdsComponent dataAdSlot="2596231998" />
					</div>
				),
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
