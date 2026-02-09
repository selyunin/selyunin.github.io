import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Konstantin Selyunin",
  description: "Personal website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Videos', link: '/videos' },
      { text: 'Publications', link: '/publications' },
      { text: 'Running', link: '/running' }
    ],

    sidebar: [
      {
        text: 'Projects',
        link: '/projects',
        items: [
          // { text: 'Raspberry PI ', link: '/markdown-examples' },
          { text: 'Sensor data', link: '/umrx-v3-py' },
        ]
      },
      {
        text: 'Videos',
        link: '/videos',
      },
      {
        text: 'Publications',
        link: '/publications',
      },
      {
        text: 'Running',
        link: '/running',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/selyunin' },
      { icon: 'linkedin', link: 'https://github.com/selyunin' },
      { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/3801949/selyunin' },
      { icon: 'lichess', link: 'https://lichess.org/@/kselyunin' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Dr. Konstantin Selyunin'
    }
  },
  cleanUrls: true,
})
