import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/transfer' element={<div>transfer</div>} />
					<Route path='/convert' element={<div>convert</div>} />
					<Route path='/buy' element={<div>buy</div>} />
					<Route
						path='/nft-marketplace'
						element={<div>nft-marketplace</div>}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;

