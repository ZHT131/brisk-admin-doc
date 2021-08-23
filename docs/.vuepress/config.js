module.exports = {
  lang: "zh-CN",
  title: "Brisk-Admin",
  description:
    "一个基于vue3+element-plus+vite开箱即用的后台前端框架，杜绝繁琐，只为更轻更快！",
  head: [
    ["meta", { name: "author", content: "Zhang Hong tao" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vue-element-admin, vite, ant-design-vue, vue3, vue3-admin, element-plus",
      },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "vue element-plus admin docs" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    repo: "ZHT131/brisk-admin",
    docsRepo: "ZHT131/brisk-admin-doc",
    logo: "/logo.png",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "为此页提供修改建议",
    navbar: [
      {
        text: "指南",
        link: "/guide/introduction.md",
      },
      {
        text: "组件",
        children: [
          {
            text: "常用组件",
            link: "/components/crud.md",
          },
        ],
      },
      {
        text: "相关链接",
        children: [
          {
            text: "在线预览",
            link: "http://brisk-admin.ybym.top/",
          },
          {
            text: "项目源码",
            link: "https://github.com/ZHT131/brisk-admin",
          },
          {
            text: "文档源码",
            link: "https://github.com/ZHT131/brisk-admin-doc",
          },
          {
            text: "更新日志",
            link: "/guide/changelog.md",
          },
        ],
      },
      {
        text: "赞助",
        link: "/other/donate.md",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          children: [
            "/guide/introduction.md",
            "/guide/start.md",
            "/guide/settings.md",
            "/guide/router.md",
            "/guide/mock.md",
            "/guide/build.md",
            "/guide/changelog.md",
          ],
        },
      ],
      "/components/": [
        {
          text: "常用组件",
          children: ["/components/crud.md","/components/dialogcom.md"],
        },
      ],
    },
    sidebarDepth: 2,
  },
};
