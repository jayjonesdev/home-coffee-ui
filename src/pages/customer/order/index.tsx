import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Order } from '../steps/Order';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router';

const steps = ['Order', 'Review'];

export const CustomerOrder = () => {
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		if (activeStep === 0) {
			navigate('/');
		}
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Paper
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '90vh',
				padding: 25,
				width: '60vw',
			}}
		>
			<Stepper activeStep={activeStep}>
				{steps.map((label) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Order />
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button color='inherit' onClick={handleBack} sx={{ mr: 1 }}>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? 'Submit' : 'Next'}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Paper>
	);
};
