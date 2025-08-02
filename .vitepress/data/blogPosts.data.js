import { createContentLoader } from "vitepress";

export default createContentLoader("blog/*.md", {
	includeSrc: false,
	render: false,
	excerpt: true,
	transform(rawData) {
		return rawData
			.filter(({ frontmatter, url }) => {
				// Filter out the index page and ensure we have required frontmatter
				return (
					frontmatter.title &&
					frontmatter.date &&
					!url.endsWith("/blog/") &&
					!url.endsWith("/blog/index")
				);
			})
			.sort((a, b) => {
				// Sort by date, newest first
				return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
			})
			.map(({ url, frontmatter, excerpt }) => ({
				url,
				frontmatter: {
					...frontmatter,
					// Use excerpt from content if frontmatter.excerpt is not available
					excerpt: frontmatter.excerpt || excerpt,
				},
			}));
	},
});
