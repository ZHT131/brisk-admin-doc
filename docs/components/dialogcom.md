# 弹窗组件

## 前言

本组件基于 element-plus 的 dialog 组件二次封装，集成了国际化功能，实现了内部滚动，并兼容移动端和桌面端显示布局，自定义了提交、取消按钮事件，支持插入任意内部元素，并且支持扩展按钮！

## dialogcom 组件

引用组件：

```vue
<template>
  <!-- 详情弹窗组件 -->
  <dialogcom
    :title="$t('admin.component.addlog_detail_title')"
    :device="$store.state.app.device"
    :showDialog="detailDialogFormVisible"
    @cancle="detailCancle"
    @submit="detailSubmit"
  >
    <template #form>
      <el-table :data="detailData" style="width: 100%">
        <el-table-column
          prop="name"
          :label="$root.$t('admin.component.detail_title')"
          width="180"
        >
          <template #default="scope">
            <span>{{ $root.$t(scope.row.name) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          :label="$root.$t('admin.component.detail_content')"
          width="180"
        >
        </el-table-column>
      </el-table>
    </template>
  </dialogcom>
</template>
<script>
import dialogcom from "@/components/crud/dialogcom.vue";
export default {
  components: {
    dialogcom,
  },
};
</script>
```

组件说明：

| 属性                | 类型                   | 默认值  | 可选值           | 说明                                         | 版本 |
| ------------------- | ---------------------- | ------- | ---------------- | -------------------------------------------- | ---- |
| title               | `String`               |         |                  | 标题（请配置相应 lang 语言包）               |      |
| device              | `String`               |         | `mobile,desktop` | 设备环境                                     |     |
| showDialog          | `Boolean`              | `false` |                  | 显示/隐藏弹窗                                |     |
| cancle    | ` () => Promise<void>` |         | -                | 自定义取消按钮逻辑`() => Promise<void>;` |      |
| submit | ` () => Promise<void>` |         | -                | 自定义提交按钮逻辑`() => Promise<void>;`     |      |
