# 构建&部署

::: tip 前言
由于是展示项目，所以打包后可能较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。
:::

## 构建

项目开发完成之后，执行以下命令进行构建

```bash
npm run build
```

构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件

### 预览

框架已经内置了serve服务器环境插件，发布之前可以在本地进行预览

**不能直接打开构建后的 html 文件**

- 使用项目自定的命令进行预览(推荐)

```bash
# 直接预览本地 dist 文件目录
serve -s dist
```

## 部署

::: danger 注意

项目默认是在生产环境开启 Mock，这样做非常不好，只是为了演示环境有数据，不建议在生产环境使用 Mock，而应该使用真实的后台接口，并将 Mock 关闭。

:::

### 发布

简单的部署只需要将最终生成的静态文件，dist 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 index.html 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

例如上传到 nginx

`/srv/www/project/index.html`

```bash
# nginx配置
location / {
  # 不缓存html，防止程序更新后缓存继续生效
  if ($request_filename ~* .*\.(?:htm|html)$) {
    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
    access_log on;
  }
  # 这里是vue打包文件dist内的文件的存放路径
  root   /srv/www/project/;
  index  index.html index.htm;
}

```
