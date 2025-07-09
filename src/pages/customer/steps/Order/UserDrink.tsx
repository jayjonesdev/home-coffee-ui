import { Delete } from '@mui/icons-material';
import { Paper, Typography, IconButton } from '@mui/material';
import type { Drink } from '../../../../utils/types';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';
import { userDrinkStyle } from '../../styles';

export const UserDrink = ({ drink }: { drink: Drink }) => {
	const [order, setOrder] = useAtom(userOrder);

	const deleteDrink = (id: string) => {
		setOrder((prev) => ({
			...prev,
			cart: order.cart.filter((drink) => drink.id !== id),
		}));
	};
	console.log(order.cart);
	return (
		<Paper
			elevation={5}
			key={drink.id}
			style={userDrinkStyle}
			data-testid={`user-drink-${drink.id}`}
		>
			<div>
				<Typography variant='h6'>{drink.name}</Typography>
				<Typography fontStyle='bold'>{drink.options}</Typography>
			</div>
			<IconButton
				data-testid={`user-drink-${drink.id}-delete`}
				style={{ color: 'white' }}
				onClick={() => deleteDrink(drink.id)}
			>
				<Delete />
			</IconButton>
		</Paper>
	);
};
