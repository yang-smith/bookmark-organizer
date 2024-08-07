/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bookmarkorg.com',
			},
		],
	},
};

export default nextConfig;
