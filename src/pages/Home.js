import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
	Fade,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
	colors,
	Button,
	useMediaQuery,
	useTheme,
} from '@mui/material';

const Home = () => {
	let navigate = useNavigate();
	return (
		<Container maxWidth='md'>
			<Fade in>
				<Wrapper>
					<Paper
						elevation={2}
						sx={{
							padding: '2.5em 2.5em',
							maxWidth: useMediaQuery(
								useTheme().breakpoints.up('lg')
							)
								? '750px'
								: '500px',
						}}>
						<Stack
							direction='column'
							alignItems='center'
							spacing={2}>
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='center'
								spacing={1}>
								<Grid item>
									<Stack
										justifyContent='center'
										alignItems='center'>
										<Logo
											alt='Logo'
											src={
												process.env.PUBLIC_URL +
												'/assets/images/logo.png'
											}
										/>
									</Stack>
								</Grid>
								<Grid item>
									<Typography
										variant={
											useMediaQuery(
												useTheme().breakpoints.up('lg')
											)
												? 'h1'
												: 'h3'
										}>
										CTCoin
									</Typography>
								</Grid>
							</Grid>

							<Stack alignItems='center' spacing={2}>
								<Typography
									variant='body1'
									align='center'
									sx={{ maxWidth: '300px' }}>
									Create an account or login to existing
									account using Metamask Wallet or Coinbase
									Wallet
								</Typography>

								<Stack
									direction={
										useMediaQuery(
											useTheme().breakpoints.up('lg')
										)
											? 'row'
											: 'column'
									}
									justifyContent='center'
									alignItems='stretch'
									spacing={0.5}
									sx={{
										maxWidth: useMediaQuery(
											useTheme().breakpoints.up('lg')
										)
											? '500px'
											: '300px',
									}}>
									<Button
										variant='contained'
										size='small'
										onClick={() => {
											navigate('/dashboard');
										}}
										startIcon={
											<WalletIcon
												alt='metamask connect wallet'
												src={
													process.env.PUBLIC_URL +
													'assets/images/metamask-logo.png'
												}
											/>
										}>
										Connect To Metamask
									</Button>
									<Button
										variant='contained'
										size='small'
										startIcon={
											<WalletIcon
												alt='coinbase connect wallet'
												src={
													process.env.PUBLIC_URL +
													'assets/images/coinbase-logo.png'
												}
											/>
										}>
										Connect To Coinbase
									</Button>
								</Stack>
							</Stack>
						</Stack>
					</Paper>
					<Stack mt={2}>
						<Typography
							variant='subtitle2'
							color={colors.grey[800]}>
							Created by <b>The Waterhouse Foundation</b>
						</Typography>
					</Stack>
				</Wrapper>
			</Fade>
		</Container>
	);
};

export default Home;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Logo = styled.img`
	width: ${() =>
		useMediaQuery(useTheme().breakpoints.up('lg')) ? '150px' : '75px'};
`;

const WalletIcon = styled.img`
	width: 24px;
`;

