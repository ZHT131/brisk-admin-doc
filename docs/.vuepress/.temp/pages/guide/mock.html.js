export const data = {
  "key": "v-00cf7e23",
  "path": "/guide/mock.html",
  "title": "数据 mock&联调",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "开发环境",
      "slug": "开发环境",
      "children": [
        {
          "level": 3,
          "title": "配置",
          "slug": "配置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "接口请求",
      "slug": "接口请求",
      "children": []
    }
  ],
  "filePathRelative": "guide/mock.md",
  "git": {
    "updatedTime": 1629680567000,
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
