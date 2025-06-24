import {
	Button,
	FormControl,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import useDrinks from '../../../../utils/hooks/useDrinks';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';
import { generateID } from '../../../../utils/helper';
import {
	customerDrinksStyle,
	fullPageStyle,
	selectDrinkStyle,
} from '../../styles';
import { UserDrink } from './UserDrink';
import { MenuDrink } from './MenuDrink';

export const Order = () => {
	const drinks = useDrinks();
	const [order, setOrder] = useAtom(userOrder);

	const isValidOrder =
		order.drink.length > 0 &&
		Object.values(order.options).reduce(
			(acc, curr) => curr.length > 0 && acc,
			true,
		);

	const convertDrink = () => {
		const drinkOptions = Object.entries(order.options)
			.map(([key, value]) => `${key}: ${value}`)
			.join(', ');
		return {
			id: generateID(),
			name: order.drink,
			options: drinkOptions,
		};
	};

	const addToCard = () => {
		setOrder((prev) => ({
			...prev,
			drink: '',
			options: {},
			cart: [...prev.cart, convertDrink()],
		}));
	};

	return (
		<>
			<div style={{ paddingBlockStart: 30 }}>
				<TextField
					required
					id='order-name'
					label='Name'
					fullWidth
					value={order.name}
					onChange={(value) =>
						setOrder((prev) => ({ ...prev, name: value.target.value }))
					}
				/>
			</div>
			<div style={fullPageStyle}>
				<div style={selectDrinkStyle}>
					<Typography variant='h6' gutterBottom>
						Select a drink
					</Typography>
					<FormControl>
						<RadioGroup
							name='drinks-radio-group'
							value={order.drink}
							style={{ paddingInlineStart: 25 }}
						>
							{drinks.map(({ name, options }) => (
								<MenuDrink name={name} options={options} />
							))}
						</RadioGroup>
						<Button
							style={{ marginBlockStart: 10, width: '30%' }}
							variant='contained'
							color='primary'
							onClick={addToCard}
							disabled={!isValidOrder}
						>
							Add to cart
						</Button>
					</FormControl>
				</div>
				<div style={customerDrinksStyle}>
					{order.cart.length > 0 && (
						<div style={{ paddingBlockStart: 20 }}>
							<Typography variant='h6' gutterBottom>
								Cart
							</Typography>
							<div style={{ overflowY: 'auto' }}>
								{order.cart.map((drink) => (
									<UserDrink drink={drink} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
