export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.png",
    "actions": [
      {
        "text": "快速上手",
        "link": "/guide/introduction.html",
        "type": "primary"
      },
      {
        "text": "在线预览",
        "link": "https://github.com/ZHT131/brisk-admin",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "💡 最新技术栈",
        "details": "基于Vue3、Vite等最新技术栈开发"
      },
      {
        "title": "⚡️轻量快速的热重载",
        "details": "无论应用程序大小如何，都始终极快的模块热重载（HMR）"
      },
      {
        "title": "🛠️ 最佳实践",
        "details": "常用的权限管理CRUD页面布局以及组件示例实现"
      },
      {
        "title": "📦 组件封装",
        "details": "常用的CRUD页面布局封装,满足基础工作需求"
      },
      {
        "title": "🔩 主题配置",
        "details": "丰富的主题配置及皮肤切换适配"
      },
      {
        "title": "🔑 权限管理",
        "details": "前后端动态路由权限管理方案"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Brisk-Admin"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1629293253000,
    "contributors": [
      {
        "name": "孤影浪人",
        "email": "1315723390@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
