import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Konstantin Selyunin",
  description: "Personal website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Running', link: '/running' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },

        ]
      },
      {
        text: 'Running',
        link: '/running',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/selyunin' }
    ]
  }
})
