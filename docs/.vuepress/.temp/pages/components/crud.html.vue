<template><h1 id="crud常用组件封装" tabindex="-1"><a class="header-anchor" href="#crud常用组件封装" aria-hidden="true">#</a> CRUD常用组件封装</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>一般来说一个后台管理表格页面既要保留封装的灵活，又要保证重用的东西复用，降低藕合的同时我们可以剥离出如下标注的公共组件封装：</p>
<p><img src="/crud.png" alt="crud"></p>
<h2 id="searchbtn-搜索按钮组件" tabindex="-1"><a class="header-anchor" href="#searchbtn-搜索按钮组件" aria-hidden="true">#</a> searchBtn 搜索按钮组件</h2>
<p>引用组件：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 搜索操作 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>searchBtn</span> <span class="token attr-name">@resetSearchForm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetSearchForm<span class="token punctuation">"</span></span> <span class="token attr-name">@submitSearchForm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitSearchForm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> searchBtn <span class="token keyword">from</span> <span class="token string">"@/components/crud/searchBtn.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    searchBtn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>组件说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>resetSearchForm</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义重置按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>submitSearchForm</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义提交按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="toolbar-工具栏组件" tabindex="-1"><a class="header-anchor" href="#toolbar-工具栏组件" aria-hidden="true">#</a> toolBar 工具栏组件</h2>
<p>引用组件：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 工具栏 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>toolBar</span> <span class="token attr-name">:toolShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toolShow<span class="token punctuation">"</span></span> <span class="token attr-name">:tableColumns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableColumns<span class="token punctuation">"</span></span> <span class="token attr-name">:exportLoading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>exportLoading<span class="token punctuation">"</span></span> <span class="token attr-name">@handleAdd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleAdd<span class="token punctuation">"</span></span> <span class="token attr-name">@handleSelectEdit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectEdit<span class="token punctuation">"</span></span> <span class="token attr-name">@handleSelectDel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectDel<span class="token punctuation">"</span></span> <span class="token attr-name">@handleExport</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleExport<span class="token punctuation">"</span></span> <span class="token attr-name">@handleCheckAllChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCheckAllChange<span class="token punctuation">"</span></span> <span class="token attr-name">@handleCheckChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCheckChange<span class="token punctuation">"</span></span> <span class="token attr-name">@changeSearchShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeSearchShow<span class="token punctuation">"</span></span> <span class="token attr-name">@refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>toolBar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> toolBar <span class="token keyword">from</span> <span class="token string">"@/components/crud/toolBar.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    toolBar<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>组件说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>toolShow</td>
<td><code>Object</code></td>
<td><code>{}</code></td>
<td><code>{add: true,edit: true,del: true,export: true}</code></td>
<td>定义显示的按钮</td>
<td></td>
</tr>
<tr>
<td>tableColumns</td>
<td><code>Array</code></td>
<td><code>[]</code></td>
<td></td>
<td>表格列筛选数据</td>
<td></td>
</tr>
<tr>
<td>exportLoading</td>
<td><code>Boolean</code></td>
<td>false</td>
<td>true</td>
<td>导出按钮动画</td>
<td></td>
</tr>
<tr>
<td>handleAdd</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义新增按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleSelectEdit</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义编辑按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleSelectDel</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义删除按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleExport</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义导出按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleCheckAllChange</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义表格列全选按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleCheckChange</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义表格列改变选择按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>changeSearchShow</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义显示隐藏搜索表单按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>refresh</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义刷新按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="operate-操作栏组件" tabindex="-1"><a class="header-anchor" href="#operate-操作栏组件" aria-hidden="true">#</a> operate 操作栏组件</h2>
<p>引用组件：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--操作栏--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>operate</span> <span class="token attr-name">:device</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.state.app.device<span class="token punctuation">"</span></span> <span class="token attr-name">:showOperate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showOperate<span class="token punctuation">"</span></span> <span class="token attr-name">@handleView</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleView<span class="token punctuation">"</span></span> <span class="token attr-name">@handleEdit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEdit<span class="token punctuation">"</span></span> <span class="token attr-name">@handleDel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>operate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> operate <span class="token keyword">from</span> <span class="token string">"@/components/crud/operate.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    operate<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>组件说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>device</td>
<td><code>String</code></td>
<td></td>
<td><code>mobile,desktop</code></td>
<td>设备环境</td>
<td></td>
</tr>
<tr>
<td>showOperate</td>
<td><code>Object</code></td>
<td><code>{}</code></td>
<td></td>
<td>操作栏显示按钮</td>
<td></td>
</tr>
<tr>
<td>handleView</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义预览按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleEdit</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义编辑按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleDel</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义删除按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="pagination-分页组件" tabindex="-1"><a class="header-anchor" href="#pagination-分页组件" aria-hidden="true">#</a> pagination 分页组件</h2>
<p>引用组件：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--分页组件--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token attr-name">:device</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.state.app.device<span class="token punctuation">"</span></span> <span class="token attr-name">:currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span> <span class="token attr-name">:pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageSize<span class="token punctuation">"</span></span> <span class="token attr-name">:pageSizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageSizes<span class="token punctuation">"</span></span> <span class="token attr-name">:pageTotal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageTotal<span class="token punctuation">"</span></span> <span class="token attr-name">:pageMobileLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageMobileLayout<span class="token punctuation">"</span></span> <span class="token attr-name">:pageDesktopLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageDesktopLayout<span class="token punctuation">"</span></span> <span class="token attr-name">@handleSizeChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSizeChange<span class="token punctuation">"</span></span> <span class="token attr-name">@handleCurrentChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCurrentChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> pagination <span class="token keyword">from</span> <span class="token string">"@/components/crud/pagination.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    pagination<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>组件说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>device</td>
<td><code>String</code></td>
<td></td>
<td><code>mobile,desktop</code></td>
<td>设备环境</td>
<td></td>
</tr>
<tr>
<td>currentPage</td>
<td><code>Number</code></td>
<td><code>1</code></td>
<td></td>
<td>当前页码</td>
<td></td>
</tr>
<tr>
<td>pageSize</td>
<td><code>Number</code></td>
<td><code>1</code></td>
<td></td>
<td>每页条数</td>
<td></td>
</tr>
<tr>
<td>pageSizes</td>
<td><code>Array</code></td>
<td><code>[]</code></td>
<td></td>
<td>每页显示个数选择器的选项设置</td>
<td></td>
</tr>
<tr>
<td>pageTotal</td>
<td><code>Number</code></td>
<td><code>1</code></td>
<td></td>
<td>总条目数</td>
<td></td>
</tr>
<tr>
<td>pageMobileLayout</td>
<td><code>String</code></td>
<td></td>
<td></td>
<td>移动端组件布局，子组件名用逗号分隔</td>
<td></td>
</tr>
<tr>
<td>pageDesktopLayout</td>
<td><code>String</code></td>
<td></td>
<td></td>
<td>桌面端组件布局，子组件名用逗号分隔</td>
<td></td>
</tr>
<tr>
<td>handleSizeChange</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义每页条数改变逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
<tr>
<td>handleCurrentChange</td>
<td><code> () =&gt; Promise&lt;void&gt;</code></td>
<td></td>
<td>-</td>
<td>自定义页码切换逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="crud综合封装示例" tabindex="-1"><a class="header-anchor" href="#crud综合封装示例" aria-hidden="true">#</a> crud综合封装示例</h2>
<p>本框架中进行了crud的mixins整合封装，也提供了相应使用示例，详情请查看权限管理示例页面的代码！</p>
</template>
