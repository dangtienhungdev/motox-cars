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
		],
	},
};

export default nextConfig;
