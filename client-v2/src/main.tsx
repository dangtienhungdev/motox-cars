import './index.css';
import './styles/all.min.css';
import './styles/animate.css';
import './styles/bootstrap.min.css';
import './styles/datepickerboot.css';
import './styles/magnific-popup.css';
import './styles/main.css';
import './styles/meanmenu.css';
import './styles/nice-select.css';
import './styles/swiper-bundle.min.css';

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
