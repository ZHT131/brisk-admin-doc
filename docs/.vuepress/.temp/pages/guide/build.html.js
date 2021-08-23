export const data = {
  "key": "v-10af5117",
  "path": "/guide/build.html",
  "title": "构建&部署",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "构建",
      "slug": "构建",
      "children": [
        {
          "level": 3,
          "title": "预览",
          "slug": "预览",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "部署",
      "slug": "部署",
      "children": [
        {
          "level": 3,
          "title": "发布",
          "slug": "发布",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/build.md",
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
