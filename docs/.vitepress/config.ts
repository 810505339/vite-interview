import { defineConfig, type DefaultTheme } from 'vitepress'



export default defineConfig({

  themeConfig: {
    siteTitle: '指南',
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/810505339/vite-interview' }
    ],
    sidebar: sidebar(),
    // sidebar: [
    //   {
    //     text: 'javascript',
    //     items: [
    //       { text: 'js的数据类型', link: '/js/js的数据类型' },
    //       { text: 'var let const 的区别', link: '/js/var-let-const' },
    //       { text: '防抖和节流', link: '/js/防抖和节流' },
    //       { text: '继承', link: '/js/继承' },
    //       { text: '深拷贝和浅拷贝', link: '/js/深拷贝和浅拷贝' },
    //       { text: 'promise', link: '/js/promise' },
    //       { text: '渲染10w条数据', link: '/js/渲染10w条数据' },
    //       { text: '闭包', link: '/js/闭包' },
    //       { text: '预编译', link: '/js/预编译' },
    //       { text: 'this指向面试题总结', link: '/js/this指向面试题总结' },
    //       { text: '数组方法', link: '/js/数组方法' },
    //       { text: '解构赋值', link: '/js/解构赋值' },
    //       { text: '判断js数据类型', link: '/js/判断js数据类型' },
    //       { text: 'new发生了什么', link: '/js/new发生了什么' },
    //       { text: '原型链和原型', link: '/js/原型链和原型' },

    //     ],
    //     collapsed: true
    //   },
    //   {
    //     text: 'css',
    //     items: [
    //       { text: 'BFC相关', link: '/css/BFC' },
    //       { text: 'flex', link: '/css/flex' },
    //       { text: 'unocss', link: '/css/unocss' },
    //     ],

    //     collapsed: true
    //   },
    //   {
    //     text: 'vue',
    //     items: [
    //       { text: 'vue中为什么data()是一个函数？', link: '/vue/vue中为什么data()是一个函数' },
    //       { text: 'vue中的生命周期', link: '/vue/vue生命周期' },
    //       { text: 'vue中父子组件渲染顺序', link: '/vue/vue中父子组件渲染顺序' },
    //       { text: 'vue组件传值', link: '/vue/vue组件传值' },
    //       { text: '自定义指令', link: '/vue/自定义指令' },
    //       { text: 'vue中插件的使用', link: '/vue/vue中插件的使用' },
    //       { text: 'vue中响应式原理', link: '/vue/vue响应式原理' },
    //       { text: 'vue2中为什么根节点只能有一个', link: '/vue/vue2中为什么根节点只能有一个' },
    //       { text: 'computed vs watch', link: '/vue/computed vs watch' },
    //       { text: 'keep-alive详解', link: '/vue/keep-alive' },
    //       { text: '实现一个tabs', link: '/vue/如何实现一个tabs.md' },
    //       { text: 'useSlots跟useAttrs', link: '/vue/useSlots跟useAttrs.md' },
    //     ],
    //     collapsed: true
    //   },
    //   {
    //     text: 'react',
    //     items: [
    //       { text: 'react-redux', link: '/react/redux' },
    //     ],
    //     collapsed: true
    //   },
    //   {
    //     text: 'git',
    //     items: [
    //       { text: 'git操作', link: '/git/git操作' },

    //     ],
    //     collapsed: true
    //   },
    //   {
    //     text: 'other',
    //     items: [
    //       { text: '浏览器中输入url后发生了什么', link: '/other/浏览器中输入url后发生了什么' },
    //       { text: '性能优化', link: '/other/性能优化' },
    //       { text: '强制缓存和协商缓存', link: '/other/强制缓存和协商缓存' },

    //     ],
    //     collapsed: true
    //   },
    //   {
    //     text: '面试总结',
    //     items: [
    //       { text: '面试', link: '/面试/总结' },
    //     ],
    //     collapsed: true
    //   }

    // ],
    nav: nav(),
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/dogs.png' }],

  ],

  description: 'A VitePress site'
})
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '前端',
      items: [
        {
          text: 'HTML CSS JS',
          link: '/first/js/js的数据类型'
        },
        {
          text: 'vue',
          link: '/vue/vue中为什么data()是一个函数'
        },
        {
          text: 'react',
          link: '/react/redux'
        }
      ]
    },
    {
      text: '打包工具',
      items: [
        {
          text: 'vite',
          link: ''
        },
        {
          text: 'webpack',
          link: ''
        }
      ]
    },

    // {
    //   text: 'Flutter',
    //   link: '/js/js的数据类型',
    // },
    {
      text: '其他',
      link: '/other/浏览器中输入url后发生了什么',
    }
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/first/': [
      {
        text: 'javascript',
        collapsed: false,
        items: [
          { text: 'js的数据类型', link: '/first/js/js的数据类型' },
          { text: 'var let const 的区别', link: '/first/js/var-let-const' },
          { text: '防抖和节流', link: '/first/js/防抖和节流' },
          { text: '继承', link: '/first/js/继承' },
          { text: '深拷贝和浅拷贝', link: '/first/js/深拷贝和浅拷贝' },
          { text: 'promise', link: '/first/js/promise' },
          { text: '渲染10w条数据', link: '/first/js/渲染10w条数据' },
          { text: '闭包', link: '/first/js/闭包' },
          { text: '预编译', link: '/first/js/预编译' },
          { text: 'this指向面试题总结', link: '/first/js/this指向面试题总结' },
          { text: '数组方法', link: '/first/js/数组方法' },
          { text: '解构赋值', link: '/first/js/解构赋值' },
          { text: '判断js数据类型', link: '/first/js/判断js数据类型' },
          { text: 'new发生了什么', link: '/first/js/new发生了什么' },
          { text: '原型链和原型', link: '/first/js/原型链和原型' },
          { text: '事件循环机制', link: '/first/js/事件循环机制' },
        ],
      },
      {
        text: 'css',
        items: [
          { text: 'BFC相关', link: '/first/css/BFC' },
          { text: 'flex', link: '/first/css/flex' },
          { text: 'unocss', link: '/first/css/unocss' },
        ],

        collapsed: true
      },
    ],
    '/vue/': [
      {
        text: 'vue',
        items: [
          { text: 'vue中为什么data()是一个函数？', link: '/vue/vue中为什么data()是一个函数' },
          { text: 'vue中的生命周期', link: '/vue/vue生命周期' },
          { text: 'vue中父子组件渲染顺序', link: '/vue/vue中父子组件渲染顺序' },
          { text: 'vue组件传值', link: '/vue/vue组件传值' },
          { text: '自定义指令', link: '/vue/自定义指令' },
          { text: 'vue中插件的使用', link: '/vue/vue中插件的使用' },
          { text: 'vue中响应式原理', link: '/vue/vue响应式原理' },
          { text: 'vue2中为什么根节点只能有一个', link: '/vue/vue2中为什么根节点只能有一个' },
          { text: 'computed vs watch', link: '/vue/computed vs watch' },
          { text: 'keep-alive详解', link: '/vue/keep-alive' },
          { text: '实现一个tabs', link: '/vue/如何实现一个tabs.md' },
          { text: 'useSlots跟useAttrs', link: '/vue/useSlots跟useAttrs.md' },
        ],
        collapsed: true
      }
    ],
    '/react/': [
      {
        text: 'react',
        items: [
          { text: 'react-redux', link: '/react/redux' },
        ],
        collapsed: true
      },
    ],
    '/other/': [
      {
        text: 'other',
        items: [
          { text: '浏览器中输入url后发生了什么', link: '/other/浏览器中输入url后发生了什么' },
          { text: '性能优化', link: '/other/性能优化' },
          { text: '强制缓存和协商缓存', link: '/other/强制缓存和协商缓存' },
          { text: 'lottie-web', link: '/other/lottie-web' },
          { text: '常用网站分享', link: '/other/常用网站' },
          { text: 'git操作', link: '/other/git操作' },
          { text: 'tree-shaking', link: '/other/tree-shaking' },
          { text: '在vue中开启浏览器自定义格式化', link: '/other/在vue中开启浏览器自定义格式化' },
        ],
      }
    ],


  }
}
