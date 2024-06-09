import '../styles/globals.css';

import CarsLayout from '@/layouts/cars-layout';
import theme from '@/styles/theme-antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ford Xuân Hiếu',
	description: 'Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam',
	robots: 'index, follow',
	keywords: 'Ford, Ford Việt Nam, Ford Xuân Hiếu, báo giá xe ford',
	metadataBase: new URL('https://fordxuanhieu.com'),
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
				{/* desctipion data */}
				<meta
					name="description"
					content="Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				{/* Keyword Metadata */}
				<meta name="keywords" content="Ford, Ford Việt Nam, Ford Xuân Hiếu" />
				{/* Author Metadata */}
				<meta name="author" content="Ford Xuân Hiếu" />
				{/* Robots Metadata */}
				<meta name="robots" content="index, follow" />
				{/* Google Meta Data */}
				<meta
					itemProp="name"
					content="Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					itemProp="name"
					content="Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					itemProp="description"
					content="Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				<meta
					itemProp="image"
					content="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				{/* Facebook Meta Data */}
				<meta
					property="og:title"
					content="Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					property="og:description"
					content="Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam"
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
					content="Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					name="twitter:description"
					content="Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@hieutranxuan" />
				<meta name="twitter:site" content="@hieutranxuan" />
				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1717925246/tran-xuan-hieu/ford-logo-1280-x-960-wallpaper-df4sodvepcrbz8o0-removebg-preview_iypgeu.png"
				/>
				<title>Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng</title>

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
				<meta name="application-name" content="Ford Xuân Hiếu" />
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
					href="/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/android-chrome-512x512.png"
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
					content="Ford Xuân Hiếu - Website báo giá xe ford cho khách hàng"
				/>
				<meta
					property="og:description"
					content="Ford Xuân Hiếu - Đại lý ủy quyền chính thức của Ford Việt Nam"
				/>
			</head>
			<body className={inter.className}>
				<AntdRegistry>
					<ConfigProvider prefixCls="ant" theme={{ ...theme }}>
						<CarsLayout>{children}</CarsLayout>
					</ConfigProvider>
				</AntdRegistry>
				<Analytics />
			</body>
		</html>
	);
}
