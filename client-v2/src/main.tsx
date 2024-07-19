import './index.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './theme-antd.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ConfigProvider theme={theme}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);
