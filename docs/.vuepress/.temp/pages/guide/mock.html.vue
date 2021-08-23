<template><h1 id="数据-mock-联调" tabindex="-1"><a class="header-anchor" href="#数据-mock-联调" aria-hidden="true">#</a> 数据 mock&amp;联调</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。</p>
<h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<p>如果前端应用和后端接口服务器没有运行在同一个主机端口上，你需要在 vite.config.js 中将接口请求代理到接口服务器。</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>已经默认配置了本地代理，可以根据自己的要求进行修改。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token operator">:</span> <span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">8086</span><span class="token punctuation">,</span>
    open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 反向代理</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            target<span class="token operator">:</span> <span class="token string">"http://127.0.0.1:80/"</span><span class="token punctuation">,</span>
            changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="接口请求" tabindex="-1"><a class="header-anchor" href="#接口请求" aria-hidden="true">#</a> 接口请求</h2>
<p>首先在[mock/data]中新建模拟数据接口文件，如下示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//mock/data/admin.js</span>
<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">"mockjs"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">adminUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    page<span class="token operator">:</span> body<span class="token punctuation">.</span>page<span class="token punctuation">,</span>
    size<span class="token operator">:</span> body<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
    rows<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    total<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> body<span class="token punctuation">.</span>size<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>rows<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">"@integer(1, 100)"</span><span class="token punctuation">,</span>
        username<span class="token operator">:</span> <span class="token string">"@string('lower', 5)"</span><span class="token punctuation">,</span>
        nickname<span class="token operator">:</span> <span class="token string">"@ctitle"</span><span class="token punctuation">,</span>
        group_id<span class="token operator">:</span> <span class="token string">"@integer(1, 10)"</span><span class="token punctuation">,</span>
        <span class="token string">"group|2"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">"管理员组"</span><span class="token punctuation">,</span>
          id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        status<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        status_text<span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span>
        createtime<span class="token operator">:</span> <span class="token string">"@datetime"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> adminUser <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>然后在[mock/index.js]中设置 mock 接口地址拦截，如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">"mockjs"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> adminUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./data/admin"</span><span class="token punctuation">;</span>
Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1/api/adminUser"</span><span class="token punctuation">,</span> <span class="token string">"post"</span><span class="token punctuation">,</span> adminUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>完成拦截转发后可以在[src/api]文件夹中新建对应代理接口文件方便统一管理，也可使用 api 文件中的公共封装方法[src/api/common.js]直接在页面发起请求，分别如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/api/index.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"../utils/http/axios"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"api/login"</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    config<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> comReq <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/common.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用接口统一配置方法</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//执行操作</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//使用接口公共封装方法</span>
    <span class="token function">comReq</span><span class="token punctuation">(</span><span class="token string">"api/adminUser"</span><span class="token punctuation">,</span> <span class="token string">"post"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
