import { createBrowserRouter } from 'react-router';
import { Home } from './pages/home';
import { Order } from './pages/customer/order';
import { Orders } from './pages/barista/orders';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/order',
		element: <Order />,
	},
	{
		path: '/orders',
		element: <Orders />,
	},
]);
