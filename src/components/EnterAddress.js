import React from 'react';
import {
	Stepper,
	Step,
	StepLabel,
	Stack,
	InputBase,
	colors,
	IconButton,
} from '@mui/material';
import { Search, Contacts } from '@mui/icons-material';

const EnterAddress = () => {
	const steps = ['Enter Address', 'Enter Amount', 'Confirm Payment'];

	return (
		<Stack direction='column' alignItems='center' spacing={2}>
			<Stepper activeStep={0} alternativeLabel sx={{ width: '90%' }}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>

			<Stack
				direction='row'
				alignItems='center'
				spacing={1}
				sx={{
					padding: '0.25em 1em',
					border: '1px solid' + colors.lightGreen[300],
					borderRadius: 1,
				}}>
				<Search sx={{ color: colors.blueGrey[100] }} />
				<InputBase placeholder='Enter Address' />
				<IconButton>
					<Contacts sx={{ color: colors.blueGrey[100] }} />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default EnterAddress;

