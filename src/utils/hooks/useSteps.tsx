import { Order } from '../../pages/customer/steps/Order';
import { Review } from '../../pages/customer/steps/Review';

export const useSteps = (): {
	name: string;
	component: React.ReactElement;
}[] => {
	return [
		{
			name: 'Order',
			component: <Order />,
		},
		{
			name: 'Review',
			component: <Review />,
		},
	];
};

export default useSteps;
