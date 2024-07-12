import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/developers.dts.com/",
  title: "大逃杀 Developers",
  description: "大逃杀 开发文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'EN', link: '/guide/getting-started' },
      { text: '中文', link: '/guide/getting-started' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '开始', link: '/guide/getting-started' },
          ]
        },
        {
          text: 'API',
          items: [
            { text: '用户', link: '/guide/users' },
            { text: '游戏', link: '/guide/game' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercarbon/developers.dts.com' }
    ]
  },
  outDir: resolve(__dirname, '../../dist')

})
