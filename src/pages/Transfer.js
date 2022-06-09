import React from 'react';
import Header from '../components/Header';
import { Container, Paper, Stack, Grid, Typography } from '@mui/material';
import EnterAddress from '../components/EnterAddress';

const Transfer = () => {
	return (
		<Container maxWidth='lg'>
			<Header />

			<Stack
				justifyContent='center'
				alignItems='center'
				sx={{
					height: '100vh',
				}}>
				<Paper
					sx={{
						padding: '2.5em',
					}}>
					<Stack justifyContent='center' alignItems='center'>
						<Grid
							container
							justifyContent='center'
							alignItems='center'
							spacing={2}>
							<Grid item xs={12}>
								<Stack
									direction='column'
									justifyContent='center'
									alignItems='center'
									spacing={2}>
									<Typography variant='h4'>
										Transfer
									</Typography>
								</Stack>
							</Grid>

							<Grid item={12}>
								<EnterAddress />
							</Grid>
						</Grid>
					</Stack>
				</Paper>
			</Stack>
		</Container>
	);
};

export default Transfer;

