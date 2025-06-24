import { createBrowserRouter } from 'react-router';
import { Home } from './pages/home';
import { Customer } from './pages/customer';
import { Orders } from './pages/barista/orders';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/order',
		element: <Customer />,
	},
	{
		path: '/orders',
		element: <Orders />,
	},
]);
