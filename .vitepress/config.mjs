import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: "/nn122500/.vitepress",
  head:[
    ['link',{rel:'icon',href:'/sq.svg'}]
  ],
  // 站点标题 就是网站的名字
  title: "咕噜咕噜",
  description: "/sq.svg",
  themeConfig: {
    // nav导航栏 左边的logo旁边的文字
    siteTitle: '咕噜咕噜',
    // 网站左上角的logo图标
    logo: '/sq.svg',
    // 右上角导航配置(路由)
    nav: [
      { text: '首页', link: '/' },
      { text: '样例', link: '/markdown-examples' },
      { text: 'CSS', link: '/css/base.md' },
      { text: 'JS', link: '/js/base.md' },
      { text: 'VUE', link: '/vue/base.md' },
      { text: 'React', link: '/react/base.md' },
      { text: 'Vite', link: '/vite/base.md' },
      { text: 'Windows', link: '/windows/base.md' }
    ],


    sidebar: [
      {
        items: [
          {
            text: '学习笔记',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Vue', link: '/study/vue.md' },
              { text: 'React', link: '/study/react.md' },
              { text: 'Node', link: '/study/node.md' },

            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'CSS', link: '/css/base.md' },
          {
            text: 'JS',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
              { text: '基础语法', link: '/js/base.md' },
            ]
          },
          {
            text: 'VUE',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
              { text: '基础语法', link: '/vue/base.md' },
              { text: '阿里字体图标封装', link: '/vue/iconModule.md' },
            ]
          },
          {
            text: 'React',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
              { text: '基础语法', link: '/react/base.md' },
              { text: 'antd组件库二次封装', link: '/react/antd.md' },
              { text: 'antd组件库常见问题', link: '/react/antdBug.md' },
            ]
          },
          {
            text: 'Vite',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
                { text: '常见问题', link: '/vite/base.md' },
            ]
          },
          { text: 'Windows', link: '/windows/base.md' },
        ]
      }
    ],
   

    // 配置成自己的的github地址, 当然也可以配置掘金的icon 和 掘金的地址
    socialLinks: [
      { icon: "github", link: 'https://juejin.cn/user/853690568683416' }
    ],

    // 底部版权部分
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present SunFei',
    },
  },
  markdown: {
    // 代码块风格
    theme: 'material-theme-palenight',
    // theme:'github-light',
    // 代码块显示行数
    lineNumbers: true,
  },

})