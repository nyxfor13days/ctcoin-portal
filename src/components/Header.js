import React, { useState } from 'react';
import styled from 'styled-components';
import {
	AppBar,
	Toolbar,
	Grid,
	Stack,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from '@mui/material';
import {
	AccountCircleRounded,
	AccountBalanceWalletRounded,
	LogoutRounded,
	CellTowerRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='fixed' color='transparent'>
			<Toolbar variant='dense'>
				<Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'>
					<Grid item xs={6}>
						<Stack
							direction='row'
							justifyContent='flex-start'
							alignItems='center'
							spacing={2}>
							<Logo
								alt='Logo'
								src={
									process.env.PUBLIC_URL +
									'/assets/images/logo.png'
								}
							/>

							<Stack direction='row' spacing={1}>
								<Link to='/dashboard'>
									<Typography variant='caption'>
										Transfer
									</Typography>
								</Link>

								<Link to='/dashboard'>
									<Typography variant='caption'>
										Convert
									</Typography>
								</Link>

								<Link to='/dashboard'>
									<Typography variant='caption'>
										Buy
									</Typography>
								</Link>

								<Link to='/dashboard'>
									<Typography variant='caption'>
										NFT Marketplace
									</Typography>
								</Link>
							</Stack>
						</Stack>
					</Grid>

					<Grid item xs={6}>
						<Stack
							direction='row'
							justifyContent='flex-end'
							alignItems='center'
							spacing={0.5}>
							<IconButton
								id='menu-button'
								aria-controls={open ? 'basic-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}>
								<AccountCircleRounded color='primary' />
							</IconButton>

							<Typography variant='caption'>
								0x93403...8B4
							</Typography>

							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									<ListItemIcon>
										<AccountBalanceWalletRounded
											color='primary'
											fontSize='small'
										/>
									</ListItemIcon>
									<ListItemText></ListItemText>
									<Typography
										variant='caption'
										color='disabled'>
										0.0 ETH
									</Typography>
								</MenuItem>

								<MenuItem onClick={handleClose}>
									<ListItemIcon>
										<CellTowerRounded
											color='primary'
											fontSize='small'
										/>
									</ListItemIcon>
									<ListItemText></ListItemText>
									<Typography
										variant='caption'
										color='disabled'>
										Rinkeby Network
									</Typography>
								</MenuItem>

								<Divider />

								<MenuItem onClick={handleClose}>
									<ListItemIcon>
										<LogoutRounded
											color='warning'
											fontSize='small'
										/>
									</ListItemIcon>
									<ListItemText></ListItemText>
									<Typography
										variant='caption'
										color='disabled'>
										Logout
									</Typography>
								</MenuItem>
							</Menu>
						</Stack>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

const Logo = styled.img`
	width: 36px;
`;

