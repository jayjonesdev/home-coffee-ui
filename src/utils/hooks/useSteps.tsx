import { Order } from '../../pages/customer/steps/Order';

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
			component: <div />,
		},
	];
};

export default useSteps;
