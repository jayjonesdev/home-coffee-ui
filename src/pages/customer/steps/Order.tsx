import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

export const Order = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<TextField required id='outlined-required' label='Name' />
			<FormControl>
				<FormLabel id='demo-radio-buttons-group-label'>Drink</FormLabel>
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
				</RadioGroup>
			</FormControl>
		</div>
	);
};
