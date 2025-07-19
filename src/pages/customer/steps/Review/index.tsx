import { useAtomValue } from 'jotai';
import { userOrder } from '../../../../utils/atom';
import { fullPageStyle } from '../../styles';
import { UserDrink } from '../Order/UserDrink';
import { Typography } from '@mui/material';

export const Review = () => {
	const order = useAtomValue(userOrder);

	return (
		<div
			style={{
				...fullPageStyle,
				paddingBlock: 30,
				paddingInline: 30,
				display: 'flex',
				flexDirection: 'column',
				overflowY: 'auto',
				maxHeight: 500,
			}}
		>
			<Typography variant='h6' gutterBottom>
				Review
			</Typography>
			<div style={{ overflowY: 'auto', width: '50%', flexWrap: 'wrap' }}>
				{order.cart.map((drink) => (
					<UserDrink drink={drink} readOnly />
				))}
			</div>
		</div>
	);
};
