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
        text: 'javascript',
        items: [
          { text: 'js的数据类型', link: '/js/js的数据类型' },
          { text: 'var let const 的区别', link: '/js/var-let-const' },
          { text: '防抖和节流', link: '/js/防抖和节流' },
          { text: '继承', link: '/js/继承' },
          { text: '深拷贝和浅拷贝', link: '/js/深拷贝和浅拷贝' },
          { text: 'promise', link: '/js/promise' },
          { text: '渲染10w条数据', link: '/js/渲染10w条数据' },
          { text: '闭包', link: '/js/闭包' },
          { text: '预编译', link: '/js/预编译' },
          { text: 'this指向面试题总结', link: '/js/this指向面试题总结' },
          { text: '数组方法', link: '/js/数组方法' },
          { text: '解构赋值', link: '/js/解构赋值' },
          { text: '判断js数据类型', link: '/js/判断js数据类型' },
          { text: 'new发生了什么', link: '/js/new发生了什么' },
          { text: '原型链和原型', link: '/js/原型链和原型' },

        ],
        collapsible: true
      },
      {
        text: 'css',
        items: [
          { text: 'BFC相关', link: '/css/BFC' },
          { text: 'flex', link: '/css/flex' },
        ],
        collapsible: false
      },
      {
        text: 'vue',
        items: [
          { text: 'vue中为什么data()是一个函数？', link: '/vue/vue中为什么data()是一个函数' },
          { text: 'vue中的生命周期', link: '/vue/vue生命周期' },
        ],
        collapsible: false
      },
      {
        text: 'git',
        items: [
          { text: 'git操作', link: '/git/git操作' },

        ],
        collapsible: false
      }

    ],
  },
  description: 'A VitePress site'
})
