import React from 'react';
import { Fade, Container } from '@mui/material';
import Header from '../components/Header';

const Dashboard = () => {
	return (
		<Fade in>
			<Container maxWidth='lg'>
				<Header />
			</Container>
		</Fade>
	);
};

export default Dashboard;

