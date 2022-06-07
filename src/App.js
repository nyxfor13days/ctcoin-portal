import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';

import Home from './pages/Home';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;

