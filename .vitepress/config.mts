import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AGF - Documentation",
	description:
		"Documentation, blog and API reference site for products of Atmos Group Finland",
	srcDir: "website",
	appearance: false, // disable dark mode switch
	lastUpdated: true,
	cleanUrls: true,

	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon-32x32.png",
				sizes: "32x32",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon-192x192.png",
				sizes: "192x192",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180",
			},
		],
	],

	rewrites: {
		"fi/blog/:path*": "blog/:path*",
		"ar/blog/:path*": "blog/:path*",
		"ee/blog/:path*": "blog/:path*",
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/logo.png",
		siteTitle: false,
		nav: [
			{ text: "Documentation", link: "/" },
			{ text: "Blog", link: "/blog/", activeMatch: "/blog/" },
		],

		search: {
			provider: "local",
		},

		sidebar: {
			"/": [
				{
					text: "Overview",
					link: "/",
				},
				{
					text: "Products",
					items: [
						{
							text: "AtmosTrack",
							collapsed: true,
							items: [
								{ text: "Markdown Examples", link: "/markdown-examples" },
								{ text: "Runtime API Examples", link: "/api-examples" },
							],
						},
						{
							text: "AtmosDot",
							collapsed: true,
							items: [{ text: "Overview", link: "/atmosdot/overview" }],
						},
						{
							text: "AtmosPortal",
							collapsed: true,
							items: [{ text: "Overview", link: "/atmosportal/overview" }],
						},
					],
				},
			],
			"/blog/": [
				{
					text: "Blog",
					items: [{ text: "Overview", link: "/blog/" }],
				},
			],
		},
		i18nRouting: true,

		editLink: {
			pattern:
				"https://github.com/AtmosGroupFinland/docs/edit/main/website/:path",
			text: "Edit this page on GitHub",
		},
	},
	locales: {
		root: { label: "English", lang: "en" },
		fi: { label: "Suomi", lang: "fi" },
		ar: {
			label: "العربية",
			lang: "ar",
			dir: "rtl",
			themeConfig: {
				// siteTitle: "AGF - المستندات",
			},
		},
		ee: { label: "Eesti", lang: "et" },
	},
	sitemap: {
		hostname: "https://docs.atmosgroup.fi",
	},
});
