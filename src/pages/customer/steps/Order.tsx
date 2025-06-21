import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import useDrinks from '../../../hooks/useDrinks';
import { Add } from '@mui/icons-material';

export const Order = () => {
	const drinks = useDrinks();
	const [showMenu, setShowMenu] = useState(false);
	const order = [];

	const addDrinkClick = () => setShowMenu(true)

	return (
		<div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '100%', paddingBlock: 50 }}>
			<TextField required id='outlined-required' label='Name' />
			<Button fullWidth startIcon={<Add />} onClick={addDrinkClick}>Add drink</Button>
			{showMenu && <FormControl>
				{drinks.map((drink) => {
					return (
						<FormLabel id='drink-name'>{drink.name}</FormLabel>
					)
				})}
				{/* <FormLabel id='demo-radio-buttons-group-label'>Drink</FormLabel>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='female'
					name='radio-buttons-group'
				>
					<FormControlLabel value='female' control={<Radio />} label='Latte' />
					<FormControlLabel
						value='espresso'
						control={<Radio />}
						label='Espresso'
					/>
					<FormControlLabel
						value='pour_over'
						control={<Radio />}
						label='Pour over'
					/>
					<FormControlLabel value='tea' control={<Radio />} label='Tea' />
					<FormControlLabel value='matcha' control={<Radio />} label='Matcha' />
				</RadioGroup> */}
			</FormControl>}
		</div>
	);
};
