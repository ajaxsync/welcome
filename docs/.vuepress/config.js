module.exports = {
    title: 'ajaxsync',
    description: 'ajaxsync\'s Blog',
    theme: 'reco',
    base: '/welcome/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '联系我', 
                items: [
                    { text: 'Github', link: 'https://github.com/ajaxsync' },
                    { text: 'Gitee', link: 'https://gitee.com/ajaxsync' }
                ]
            }
        ],
        sidebar: [
            {
              title: '欢迎1',
              path: '/',
              collapsable: false, // 不折叠
              children: [
                  { title: "首页", path: "/" }
              ]
            },
            {
              title: "欢迎2",
              path: '/welcome/aa',
              collapsable: true, // 不折叠
              children: [
                { title: "aa", path: "/welcome/aa" },
                { title: "bb", path: "/welcome/bb" }
              ],
            }
        ],
        subSidebar: 'auto',
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
  }