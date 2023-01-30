import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: '面试指南',
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/810505339/vite-interview' }
    ],
    sidebar: {
      '/js/': [
        {
          text: 'js面试',
          items: [
            { text: 'var let const 的区别', link: '/js/var-let-const' },
            { text: '防抖和节流', link: '/js/防抖和节流' },
            { text: '继承', link: '/js/继承' },
            { text: '深拷贝和浅拷贝', link: '/js/深拷贝和浅拷贝' },
            { text: 'promise', link: '/js/promise' },
            { text: '渲染10w条数据', link: '/js/渲染10w条数据' },
          ],
          collapsible: true
        }
      ]
    },
  },
  description: 'A VitePress site'
})
