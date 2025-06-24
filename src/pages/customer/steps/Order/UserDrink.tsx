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

	return (
		<Paper elevation={5} key={drink.id} style={userDrinkStyle}>
			<div>
				<Typography variant='h6'>{drink.name}</Typography>
				<Typography fontStyle='bold'>{drink.options}</Typography>
			</div>
			<IconButton
				style={{ color: 'white' }}
				onClick={() => deleteDrink(drink.id)}
			>
				<Delete />
			</IconButton>
		</Paper>
	);
};
