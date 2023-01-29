import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: '面试指南',
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/810505339/vite-interview' }
    ],
    sidebar: [
      {
        text: 'js面试',
        items: [
          { text: 'var let const 的区别', link: '/js/var-let-const'},
          { text: 'Getting Started', link: '/getting-started' },
        ],
        collapsible: true 
      }
    ],
  },
  description: 'A VitePress site'
})
