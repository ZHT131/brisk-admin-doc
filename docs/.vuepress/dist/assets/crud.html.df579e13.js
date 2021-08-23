import{o as n,a,F as t,b as s,d as l}from"./app.742c0c09.js";const e={},u=s("h1",{id:"crud常用组件封装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#crud常用组件封装","aria-hidden":"true"},"#"),l(" CRUD常用组件封装")],-1),o=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),l(" 前言")],-1),c=s("p",null,"一般来说一个后台管理表格页面既要保留封装的灵活，又要保证重用的东西复用，降低藕合的同时我们可以剥离出如下标注的公共组件封装：",-1),p=s("p",null,[s("img",{src:"/crud.png",alt:"crud"})],-1),r=s("h2",{id:"searchbtn-搜索按钮组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#searchbtn-搜索按钮组件","aria-hidden":"true"},"#"),l(" searchBtn 搜索按钮组件")],-1),d=s("p",null,"引用组件：",-1),i=s("div",{class:"language-vue ext-vue line-numbers-mode"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n  "),s("span",{class:"token comment"},"\x3c!-- 搜索操作 --\x3e"),l("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("searchBtn")]),l(),s("span",{class:"token attr-name"},"@resetSearchForm"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("resetSearchForm"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@submitSearchForm"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("submitSearchForm"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token punctuation"},"/>")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"import"),l(" searchBtn "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},'"@/components/crud/searchBtn.vue"'),s("span",{class:"token punctuation"},";"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  components"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    searchBtn"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1),k=s("p",null,"组件说明：",-1),m=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"可选值"),s("th",null,"说明"),s("th",null,"版本")])]),s("tbody",null,[s("tr",null,[s("td",null,"resetSearchForm"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义重置按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"submitSearchForm"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义提交按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")])])],-1),h=s("h2",{id:"toolbar-工具栏组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#toolbar-工具栏组件","aria-hidden":"true"},"#"),l(" toolBar 工具栏组件")],-1),b=s("p",null,"引用组件：",-1),g=s("div",{class:"language-vue ext-vue line-numbers-mode"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n    "),s("span",{class:"token comment"},"\x3c!-- 工具栏 --\x3e"),l("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("toolBar")]),l(),s("span",{class:"token attr-name"},":toolShow"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("toolShow"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":tableColumns"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("tableColumns"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":exportLoading"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("exportLoading"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleAdd"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleAdd"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleSelectEdit"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleSelectEdit"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleSelectDel"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleSelectDel"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleExport"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleExport"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleCheckAllChange"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleCheckAllChange"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleCheckChange"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleCheckChange"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@changeSearchShow"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("changeSearchShow"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@refresh"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("refresh"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),l("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("toolBar")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"import"),l(" toolBar "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},'"@/components/crud/toolBar.vue"'),s("span",{class:"token punctuation"},";"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  components"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    toolBar"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br")])],-1),v=s("p",null,"组件说明：",-1),S=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"可选值"),s("th",null,"说明"),s("th",null,"版本")])]),s("tbody",null,[s("tr",null,[s("td",null,"toolShow"),s("td",null,[s("code",null,"Object")]),s("td",null,[s("code",null,"{}")]),s("td",null,[s("code",null,"{add: true,edit: true,del: true,export: true}")]),s("td",null,"定义显示的按钮"),s("td")]),s("tr",null,[s("td",null,"tableColumns"),s("td",null,[s("code",null,"Array")]),s("td",null,[s("code",null,"[]")]),s("td"),s("td",null,"表格列筛选数据"),s("td")]),s("tr",null,[s("td",null,"exportLoading"),s("td",null,[s("code",null,"Boolean")]),s("td",null,"false"),s("td",null,"true"),s("td",null,"导出按钮动画"),s("td")]),s("tr",null,[s("td",null,"handleAdd"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义新增按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleSelectEdit"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义编辑按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleSelectDel"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义删除按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleExport"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义导出按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleCheckAllChange"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义表格列全选按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleCheckChange"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义表格列改变选择按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"changeSearchShow"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义显示隐藏搜索表单按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"refresh"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义刷新按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")])])],-1),P=s("h2",{id:"operate-操作栏组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#operate-操作栏组件","aria-hidden":"true"},"#"),l(" operate 操作栏组件")],-1),x=s("p",null,"引用组件：",-1),w=s("div",{class:"language-vue ext-vue line-numbers-mode"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n    "),s("span",{class:"token comment"},"\x3c!--操作栏--\x3e"),l("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("operate")]),l(),s("span",{class:"token attr-name"},":device"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("$store.state.app.device"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":showOperate"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("showOperate"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleView"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleView"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleEdit"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleEdit"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleDel"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleDel"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("operate")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"import"),l(" operate "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},'"@/components/crud/operate.vue"'),s("span",{class:"token punctuation"},";"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  components"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    operate"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1),y=s("p",null,"组件说明：",-1),q=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"可选值"),s("th",null,"说明"),s("th",null,"版本")])]),s("tbody",null,[s("tr",null,[s("td",null,"device"),s("td",null,[s("code",null,"String")]),s("td"),s("td",null,[s("code",null,"mobile,desktop")]),s("td",null,"设备环境"),s("td")]),s("tr",null,[s("td",null,"showOperate"),s("td",null,[s("code",null,"Object")]),s("td",null,[s("code",null,"{}")]),s("td"),s("td",null,"操作栏显示按钮"),s("td")]),s("tr",null,[s("td",null,"handleView"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义预览按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleEdit"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义编辑按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleDel"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义删除按钮逻辑"),s("code",null,"() => Promise<void>;")]),s("td")])])],-1),C=s("h2",{id:"pagination-分页组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pagination-分页组件","aria-hidden":"true"},"#"),l(" pagination 分页组件")],-1),f=s("p",null,"引用组件：",-1),B=s("div",{class:"language-vue ext-vue line-numbers-mode"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n    "),s("span",{class:"token comment"},"\x3c!--分页组件--\x3e"),l("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("pagination")]),l(),s("span",{class:"token attr-name"},":device"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("$store.state.app.device"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":currentPage"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("currentPage"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":pageSize"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("pageSize"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":pageSizes"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("pageSizes"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":pageTotal"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("pageTotal"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":pageMobileLayout"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("pageMobileLayout"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":pageDesktopLayout"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("pageDesktopLayout"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleSizeChange"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleSizeChange"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},"@handleCurrentChange"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleCurrentChange"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token punctuation"},"/>")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"import"),l(" pagination "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},'"@/components/crud/pagination.vue"'),s("span",{class:"token punctuation"},";"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  components"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    pagination"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1),D=s("p",null,"组件说明：",-1),z=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"可选值"),s("th",null,"说明"),s("th",null,"版本")])]),s("tbody",null,[s("tr",null,[s("td",null,"device"),s("td",null,[s("code",null,"String")]),s("td"),s("td",null,[s("code",null,"mobile,desktop")]),s("td",null,"设备环境"),s("td")]),s("tr",null,[s("td",null,"currentPage"),s("td",null,[s("code",null,"Number")]),s("td",null,[s("code",null,"1")]),s("td"),s("td",null,"当前页码"),s("td")]),s("tr",null,[s("td",null,"pageSize"),s("td",null,[s("code",null,"Number")]),s("td",null,[s("code",null,"1")]),s("td"),s("td",null,"每页条数"),s("td")]),s("tr",null,[s("td",null,"pageSizes"),s("td",null,[s("code",null,"Array")]),s("td",null,[s("code",null,"[]")]),s("td"),s("td",null,"每页显示个数选择器的选项设置"),s("td")]),s("tr",null,[s("td",null,"pageTotal"),s("td",null,[s("code",null,"Number")]),s("td",null,[s("code",null,"1")]),s("td"),s("td",null,"总条目数"),s("td")]),s("tr",null,[s("td",null,"pageMobileLayout"),s("td",null,[s("code",null,"String")]),s("td"),s("td"),s("td",null,"移动端组件布局，子组件名用逗号分隔"),s("td")]),s("tr",null,[s("td",null,"pageDesktopLayout"),s("td",null,[s("code",null,"String")]),s("td"),s("td"),s("td",null,"桌面端组件布局，子组件名用逗号分隔"),s("td")]),s("tr",null,[s("td",null,"handleSizeChange"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义每页条数改变逻辑"),s("code",null,"() => Promise<void>;")]),s("td")]),s("tr",null,[s("td",null,"handleCurrentChange"),s("td",null,[s("code",null," () => Promise<void>")]),s("td"),s("td",null,"-"),s("td",null,[l("自定义页码切换逻辑"),s("code",null,"() => Promise<void>;")]),s("td")])])],-1),E=s("h2",{id:"crud综合封装示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#crud综合封装示例","aria-hidden":"true"},"#"),l(" crud综合封装示例")],-1),L=s("p",null,"本框架中进行了crud的mixins整合封装，也提供了相应使用示例，详情请查看权限管理示例页面的代码！",-1);e.render=function(s,l){return n(),a(t,null,[u,o,c,p,r,d,i,k,m,h,b,g,v,S,P,x,w,y,q,C,f,B,D,z,E,L],64)};export{e as default};
