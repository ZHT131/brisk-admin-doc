export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Brisk-Admin",
  "description": "一个基于vue3+element-plus+vite开箱即用的后台前端框架",
  "head": [
    [
      "meta",
      {
        "name": "author",
        "content": "Zhang Hong tao"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "vue-element-admin, vite, ant-design-vue, vue3, vue3-admin, element-plus"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "vue element-plus admin docs"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
