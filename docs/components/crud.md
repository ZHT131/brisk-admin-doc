# CRUD常用组件封装

## 前言
一般来说一个后台管理表格页面既要保留封装的灵活，又要保证重用的东西复用，降低藕合的同时我们可以剥离出如下标注的公共组件封装：

![crud](/crud.png)

## searchBtn 搜索按钮组件
引用组件：
```vue
<template>
  <!-- 搜索操作 -->
  <searchBtn @resetSearchForm="resetSearchForm" @submitSearchForm="submitSearchForm" />
</template>
<script>
import searchBtn from "@/components/crud/searchBtn.vue";
export default {
  components: {
    searchBtn,
  },
}
</script>
```
组件说明：

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| resetSearchForm | ` () => Promise<void>` |  | - | 自定义重置按钮逻辑`() => Promise<void>;` |  |
| submitSearchForm | ` () => Promise<void>` |  | - | 自定义提交按钮逻辑`() => Promise<void>;` |  |

## toolBar 工具栏组件
引用组件：
```vue
<template>
    <!-- 工具栏 -->
    <toolBar :toolShow="toolShow" :tableColumns="tableColumns" :exportLoading="exportLoading" @handleAdd="handleAdd" @handleSelectEdit="handleSelectEdit" @handleSelectDel="handleSelectDel" @handleExport="handleExport" @handleCheckAllChange="handleCheckAllChange" @handleCheckChange="handleCheckChange" @changeSearchShow="changeSearchShow" @refresh="refresh">
    </toolBar>
</template>
<script>
import toolBar from "@/components/crud/toolBar.vue";
export default {
  components: {
    toolBar,
  },
}
</script>
```
组件说明：

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| toolShow | `Object` | `{}` | `{add: true,edit: true,del: true,export: true}` | 定义显示的按钮 |  |
| tableColumns | `Array` | `[]` |  | 表格列筛选数据 |  |
| exportLoading | `Boolean` | false | true | 导出按钮动画 |  |
| handleAdd | ` () => Promise<void>` |  | - | 自定义新增按钮逻辑`() => Promise<void>;` |  |
| handleSelectEdit | ` () => Promise<void>` |  | - | 自定义编辑按钮逻辑`() => Promise<void>;` |  |
| handleSelectDel | ` () => Promise<void>` |  | - | 自定义删除按钮逻辑`() => Promise<void>;` |  |
| handleExport | ` () => Promise<void>` |  | - | 自定义导出按钮逻辑`() => Promise<void>;` |  |
| handleCheckAllChange | ` () => Promise<void>` |  | - | 自定义表格列全选按钮逻辑`() => Promise<void>;` |  |
| handleCheckChange | ` () => Promise<void>` |  | - | 自定义表格列改变选择按钮逻辑`() => Promise<void>;` |  |
| changeSearchShow | ` () => Promise<void>` |  | - | 自定义显示隐藏搜索表单按钮逻辑`() => Promise<void>;` |  |
| refresh | ` () => Promise<void>` |  | - | 自定义刷新按钮逻辑`() => Promise<void>;` |  |

## operate 操作栏组件
引用组件：
```vue
<template>
    <!--操作栏-->
    <operate :device="$store.state.app.device" :showOperate="showOperate" @handleView="handleView" @handleEdit="handleEdit" @handleDel="handleDel"></operate>
</template>
<script>
import operate from "@/components/crud/operate.vue";
export default {
  components: {
    operate,
  },
}
</script>
```
组件说明：

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| device | `String` |  | `mobile,desktop` | 设备环境 |  |
| showOperate | `Object` | `{}` |  |  操作栏显示按钮 |  |
| handleView | ` () => Promise<void>` |  | - | 自定义预览按钮逻辑`() => Promise<void>;` |  |
| handleEdit | ` () => Promise<void>` |  | - | 自定义编辑按钮逻辑`() => Promise<void>;` |  |
| handleDel | ` () => Promise<void>` |  | - | 自定义删除按钮逻辑`() => Promise<void>;` |  |

## pagination 分页组件
引用组件：
```vue
<template>
    <!--分页组件-->
    <pagination :device="$store.state.app.device" :currentPage="currentPage" :pageSize="pageSize" :pageSizes="pageSizes" :pageTotal="pageTotal" :pageMobileLayout="pageMobileLayout" :pageDesktopLayout="pageDesktopLayout" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
</template>
<script>
import pagination from "@/components/crud/pagination.vue";
export default {
  components: {
    pagination,
  },
}
</script>
```
组件说明：

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| device | `String` |  | `mobile,desktop` | 设备环境 |  |
| currentPage | `Number` | `1` |  |  当前页码 |  |
| pageSize | `Number` | `1` |  |  每页条数 |  |
| pageSizes | `Array` | `[]` |  |  每页显示个数选择器的选项设置 |  |
| pageTotal | `Number` | `1` |  |  总条目数 |  |
| pageMobileLayout | `String` |  |  |  移动端组件布局，子组件名用逗号分隔 |  |
| pageDesktopLayout | `String` |  |  |  桌面端组件布局，子组件名用逗号分隔 |  |
| handleSizeChange | ` () => Promise<void>` |  | - | 自定义每页条数改变逻辑`() => Promise<void>;` |  |
| handleCurrentChange | ` () => Promise<void>` |  | - | 自定义页码切换逻辑`() => Promise<void>;` |  |

## crud综合封装示例
本框架中进行了crud的mixins整合封装，也提供了相应使用示例，详情请查看权限管理示例页面的代码！