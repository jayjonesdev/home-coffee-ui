import { useState } from 'react';
import logo from '/logo.png';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BaristaButton, ButtonGroup } from './styled';
import { SlideIn } from '../../components/animations/SlideIn';
import { useNavigate } from 'react-router';

export const Home = () => {
	const navigate = useNavigate();
	const [showPasswordField, setShowPasswordField] = useState(false);

	return (
		<Paper
			elevation={5}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: 600,
				width: 600,
			}}
		>
			<img src={logo} style={{ width: 400, height: 400 }} alt='Coffee logo' />
			<ButtonGroup>
				<BaristaButton>
					<Button
						size='large'
						variant='outlined'
						data-testid='barista-button'
						style={{ marginBlock: 10 }}
						onClick={() => setShowPasswordField((current) => !current)}
					>
						Barista
					</Button>
					<SlideIn show={showPasswordField}>
						<FormControl
							data-testid='password-field'
							size='small'
							fullWidth
							variant='outlined'
						>
							<InputLabel htmlFor='outlined-adornment-password'>
								Password
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								type='password'
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											data-testid='password-enter-button'
											aria-label='enter barista password'
											onClick={() => navigate('/orders')}
											edge='end'
										>
											<ArrowForwardIcon />
										</IconButton>
									</InputAdornment>
								}
								label='Password'
							/>
						</FormControl>
					</SlideIn>
				</BaristaButton>
				<Button
					data-testid='customer-button'
					size='large'
					variant='contained'
					onClick={() => navigate('/order')}
				>
					Customer
				</Button>
			</ButtonGroup>
		</Paper>
	);
};
