import { useState } from 'react';
import viteLogo from '/vite.svg';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
	Logo,
	BaristaButton,
	Container,
	ButtonGroup
} from './styled';
import { SlideIn } from '../../components/animations/SlideIn';
import { useNavigate } from 'react-router';

export const Home = () => {
	const navigate = useNavigate();
	const [showPasswordField, setShowPasswordField] = useState(false);

	return (
		<Container>
			<Logo href='https://vite.dev' target='_blank'>
				<img src={viteLogo} className='logo' alt='Vite logo' />
			</Logo>
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
						<FormControl data-testid='password-field' size='small' fullWidth variant='outlined'>
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
				<Button data-testid='customer-button' size='large' variant='contained' onClick={() => navigate('/order')}>
					Customer
				</Button>
			</ButtonGroup>
		</Container>
	);
};
