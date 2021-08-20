# 开始

本文会帮助你从头启动项目

## 前言

::: tip 关于组件

项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## 环境准备

本地环境需要安装 [npm](https://www.npmjs.com/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- 建议使用[npm](https://www.npmjs.com/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `14.x` 及以上。

:::

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Chinese](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) - vscode 中文（简体）语言包
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备 （也可以选择 Volar）
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/ZHT131/brisk-admin.git

```

### 从 Gitee 获取代码

如果从 github clone 代码较慢的话，可以尝试用 [Gitee](https://gitee.com/zht131/brisk-admin) 同步代码到自己的仓库，再 clone 下来即可。

也可以通过下方地址进行 clone

```bash
git clone https://gitee.com/zht131/brisk-admin.git
```

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v

```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

#### npm 安装

必须使用 [npm]进行依赖安装（若其他包管理器安装不了需要自行处理）。

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
npm install
```

## npm script

```bash
"scripts": {
  "dev": "vite", //调试模式 npm run dev
  "build": "vite build", //调试模式 npm run build
}
```

### 重新安装依赖

####

该命令会先删除 `node_modules`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

接下来你可以修改代码进行业务开发了。我们内建了模拟数据、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。

## 目录说明

```bash

.
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   └── images # 项目存放图片的文件夹
│   ├── components # 公共组件
│   ├── lang # 语言包文件
│   ├── router # 路由配置
│   ├── settings # 应用配置
│   │   ├── settings.js # 应用配置
│   │   └── skin.js   # 皮肤配置
│   ├── store # 数据仓库
│   ├── style # elementui主题文件
│   ├── utils # 工具类
│   ├── vendor # 扩展组件
│   ├── views # 页面
│   │   ├── layout # 布局文件
│   │   └── ...   # 其他页面文件
│   ├── App.vue #主入口
│   └── main.js #应用js
├── .env # 环境配置
├── package.json # 依赖
└── vite.config.js # vite配置

```
