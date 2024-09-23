const themeConfig = {
    sidebar: [
        {
            text: 'Examples',
            items: [
                {
                    text: '学习笔记',
                    // 开启折叠按钮
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'Vue', link: '/study/vue.md' },
                        { text: 'Node', link: '/study/node.md' },
                        { text: 'React', link: '/study/react.md' }
                    ]
                },
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
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
            ]
        }
    ],

}  