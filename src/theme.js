import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#a3be8c',
		},
		secondary: {
			main: '#c9e265',
		},
		background: {
			default: '#1c1c1c',
			paper: '#232323',
		},
		text: {
			primary: '#eceff4',
		},
	},
	typography: {
		fontFamily: 'Roboto',
		h1: {
			fontSize: '3rem',
		},
		h2: {
			fontSize: '2.5rem',
		},
		h3: {
			fontSize: '2rem',
		},
		h4: {
			fontSize: '1.7rem',
		},
		button: {
			fontWeight: 500,
		},
	},
	spacing: 15,
	shape: {
		borderRadius: 5,
	},
	props: {
		MuiAppBar: {
			color: 'transparent',
		},
		MuiTooltip: {
			arrow: true,
		},
	},
});

