import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';

export const MenuDrinkOption = ({
	optionKey,
	name,
}: {
	optionKey: string;
	name: string;
}) => {
	const [order, setOrder] = useAtom(userOrder);

	return (
		<Button
			data-testid={`${name}-menu-drink-option`}
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
