import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Transfer from './pages/Transfer';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/transfer' element={<Transfer />} />
					<Route path='/convert' element={<div>convert</div>} />
					<Route path='/buy' element={<div>buy</div>} />
					<Route
						path='/nft-marketplace'
						element={<div>nft-marketplace</div>}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;

