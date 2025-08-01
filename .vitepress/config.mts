import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AGF - Documentation",
	description:
		"Documentation, blog and API reference site for products of Atmos Group Finland",
	srcDir: "website",
	appearance: false, // disable appearance switch
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/logo.png",
		siteTitle: false,
		nav: [
			{ text: "Home", link: "/index" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		search: {
			provider: "local",
		},

		sidebar: [
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
});
