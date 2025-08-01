import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AGF - Documentation",
  description: "Documentation, blog and API reference site for products of Atmos Group Finland",
  srcDir: 'website',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    i18nRouting: true,
  },
  locales: {
    root: { label: 'English', lang: 'en' },
    fi: { label: 'Suomi', lang: 'fi' },
    ar: { label: 'Arabic', lang: 'ar', dir: 'rtl' },
    ee: { label: 'Estonian', lang: 'et' },
  },
})
