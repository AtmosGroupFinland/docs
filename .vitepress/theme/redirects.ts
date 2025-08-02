export const redirects: Record<string, string> = {
	// Finnish blog redirects
	"/fi/blog/": "/blog/",
	"/fi/blog/sample-post-1": "/blog/sample-post-1",
	"/fi/blog/sample-post-2": "/blog/sample-post-2",
	"/fi/blog/sample-post-3": "/blog/sample-post-3",

	// Arabic blog redirects
	"/ar/blog/": "/blog/",
	"/ar/blog/sample-post-1": "/blog/sample-post-1",
	"/ar/blog/sample-post-2": "/blog/sample-post-2",
	"/ar/blog/sample-post-3": "/blog/sample-post-3",

	// Estonian blog redirects
	"/ee/blog/": "/blog/",
	"/ee/blog/sample-post-1": "/blog/sample-post-1",
	"/ee/blog/sample-post-2": "/blog/sample-post-2",
	"/ee/blog/sample-post-3": "/blog/sample-post-3",
};

// Helper function to find redirect for paths that start with a pattern
export function findRedirectForPath(path: string): string | undefined {
	// Remove trailing slash and .html for comparison
	const cleanPath = path.replace(/\.html$/i, "").replace(/\/$/, "");

	// Check for exact match first
	if (redirects[cleanPath] || redirects[cleanPath + "/"]) {
		return redirects[cleanPath] || redirects[cleanPath + "/"];
	}

	// Check for pattern matches (for blog posts not explicitly listed)
	const blogPatterns = ["/fi/blog/", "/ar/blog/", "/ee/blog/"];

	for (const pattern of blogPatterns) {
		if (path.startsWith(pattern)) {
			return "/blog/" + path.slice(pattern.length);
		}
	}

	return undefined;
}
