import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import BlogIndex from "./components/BlogIndex.vue";
import { findRedirectForPathSync } from "./redirects";
import "./custom.css";

export default {
	extends: DefaultTheme,
	Layout,
	enhanceApp({ app, router }) {
		app.component("BlogIndex", BlogIndex);

		router.onBeforeRouteChange = (to: string) => {
			// Use synchronous version for router hook
			const redirectPath = findRedirectForPathSync(to);

			if (redirectPath) {
				setTimeout(() => {
					router.go(redirectPath);
				});
				return false; // Prevent the original route change
			}

			return true; // Allow the route change to proceed
		};
	},
};
