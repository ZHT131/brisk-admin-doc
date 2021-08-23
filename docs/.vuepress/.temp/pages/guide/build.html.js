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
        },
        {
          "level": 3,
          "title": "分析构建文件体积",
          "slug": "分析构建文件体积",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "压缩",
      "slug": "压缩",
      "children": [
        {
          "level": 3,
          "title": "开启 gzip 压缩",
          "slug": "开启-gzip-压缩",
          "children": []
        },
        {
          "level": 3,
          "title": "开启 brotli 压缩",
          "slug": "开启-brotli-压缩",
          "children": []
        },
        {
          "level": 3,
          "title": "同时开启 gzip 与 brotli",
          "slug": "同时开启-gzip-与-brotli",
          "children": []
        },
        {
          "level": 3,
          "title": "gzip 与 brotli 在 nginx 内的配置",
          "slug": "gzip-与-brotli-在-nginx-内的配置",
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
        },
        {
          "level": 3,
          "title": "前端路由与服务端的结合",
          "slug": "前端路由与服务端的结合",
          "children": []
        },
        {
          "level": 3,
          "title": "history 路由模式下服务端配置",
          "slug": "history-路由模式下服务端配置",
          "children": []
        },
        {
          "level": 3,
          "title": "使用 nginx 处理跨域",
          "slug": "使用-nginx-处理跨域",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/build.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
