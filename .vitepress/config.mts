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
			options: {
				locales: {
					fi: {
						translations: {
							button: {
								buttonText: "Hae",
								buttonAriaLabel: "Hae",
							},
							modal: {
								displayDetails: "Näytä lisätiedot",
								resetButtonTitle: "Tyhjennä haku",
								noResultsText: "Ei tuloksia",
								backButtonTitle: "Takaisin",
								footer: {
									selectText: "Siirry",
									selectKeyAriaLabel: "Siirry",
									navigateText: "Vaihda",
									navigateUpKeyAriaLabel: "Ylös",
									navigateDownKeyAriaLabel: "Alas",
									closeText: "Sulje",
									closeKeyAriaLabel: "esc",
								},
							},
						},
					},
				},
			},
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
		fi: {
			label: "Suomi",
			lang: "fi",
			themeConfig: {
				nav: [
					{ text: "Dokumentaatio", link: "/fi" },
					{ text: "Blogi", link: "/fi/blog/" },
				],
				sidebar: {
					"/fi": [
						{
							text: "Katselmointi",
							link: "/fi",
						},
						{
							text: "Tuotteet",
							items: [
								{
									text: "AtmosTrack",
									collapsed: true,
									items: [],
								},
							],
						},
					],
					"/fi/blog/": [
						{
							text: "Blogi",
							items: [{ text: "Katselmointi", link: "/fi/blog/" }],
						},
					],
				},
				editLink: {
					pattern:
						"https://github.com/AtmosGroupFinland/docs/edit/main/website/:path",
					text: "Muuta tämä sivu GitHubissa",
				},
				lastUpdated: {
					text: "Viimeksi päivitetty",
				},
				docFooter: {
					prev: "Edellinen sivu",
					next: "Seuraava sivu",
				},
				outline: {
					label: 'Tällä sivulla'	
				}
			},
		},
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
