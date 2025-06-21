import { useState } from 'react';
import {
	Button,
	ButtonGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import useDrinks from '../../../../utils/hooks/useDrinks';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';
import { DrinkOption } from './DrinkOption';
import { flattenDrinkOptions } from '../../../../utils/helper';

export const Order = () => {
	const drinks = useDrinks();
	const [showMenu, setShowMenu] = useState(false);
	const [order, setOrder] = useAtom(userOrder);

	const addDrink = () => {
		setOrder((prev) => ({
			...prev,
			drink: drinks[0].name,
			options: flattenDrinkOptions(drinks[0].options),
		}));
		setShowMenu(true);
	};

	const getDrinkOptions = (options: { [key: string]: string[] }) => {
		return Object.entries(options).map(([key, options], index) => {
			return (
				<div key={index}>
					<FormLabel id={`drink-option-label-${key}`}>{key}</FormLabel>
					<ButtonGroup>
						{options.map((option) => (
							<DrinkOption key={key} optionKey={key} name={option} />
						))}
					</ButtonGroup>
				</div>
			);
		});
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '50%',
				height: '100%',
				paddingBlock: 50,
			}}
		>
			<TextField required id='order-name' label='Name' />
			{!showMenu && (
				<Button fullWidth startIcon={<Add />} onClick={addDrink}>
					Add drink
				</Button>
			)}
			{showMenu && (
				<FormControl>
					<RadioGroup name='drinks-radio-group' value={order.name}>
						{drinks.map(({ name, options }) => {
							return (
								<div key={name}>
									<FormControlLabel
										value={name}
										control={<Radio />}
										label={name}
										onClick={() =>
											setOrder((prev) => ({
												...prev,
												name,
												options: flattenDrinkOptions(options),
											}))
										}
									/>
									{name === order.name && getDrinkOptions(options)}
								</div>
							);
						})}
					</RadioGroup>
				</FormControl>
			)}
		</div>
	);
};
