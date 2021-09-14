# 路由

项目路由配置存放于 [src/router](https://github.com/ZHT131/brisk-admin/blob/main/src/router) 下面。路由实现了动态路由加载功能，路由配置完全交给后端，后端只需返回对应用户权限对应的路由数组即可实现动态加载路由！！！

## 配置

### mock 动态路由说明

在 [mock/data/user.js](https://github.com/ZHT131/brisk-admin/blob/main/mock/data/user.js) 中提供了 admin 和 edit 两个用户不同的路由数据，后台只需返回对应格式的数据即可实现动态加载各自用户对应权限的路由菜单！

路由模块包含以下结构：

1. 当你一个路由下面的 children 声明的路由大于 1 个时，自动会变成嵌套的模式
2. 只有一个时，会将那个子路由当做根路由显示在侧边栏--如首页
3. 若你想不管路由下面的 children 声明的个数都显示你的根路由，你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
4. 对于返回的路由数据不想显示在侧边栏菜单中，可以设置 hidden: true

```js
const routes = [
  {
    path: "/",
    component: "layout/index.vue",
    redirect: "/dashboard",
    meta: { title: "home", icon: "el-icon-menu" },
    alwaysShow: false,
    name: "app",
    children: [
      {
        path: "dashboard",
        component: "dashboard/index.vue",
        name: "dashboard",
        meta: { title: "dashboard", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
    ],
  },
  {
    path: "/profile",
    component: "layout/index.vue",
    redirect: "/profile/index",
    meta: { title: "profile", icon: "el-icon-menu" },
    name: "profile",
    alwaysShow: false,
    hidden: true,
    children: [
      {
        path: "index",
        component: "profile/index.vue",
        name: "profileIndex",
        meta: { title: "profileIndex", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
    ],
  },
  {
    path: "/auth",
    component: "layout/index.vue",
    redirect: null,
    meta: { title: "auth", icon: "el-icon-menu" },
    alwaysShow: true,
    name: "auth",
    children: [
      {
        path: "admin",
        component: "admin/index.vue",
        name: "admin",
        meta: { title: "admin", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
      {
        path: "adminLog",
        component: "adminLog/index.vue",
        name: "adminLog",
        meta: { title: "adminLog", icon: "el-icon-menu" },
        alwaysShow: false,
        redirect: null,
      },
      {
        path: "adminGroup",
        component: "adminGroup/index.vue",
        name: "adminGroup",
        meta: { title: "adminGroup", icon: "el-icon-menu" },
        alwaysShow: false,
        redirect: null,
      },
      {
        path: "adminRule",
        component: "adminRule/index.vue",
        name: "adminRule",
        meta: { title: "adminRule", icon: "el-icon-menu" },
        alwaysShow: false,
        redirect: null,
      },
    ],
  },
  {
    path: "/error_page",
    component: "layout/index.vue",
    name: "error_page",
    redirect: null,
    meta: { title: "error_page", icon: "el-icon-menu" },
    alwaysShow: true,
    children: [
      {
        path: "401",
        component: "401/index.vue",
        name: "page401",
        meta: { title: "page401", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
      {
        path: "404",
        component: "404/index.vue",
        name: "page404",
        meta: { title: "page404", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
    ],
  },
  //嵌套路由示例
  {
    path: "/nested",
    component: "layout/index.vue",
    name: "nested",
    redirect: null,
    meta: { title: "nested", icon: "el-icon-menu" },
    alwaysShow: true,
    children: [
      {
        path: "menu",
        component: "noComponent",
        name: "menu",
        meta: { title: "menu", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: true,
        children: [
          {
            path: "menu2",
            component: "menu2/index.vue",
            name: "menu2",
            meta: { title: "menu2", icon: "el-icon-menu" },
            redirect: null,
            alwaysShow: false,
          },
          {
            path: "menu3",
            component: "menu3/index.vue",
            name: "menu3",
            meta: { title: "menu3", icon: "el-icon-menu" },
            redirect: null,
            alwaysShow: false,
          },
        ],
      },
      {
        path: "menu1",
        component: "menu1/index.vue",
        name: "menu1",
        meta: { title: "menu1", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
    ],
  },
];
return {
  code: 1,
  data: routes,
};
```

### 多级路由

::: warning 注意事项

- 整个项目所有路由 `name` 不能重复
- 除了 layout 对应的 path 和 redirect 前面需要加 `/`，其余子路由都不要以`/`开头
- redirect 不不需要时就设置为 null
- component 不需要组件时就设置为 noComponent

  :::

**示例**

```js
  //嵌套路由示例
  {
    path: "/nested",
    component: "layout/index.vue",
    name: "nested",
    redirect: null,
    meta: { title: "nested", icon: "el-icon-menu" },
    alwaysShow: true,
    children: [
      {
        path: "menu",
        component: "noComponent",
        name: "menu",
        meta: { title: "menu", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: true,
        children: [
          {
            path: "menu2",
            component: "menu2/index.vue",
            name: "menu2",
            meta: { title: "menu2", icon: "el-icon-menu" },
            redirect: null,
            alwaysShow: false,
          },
          {
            path: "menu3",
            component: "menu3/index.vue",
            name: "menu3",
            meta: { title: "menu3", icon: "el-icon-menu" },
            redirect: null,
            alwaysShow: false,
          },
        ],
      },
      {
        path: "menu1",
        component: "menu1/index.vue",
        name: "menu1",
        meta: { title: "menu1", icon: "el-icon-menu" },
        redirect: null,
        alwaysShow: false,
      },
    ],
  }
```

### Meta 配置说明

title 需要设置为语言包内设置的对应属性名，菜单渲染语言包格式为 $t(item.name + "." + item.meta.title) ,所以我们设置对应语言包时就要用: 路由 name:{meta.title:""} ,如下：

```js
// en
export default {
  //这里是路由name对应值
  admin: {
    admin: "admin", //这里是路由meta.title对应值
  },
};
```

## 图标

为了简化使用，暂时只使用了element-plus内置图标，没有内置其他自定义图标库，有需要的可以自己集成！后期会考虑内置一套！

## 路由刷新

项目中采用的是动态加载加**重定向**方式，刚加载的路由会执行重定向到当前打开页以确保打开最新加载页，顶部导航栏加入了刷新按钮，可以点击执行当前页面重载！


