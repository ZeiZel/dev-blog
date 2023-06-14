import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
