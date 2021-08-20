# 项目配置项

用于修改项目的配色、布局、缓存、多语言、组件默认配置

## 环境变量配置

项目的环境变量配置位于项目根目录下的 [.env](https://github.com/ZHT131/brisk-admin/blob/main/.env)

具体可以参考 [Vite 文档](https://github.com/vitejs/vite#modes-and-environment-variables)

```bash
.env                # 在所有的环境中被载入

```

::: tip 温馨提醒

- 只有以 `VITE_ ` 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：

```js
console.log(import.meta.env.VITE_PROT);
```
:::

## 配置项说明

### .env

所有环境适用

```bash
# 请求地址
VITE_APP_URL=http://127.0.0.1/
```

## 项目配置

::: warning

项目配置文件用于配置项目内展示的内容、布局、文本等效果。

:::

[src/settings/settings.js](https://github.com/ZHT131/brisk-admin/blob/main/src/settings/settings.js)

```js
const settings = {
  APP_NAME: "Brisk-Admin", //logo名称
  LOGO_GRAM: "Brisk", //logo名称简写
  SKIN_CHOOSE: "aside_white_nav_white", //默认皮肤
  LANGUAGE: "zh-cn", //默认语言
};
export default settings;
```

## 皮肤配置

[src/settings/skin.js](https://github.com/ZHT131/brisk-admin/blob/main/src/settings/skin.js)

```js
const skin = {
  aside_white_nav_white: {
    className: "aside_white_nav_white",
    asideBackground: "#ffffff",
    asideColor: "#000000",
    navBackground: "#ffffff",
    navColor: "#000000",
  },
  aside_black_nav_white: {
    className: "aside_black_nav_white",
    asideBackground: "#222d32",
    asideColor: "#ffffff",
    navBackground: "#ffffff",
    navColor: "#000000",
  },
  aside_black_nav_black: {
    className: "aside_black_nav_black",
    asideBackground: "#222d32",
    asideColor: "#ffffff",
    navBackground: "#222d32",
    navColor: "#ffffff",
  },
  aside_purple_nav_white: {
    className: "aside_purple_nav_white",
    asideBackground: "#605ca8",
    asideColor: "#ffffff",
    navBackground: "#ffffff",
    navColor: "#000000",
  },
};
export default skin;
```
如果需要再侧边弹出的应用设置页中增加主题选择方案需要在[src/views/layout/componejs/setting/index.vue](https://github.com/ZHT131/brisk-admin/blob/main/src/views/layout/components/setting/index.vue)中添加对应的选择视图以及样式！如下：

```vue
<template>
  <el-drawer :size="300" :model-value="showSet" direction="rtl" :withHeader="false" :before-close="handleClose" destroy-on-close>
    <div class="drawer_title">
      <span>{{$t('app.setting_title')}}</span>
      <i class="el-icon-close" @click="handleClose"></i>
    </div>
    <div class="layoutbox">
      <span>系统皮肤</span>
      <el-row :gutter="20">
        <!--如下新增对应选择块，并且附上自定义主题名classname以及增加click事件传值classname-->
        <el-col :span="12">
          <div class="aside_white_nav_white" @click="changeSkin('aside_white_nav_white')">
            <div class="aside"></div>
            <div class="right">
              <div class="nav"></div>
              <div class="cont"></div>
            </div>
            <div class="skin-select" v-if="skinChoose.className=='aside_white_nav_white'">
              <i class="el-icon-check"></i>
            </div>
          </div>
        </el-col>
       .......................
      </el-row>
    </div>
  </el-drawer>
</template>

<script>
..................
</script>

<style lang="scss" scoped>
..........
.layoutbox {
  padding: 20px;
  .el-col {
    margin-top: 20px;
  }
  .skin-select {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: $--color-primary;
  }
  /**这里是对应classname的样式这只按照以下规则添加即可**/
  .aside_white_nav_white {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px #666666;
    width: 100%;
    position: relative;
    .aside {
      width: 20px;
      background-color: #ffffff;
      height: 100px;
      border-right: 1px solid #e6e6e6;
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 100%;
      .nav {
        height: 10px;
        background-color: #ffffff;
        border-bottom: 1px solid #e6e6e6;
      }
      .cont {
        height: 89px;
        background-color: #ffffff;
      }
    }
  }
 ......
}
</style>
```