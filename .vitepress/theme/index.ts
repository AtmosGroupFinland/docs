import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import BlogIndex from "./components/BlogIndex.vue";
import "./custom.css";

export default {
	extends: DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.component("BlogIndex", BlogIndex);
	},
};
