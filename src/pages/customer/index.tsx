import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router';
import useSteps from '../../utils/hooks/useSteps';
import { stepContainerStyle } from './styles';
import { useAtom } from 'jotai';
import { userOrder } from '../../utils/atom';

export const Customer = () => {
	const navigate = useNavigate();
	const steps = useSteps();
	const [order] = useAtom(userOrder);
	const [activeStep, setActiveStep] = React.useState(0);

	const isStepOneValid = order.name.length > 0 && order.cart.length > 0;
	const isStepValid = activeStep === 0 ? isStepOneValid : true;

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
		<Paper style={stepContainerStyle}>
			<Stepper activeStep={activeStep}>
				{steps.map(({ name }) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};
					return (
						<Step key={name} {...stepProps}>
							<StepLabel {...labelProps}>{name}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				// Add thank you screen
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					{steps[activeStep].component}
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button color='inherit' onClick={handleBack} sx={{ mr: 1 }}>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button
							onClick={handleNext}
							disabled={!isStepValid}
							style={{
								cursor: isStepValid ? 'pointer' : 'not-allowed',
								pointerEvents: 'auto',
							}}
						>
							{activeStep === steps.length - 1 ? 'Submit' : 'Next'}
						</Button>
					</Box>
				</>
			)}
		</Paper>
	);
};
