import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';

export const DrinkOption = ({
	optionKey,
	name,
}: {
	optionKey: string;
	name: string;
}) => {
	const [order, setOrder] = useAtom(userOrder);

	return (
		<Button
			variant={order.options[optionKey] === name ? 'contained' : 'outlined'}
			onClick={() => {
				setOrder((prev) => ({
					...prev,
					options: {
						...prev.options,
						[optionKey]: name,
					},
				}));
			}}
		>
			{name}
		</Button>
	);
};
