import { TfiYoutube } from 'react-icons/tfi';
import { FaRedditAlien, FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads, FaWeixin } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiWechatChannelsLine } from 'react-icons/ri';

const baseSiteConfig = {
	name: 'Effortlessly manage Your Chrome Bookmarks with AI-Powered Magic',
	description: 'Tired of digging through your cluttered Chrome bookmarks to find what you need? Our AI-powered Bookmark manager can help. With just one click, our intelligent system analyzes your bookmarks and automatically sorts them into organized folders.Try it now for free. ',
	url: 'https://landingpage.inwind.cn',
	ogImage: 'https://landingpage.inwind.cn/logo.png',
	metadataBase: '/',
	keywords: [
		'chrome bookmark manager',
		'bookmark organizer chrome',
		'chrome bookmark extension',
		'AI bookmark organizer',
		'smart bookmark management',
		'chrome bookmarks organization',
		'automatic bookmark sorting',
		'bookmark organization tool',
		'chrome browsing productivity'
	  ],
	authors: [
		{
			name: 'autumnriver',
			url: 'https://bookmarkorg.com',
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	}
};

export const SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseSiteConfig.url,
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}/image.png`],
		creator: baseSiteConfig.creator,
	},
};
