import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
	Fade,
	Container,
	Typography,
	Stack,
	Grow,
	Button,
} from '@mui/material';

const NotFound = () => {
	let navigate = useNavigate();

	return (
		<Fade in>
			<Container maxWidth='xs'>
				<Wrapper>
					<Stack
						direction='column'
						justifyContent='center'
						alignItems='center'
						spacing={1}>
						<Grow in>
							<AnimatedImage
								alt='not found gif'
								src='https://media.giphy.com/media/Asb0LwwJP9o9Y2VZip/giphy.gif'
							/>
						</Grow>
						<Typography variant='h2' align='center'>
							Page Not Found
						</Typography>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								navigate('/');
							}}>
							Go back
						</Button>
					</Stack>
				</Wrapper>
			</Container>
		</Fade>
	);
};

export default NotFound;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	overflow: hidden;
`;

const AnimatedImage = styled.img`
	width: 150px;
`;

