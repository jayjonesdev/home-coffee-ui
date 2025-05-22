import { createBrowserRouter } from 'react-router';
import { Home } from './pages/home';
import { CustomerOrder } from './pages/customer/order';
import { Orders } from './pages/barista/orders';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/order',
		element: <CustomerOrder />,
	},
	{
		path: '/orders',
		element: <Orders />,
	},
]);
