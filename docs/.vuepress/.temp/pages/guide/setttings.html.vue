<template><h1 id="项目配置项" tabindex="-1"><a class="header-anchor" href="#项目配置项" aria-hidden="true">#</a> 项目配置项</h1>
<p>用于修改项目的配色、布局、缓存、多语言、组件默认配置</p>
<h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2>
<p>项目的环境变量配置位于项目根目录下的 <a href="https://github.com/jekip/naive-ui-admin/blob/main/.env" target="_blank" rel="noopener noreferrer">.env<OutboundLink/></a>、<a href="https://github.com/jekip/naive-ui-admin/blob/main/.env.development" target="_blank" rel="noopener noreferrer">.env.development<OutboundLink/></a>、<a href="https://github.com/jekip/naive-ui-admin/blob/main/.env.production" target="_blank" rel="noopener noreferrer">.env.production<OutboundLink/></a></p>
<p>具体可以参考 <a href="https://github.com/vitejs/vite#modes-and-environment-variables" target="_blank" rel="noopener noreferrer">Vite 文档<OutboundLink/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.env                <span class="token comment"># 在所有的环境中被载入</span>
.env.local          <span class="token comment"># 在所有的环境中被载入，但会被 git 忽略</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># 只在指定的模式中被载入</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">温馨提醒</p>
<ul>
<li>只有以 <code>VITE_ </code> 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>以 <code>VITE_GLOB_*</code> 开头的的变量，在打包的时候，会被加入<a href="#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE">_app.config.js</a>配置文件当中.</li>
</ul>
</div>
<h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3>
<h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3>
<p>所有环境适用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 端口号</span>
<span class="token assign-left variable">VITE_PORT</span><span class="token operator">=</span><span class="token number">3100</span>
<span class="token comment"># 网站标题</span>
<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>Naive Ui Admin
<span class="token comment"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span>
<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>naive_ui_admin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3>
<p>开发环境适用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 是否开启mock数据，关闭时需要自行对接后台接口</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># 资源公共路径,需要以 /开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># 是否删除Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false
<span class="token comment"># 接口地址</span>
<span class="token comment"># 如果没有跨域问题，直接在这里配置即可</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># 图片上传地址</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># 图片前缀地址</span>
<span class="token assign-left variable">VITE_GLOB_IMG_URL</span><span class="token operator">=</span>/
<span class="token comment"># 接口前缀</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这里配置的 <code>VITE_PROXY</code> 以及 <code>VITE_GLOB_API_URL</code>, /api 需要是唯一的，不要和接口有的名字冲突</p>
<p>如果你的接口是 <code>http://localhost:3000/api</code> 之类的，请考虑将 <code>VITE_GLOB_API_URL=/xxxx</code> 换成别的名字</p>
</div>
<h3 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3>
<p>生产环境适用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 是否开启mock</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># 接口地址 可以由nginx做转发或者直接写实际地址</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># 文件上传地址 可以由nginx做转发或者直接写实际地址</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
<span class="token comment"># 是否删除Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true
<span class="token comment"># 资源公共路径,需要以 / 开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="生产环境动态配置" tabindex="-1"><a class="header-anchor" href="#生产环境动态配置" aria-hidden="true">#</a> 生产环境动态配置</h2>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<p>当执行<code>yarn build</code>构建项目之后，会自动生成 <code>_app.config.js</code> 文件并插入 <code>index.html</code>。</p>
<p><strong>注意: 开发环境不会生成</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// _app.config.js</span>
<span class="token comment">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">'Naive Ui Admin'</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">'naive-ui-admin'</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">'/app'</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">'/upload'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3>
<p><code>_app.config.js</code> 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 <code>/dist/_app.config.js</code> 内的变量，刷新即可更新代码内的局部变量。</p>
<h3 id="如何获取全局变量" tabindex="-1"><a class="header-anchor" href="#如何获取全局变量" aria-hidden="true">#</a> 如何获取全局变量</h3>
<p>想要获取 <code>_app.config.js</code> 内的变量，可以使用 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">src/hooks/setting/index.ts<OutboundLink/></a> 提供的函数来进行获取</p>
<h3 id="如何新增-新增一个可动态修改的配置项" tabindex="-1"><a class="header-anchor" href="#如何新增-新增一个可动态修改的配置项" aria-hidden="true">#</a> 如何新增(新增一个可动态修改的配置项)</h3>
<ol>
<li>
<p>首先在 <code>.env</code> 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 <code>VITE_GLOB_</code>开头</p>
</li>
<li>
<p><code>VITE_GLOB_</code> 开头的变量会自动加入环境变量，通过在 <code>src/types/config.d.ts</code> 内修改 <code>GlobEnvConfig</code> 和 <code>GlobConfig</code> 两个环境变量的值来定义新添加的类型</p>
</li>
<li>
<p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">useGlobSetting<OutboundLink/></a> 函数中添加刚新增的返回值即可</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">SettingWrap</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Take global configuration</span>
  <span class="token keyword">const</span> glob<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    apiUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    shortName<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    urlPrefix<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    uploadUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>项目配置文件用于配置项目内展示的内容、布局、文本等效果，该配置，暂时没有存于<code>localStorage</code>中。刷新则恢复初始值。</p>
</div>
<p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/projectSetting.ts<OutboundLink/></a></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式</span>
    navMode<span class="token operator">:</span> <span class="token string">'vertical'</span><span class="token punctuation">,</span>
    <span class="token comment">//导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏</span>
    navTheme<span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
    <span class="token comment">//顶部</span>
    headerSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//背景色</span>
        bgColor<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token comment">//固定顶部</span>
        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//显示重载按钮</span>
        isReload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//页脚</span>
    showFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//多标签</span>
    multiTabsSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//背景色</span>
        bgColor<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token comment">//是否显示</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//固定多标签</span>
        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单</span>
    menuSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//最小宽度</span>
        minMenuWidth<span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
        <span class="token comment">//菜单宽度</span>
        menuWidth<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token comment">//固定菜单</span>
        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//面包屑</span>
    crumbsSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//是否显示</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//显示图标</span>
        showIcon<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单权限模式 FIXED 前端固定路由  BACK 动态获取</span>
    permissionMode<span class="token operator">:</span> <span class="token string">'FIXED'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="组件配置" tabindex="-1"><a class="header-anchor" href="#组件配置" aria-hidden="true">#</a> 组件配置</h3>
<p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/componentSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/componentSetting.ts<OutboundLink/></a></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    table<span class="token operator">:</span> <span class="token punctuation">{</span>
        apiSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当前页的字段名</span>
            pageField<span class="token operator">:</span> <span class="token string">'page'</span><span class="token punctuation">,</span>
            <span class="token comment">// 每页数量字段名</span>
            sizeField<span class="token operator">:</span> <span class="token string">'pageSize'</span><span class="token punctuation">,</span>
            <span class="token comment">// 接口返回的数据字段名</span>
            listField<span class="token operator">:</span> <span class="token string">'list'</span><span class="token punctuation">,</span>
            <span class="token comment">// 接口返回总页数字段名</span>
            totalField<span class="token operator">:</span> <span class="token string">'pageCount'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//默认分页数量</span>
        defaultPageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token comment">//可切换每页数量集合</span>
        pageSizes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    upload<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//考虑接口规范不同</span>
        apiSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 集合字段名</span>
            infoField<span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token comment">// 图片地址字段名</span>
            imgField<span class="token operator">:</span> <span class="token string">'photo'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//最大上传图片大小</span>
        maxSize<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">//图片上传类型</span>
        fileType<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'image/png'</span><span class="token punctuation">,</span> <span class="token string">'image/jpg'</span><span class="token punctuation">,</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token string">'image/gif'</span><span class="token punctuation">,</span> <span class="token string">'image/svg+xml'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3>
<p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/designSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/designSetting.ts<OutboundLink/></a></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// app theme preset color</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> appThemeList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'#2d8cf0'</span><span class="token punctuation">,</span>
    <span class="token string">'#0960bd'</span><span class="token punctuation">,</span>
    <span class="token string">'#0084f4'</span><span class="token punctuation">,</span>
    <span class="token string">'#009688'</span><span class="token punctuation">,</span>
    <span class="token string">'#536dfe'</span><span class="token punctuation">,</span>
    <span class="token string">'#ff5c93'</span><span class="token punctuation">,</span>
    <span class="token string">'#ee4f12'</span><span class="token punctuation">,</span>
    <span class="token string">'#0096c7'</span><span class="token punctuation">,</span>
    <span class="token string">'#9c27b0'</span><span class="token punctuation">,</span>
    <span class="token string">'#ff9800'</span><span class="token punctuation">,</span>
    <span class="token string">'#FF3D68'</span><span class="token punctuation">,</span>
    <span class="token string">'#00C1D4'</span><span class="token punctuation">,</span>
    <span class="token string">'#71EFA3'</span><span class="token punctuation">,</span>
    <span class="token string">'#171010'</span><span class="token punctuation">,</span>
    <span class="token string">'#78DEC7'</span><span class="token punctuation">,</span>
    <span class="token string">'#1768AC'</span><span class="token punctuation">,</span>
    <span class="token string">'#FB9300'</span><span class="token punctuation">,</span>
    <span class="token string">'#FC5404'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//深色主题</span>
    darkTheme<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//系统主题色</span>
    appTheme<span class="token operator">:</span> <span class="token string">'#2d8cf0'</span><span class="token punctuation">,</span>
    <span class="token comment">//系统内置主题色列表</span>
    appThemeList<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></template>
