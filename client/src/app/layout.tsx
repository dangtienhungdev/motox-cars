import '../styles/globals.css';

import CarsLayout from '@/layouts/cars-layout';
import theme from '@/styles/theme-antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ford Hà Thành',
	description: 'Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam',
	robots: 'index, follow',
	keywords:
		'Ford, Ford Việt Nam, Ford Hà Thành, báo giá xe ford, Ford everest, Ford ranger,Ford transit, Ford territory, Ford raptor, Giá xe  Ford everest, Giá xe Ford ranger,  Giá xe Ford transit, Giá xe Ford transit, Giá xe Ford raptor, Báo giá xe ford, Báo giá xe Ford everest, Báo giá xe Ford ranger, Báo giá xe Ford transit, Báo giá xe Ford territory, Báo giá xe Ford raptor, Thông số kĩ thuật xe  Ford everest, Thông số kĩ thuật xe Ford raptor, Thông số kĩ thuật xe Ford territory, Thông số kĩ thuật xe Ford transit, Thông số kĩ thuật xe Ford ranger, Thông số kĩ thuật xe  Ford everest',
	metadataBase: new URL('https://fordxuanhieu.com'),
	icons: {
		icon: '/public/images/favicon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				{/* meta gg */}
				<meta
					name="google-site-verification"
					content="0sVF4t_65vpYX_kLHBF8Kgy9QDOMQ1cwG_ln_EE4D38"
				/>

				{/* desctipion data */}
				<meta
					name="description"
					content="Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				{/* Keyword Metadata */}
				<meta name="keywords" content="Ford, Ford Việt Nam, Ford Hà Thành" />
				{/* Author Metadata */}
				<meta name="author" content="Ford Hà Thành" />
				{/* Robots Metadata */}
				<meta name="robots" content="index, follow" />
				{/* Google Meta Data */}
				<meta
					itemProp="name"
					content="Ford Hà Thành - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					itemProp="name"
					content="Ford Hà Thành - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					itemProp="description"
					content="Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				<meta
					itemProp="image"
					content="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				{/* Facebook Meta Data */}
				<meta
					property="og:title"
					content="Ford Hà Thành - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					property="og:description"
					content="Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				<meta property="og:url" content="https://fordxuanhieu.com" />
				<meta property="og:type" content="website" />
				{/* Twitter Meta Data */}
				<meta
					name="twitter:title"
					content="Ford Hà Thành - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					name="twitter:description"
					content="Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@hieutranxuan" />
				<meta name="twitter:site" content="@hieutranxuan" />
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<title>Ford Hà Thành - Website báo giá xe ford cho khách hàng</title>

				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				{/* canonical */}
				<link rel="canonical" href="https://fordxuanhieu.com" />
				{/* domain verify */}
				<meta
					name="google-site-verification"
					content="Z2vXQJ1RrY2Q2T6W9g9L6vzL6IY"
				/>
				{/* region */}
				<meta name="geo.region" content="VN-HN" />
				<meta name="geo.placename" content="Hà Nội" />
				<meta name="geo.position" content="21.028511;105.804817" />
				<meta name="ICBM" content="21.028511, 105.804817" />
				{/* mobile app */}
				<meta name="application-name" content="Ford Hà Thành" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="theme-color" content="#000000" />
				{/* manifest */}
				<link rel="manifest" href="/manifest.json" />
				{/* apple */}
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-touch-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-touch-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-touch-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-touch-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon-180x180.png"
				/>
				{/* favicon */}
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/public/images/favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/public/images/favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/public/images/favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/public/images/favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/public/images/favicon.png"
				/>
				{/* safari */}
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
				{/* ms */}
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				{/* google */}
				<meta name="google" content="notranslate" />
				{/* robots */}
				<meta name="robots" content="index, follow" />
				{/* facebook */}
				<meta property="og:locale" content="vi_VN" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Ford Hà Thành - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					property="og:description"
					content="Ford Hà Thành - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>

				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-0NVNREP043"
				></Script>
				{/* <script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'G-0NVNREP043');
				</script> */}
			</head>

			<body className={inter.className}>
				<AntdRegistry>
					<ConfigProvider prefixCls="ant" theme={{ ...theme }}>
						<CarsLayout>{children}</CarsLayout>
					</ConfigProvider>
				</AntdRegistry>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
