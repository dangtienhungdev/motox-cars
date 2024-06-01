/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fordlongbien.com',
			},
			{
				protocol: 'https',
				hostname: 'www.vdm.ford.com',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
		],
	},
};

export default nextConfig;
