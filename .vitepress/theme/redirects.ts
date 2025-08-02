// Blog index redirects - redirect language-specific blog indexes to English if no translation exists
export const blogIndexRedirects: Record<string, string> = {
	// "/fi/blog/": "/blog/", // Now has its own page
	// "/ar/blog/": "/blog/", // Now has its own page with client-side redirect
	// "/ee/blog/": "/blog/", // Now has its own page with client-side redirect
};

// List of blog posts that have translations available
// Update this list when you add new translations
export const availableTranslations: Record<string, string[]> = {
	"sample-post-1": ["en", "fi"], // Available in English and Finnish
	"sample-post-2": ["en"], // Only available in English
	"sample-post-3": ["en"], // Only available in English
};

// Helper function to check if a blog post translation exists
function hasTranslation(postSlug: string, language: string): boolean {
	const translations = availableTranslations[postSlug];
	return translations ? translations.includes(language) : false;
}

// Synchronous version for router hook
export function findRedirectForPathSync(path: string): string | undefined {
	// Remove trailing slash and .html for comparison
	const cleanPath = path.replace(/\.html$/i, "").replace(/\/$/, "");

	// Always redirect blog index pages to English if they don't have translations
	if (blogIndexRedirects[cleanPath] || blogIndexRedirects[cleanPath + "/"]) {
		return blogIndexRedirects[cleanPath] || blogIndexRedirects[cleanPath + "/"];
	}

	// Handle blog post redirects
	const blogPatterns = [
		{ pattern: "/fi/blog/", lang: "fi" },
		{ pattern: "/ar/blog/", lang: "ar" },
		{ pattern: "/ee/blog/", lang: "ee" },
	];

	for (const { pattern, lang } of blogPatterns) {
		if (path.startsWith(pattern)) {
			const postSlug = path.slice(pattern.length).replace(/\.html$/i, "");
			
			// If this is a blog index (empty slug), allow it to proceed
			// since we now have actual blog index pages for all languages
			if (postSlug === "" || postSlug === "/") {
				return undefined;
			}

			// Only redirect if the translation doesn't exist
			if (!hasTranslation(postSlug, lang)) {
				return "/blog/" + postSlug;
			}
		}
	}

	return undefined;
}
