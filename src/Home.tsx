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
import styled from '@emotion/styled';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Logo = styled.a`
	margin-block: 45px;
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	> * {
		margin-block: 10px;
	}
`;

const BaristaButton = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Home = () => {
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
						onClick={() => setShowPasswordField((current) => !current)}
					>
						Barista
					</Button>
					{showPasswordField && (
						<FormControl variant='outlined'>
							<InputLabel htmlFor='outlined-adornment-password'>
								Password
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								type='password'
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											// aria-label={
											// 	showPassword
											// 		? 'hide the password'
											// 		: 'display the password'
											// }
											// onClick={handleClickShowPassword}
											// onMouseDown={handleMouseDownPassword}
											// onMouseUp={handleMouseUpPassword}
											edge='end'
										>
											<ArrowForwardIcon />
										</IconButton>
									</InputAdornment>
								}
								label='Password'
							/>
						</FormControl>
					)}
				</BaristaButton>
				<Button size='large' variant='contained'>
					Customer
				</Button>
			</ButtonGroup>
		</Container>
	);
};
