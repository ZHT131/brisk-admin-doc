export const data = {
  "key": "v-eb14d09e",
  "path": "/guide/changelog.html",
  "title": "更新日志",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/changelog.md",
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
