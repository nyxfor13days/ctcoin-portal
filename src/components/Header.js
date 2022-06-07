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
	MenuRounded,
	DoubleArrowRounded,
	CompareArrowsRounded,
	ShoppingCartRounded,
	CollectionsRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
	const [navigationAnchorEl, setNavigationAnchorEl] = useState(null);
	const openNavigationMenu = Boolean(navigationAnchorEl);
	const handleNavigationClick = (event) => {
		setNavigationAnchorEl(event.currentTarget);
	};
	const handleNavigationClose = () => {
		setNavigationAnchorEl(null);
	};

	const [accountAnchorEl, setAccountAnchorEl] = useState(null);
	const openAccountMenu = Boolean(accountAnchorEl);
	const handleAccountClick = (event) => {
		setAccountAnchorEl(event.currentTarget);
	};
	const handleAccountClose = () => {
		setAccountAnchorEl(null);
	};

	return (
		<AppBar position='fixed' color='transparent'>
			<Toolbar variant='dense'>
				<Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'>
					<Grid item xs={3}>
						<IconButton
							id='navigation-button'
							aria-controls={
								openNavigationMenu
									? 'navigation-menu'
									: undefined
							}
							aria-haspopup='true'
							aria-expanded={
								openNavigationMenu ? 'true' : undefined
							}
							onClick={handleNavigationClick}>
							<MenuRounded color='primary' />
						</IconButton>

						<Menu
							id='navigation-menu'
							anchorEl={navigationAnchorEl}
							keepMounted
							open={openNavigationMenu}
							onClose={handleNavigationClose}>
							<MenuItem onClick={handleNavigationClose}>
								<Link to='/transfer'>
									<Stack
										direction='row'
										alignItems='center'
										sx={{ minWidth: '200px' }}>
										<ListItemText>Transfer</ListItemText>
										<DoubleArrowRounded color='primary' />
									</Stack>
								</Link>
							</MenuItem>

							<MenuItem onClick={handleNavigationClose}>
								<Link to='/convert'>
									<Stack
										direction='row'
										alignItems='center'
										sx={{ minWidth: '200px' }}>
										<ListItemText>Convert</ListItemText>
										<CompareArrowsRounded color='primary' />
									</Stack>
								</Link>
							</MenuItem>

							<MenuItem onClick={handleNavigationClose}>
								<Link to='/buy'>
									<Stack
										direction='row'
										alignItems='center'
										sx={{ minWidth: '200px' }}>
										<ListItemText>Buy</ListItemText>
										<ShoppingCartRounded color='primary' />
									</Stack>
								</Link>
							</MenuItem>

							<MenuItem onClick={handleNavigationClose}>
								<Link to='/nft-marketplace'>
									<Stack
										direction='row'
										alignItems='center'
										sx={{ minWidth: '200px' }}>
										<ListItemText>
											NFT Marketplace
										</ListItemText>
										<CollectionsRounded color='primary' />
									</Stack>
								</Link>
							</MenuItem>
						</Menu>
					</Grid>

					<Grid item xs={6}>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							spacing={2}>
							<Logo
								alt='Logo'
								src={
									process.env.PUBLIC_URL +
									'/assets/images/logo.png'
								}
							/>
						</Stack>
					</Grid>

					<Grid item xs={3}>
						<Stack
							direction='row'
							justifyContent='flex-end'
							alignItems='center'
							spacing={0.5}>
							<IconButton
								id='menu-button'
								aria-controls={
									openAccountMenu ? 'account-menu' : undefined
								}
								aria-haspopup='true'
								aria-expanded={
									openAccountMenu ? 'true' : undefined
								}
								onClick={handleAccountClick}>
								<AccountCircleRounded color='primary' />
							</IconButton>

							<Menu
								id='account-menu'
								anchorEl={accountAnchorEl}
								open={openAccountMenu}
								onClose={handleAccountClose}>
								<MenuItem onClick={handleAccountClose}>
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

								<MenuItem onClick={handleAccountClose}>
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

								<MenuItem onClick={handleAccountClose}>
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

