import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AGF - Documentation",
  description: "Documentation, blog and API reference site for products of Atmos Group Finland",
  srcDir: 'website',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/docs/index' },
      { text: 'Examples', link: '/docs/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],
    i18nRouting: true,
  },
  locales: {
    root: { label: 'English', lang: 'en' },
    fi: { label: 'Suomi', lang: 'fi' }
  },
})
