import {
	ButtonGroup,
	FormControlLabel,
	FormLabel,
	Radio,
	Typography,
} from '@mui/material';
import { flattenDrinkOptions } from '../../../../utils/helper';
import { useAtom } from 'jotai';
import { userOrder } from '../../../../utils/atom';
import { MenuDrinkOption } from './MenuDrinkOption';
import { drinkOptionStyle } from '../../styles';

export const MenuDrink = ({
	name,
	options,
}: {
	name: string;
	options: { [key: string]: string[] };
}) => {
	const [order, setOrder] = useAtom(userOrder);

	const getDrinkOptions = (options: { [key: string]: string[] }) => {
		return Object.entries(options).map(([key, options], index) => {
			return (
				<div key={index} style={drinkOptionStyle}>
					<FormLabel
						data-testid={`drink-option-label-${key}`}
						id={`drink-option-label-${key}`}
						style={{ width: '20%' }}
					>
						{key}
					</FormLabel>
					<ButtonGroup style={{ flexWrap: 'wrap' }}>
						{options.map((option) => (
							<MenuDrinkOption key={key} optionKey={key} name={option} />
						))}
					</ButtonGroup>
				</div>
			);
		});
	};

	return (
		<div key={name}>
			<FormControlLabel
				data-testid={`menu-drink-${name}`}
				value={name}
				control={<Radio />}
				label={<Typography style={{ fontWeight: 'bold' }}>{name}</Typography>}
				onClick={() =>
					setOrder((prev) => ({
						...prev,
						drink: name,
						options: flattenDrinkOptions(options),
					}))
				}
			/>
			{name === order.drink && getDrinkOptions(options)}
		</div>
	);
};
