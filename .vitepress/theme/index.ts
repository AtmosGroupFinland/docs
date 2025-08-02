import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import BlogIndex from "./components/BlogIndex.vue";
import { findRedirectForPath } from "./redirects";
import "./custom.css";

export default {
	extends: DefaultTheme,
	Layout,
	enhanceApp({ app, router }) {
		app.component("BlogIndex", BlogIndex);

		router.onBeforeRouteChange = (to: string) => {
			const redirectPath = findRedirectForPath(to);

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
