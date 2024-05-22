/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fordlongbien.com',
			},
		],
	},
};

export default nextConfig;
