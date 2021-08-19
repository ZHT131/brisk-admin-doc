export const themeData = {
  "repo": "ZHT131/brisk-admin",
  "docsRepo": "ZHT131/brisk-admin-doc",
  "logo": "/logo.png",
  "docsBranch": "main",
  "editLinks": true,
  "editLinkText": "为此页提供修改建议",
  "navbar": [
    {
      "text": "指南",
      "link": "/guide/introduction.md"
    },
    {
      "text": "组件",
      "children": [
        {
          "text": "常用组件",
          "link": "/components/crud.md"
        }
      ]
    },
    {
      "text": "相关链接",
      "children": [
        {
          "text": "在线预览",
          "link": "https://github.com/ZHT131/brisk-admin"
        },
        {
          "text": "项目源码",
          "link": "https://github.com/ZHT131/brisk-admin"
        },
        {
          "text": "文档源码",
          "link": "https://github.com/ZHT131/brisk-admin-doc"
        },
        {
          "text": "更新日志",
          "link": "/guide/changelog.md"
        }
      ]
    },
    {
      "text": "赞助",
      "link": "/other/donate.md"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "基础",
        "children": [
          "/guide/introduction.md",
          "/guide/start.md",
          "/guide/changelog.md"
        ]
      }
    ],
    "/components/": [
      {
        "text": "常用组件",
        "children": [
          "/components/crud.md"
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
