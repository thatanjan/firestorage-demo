/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				pathname: '**',
			},
		],
	},
}

// https://firebasestorage.googleapis.com/v0/b/storage-demo-11ab6.appspot.com/o/images%2Fimage_1.jpg?alt=media&token=aed70563-b5cd-4855-8cab-207e36e00aa8

module.exports = nextConfig
