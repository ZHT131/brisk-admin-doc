<template><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1>
<p>本文会帮助你从头启动项目</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<div class="custom-container tip"><p class="custom-container-title">关于组件</p>
<p>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p>
</div>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<p>本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x<OutboundLink/></a>、<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<OutboundLink/></a></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x<OutboundLink/></a>，否则依赖可能安装不上。</li>
<li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a> 版本要求<code>12.x</code>以上，且不能为<code>13.x</code>版本，这里推荐 <code>14.x</code> 及以上。</li>
</ul>
</div>
<h2 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2>
<p>如果您使用的 IDE 是<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode<OutboundLink/></a>(推荐)的话，可以安装以下工具来提高开发效率及代码格式化</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans" target="_blank" rel="noopener noreferrer">Chinese<OutboundLink/></a> - vscode中文（简体）语言包</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur<OutboundLink/></a> - vue 开发必备 （也可以选择 Volar）</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier<OutboundLink/></a> - 代码格式化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV<OutboundLink/></a> - .env 文件 高亮</li>
</ul>
<h2 id="代码获取" tabindex="-1"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p>
</div>
<h3 id="从-github-获取代码" tabindex="-1"><a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a> 从 GitHub 获取代码</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone 代码</span>
<span class="token function">git</span> clone https://github.com/jekip/naive-ui-admin.git

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="从-gitee-获取代码" tabindex="-1"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3>
<p>如果从 github clone 代码较慢的话，可以尝试用 <a href="https://gitee.com/Ahjung/naive-ui-admin" target="_blank" rel="noopener noreferrer">Gitee<OutboundLink/></a> 同步代码到自己的仓库，再 clone 下来即可。</p>
<p>也可以通过下方地址进行 clone</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/Ahjung/naive-ui-admin.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><a href="https://gitee.com/Ahjung/naive-ui-admin.git" target="_blank" rel="noopener noreferrer">Gitee<OutboundLink/></a>的代码可能不是最新的</p>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3>
<p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a>，请安装它。</p>
<p><strong>验证</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 出现相应npm版本即可</span>
<span class="token function">npm</span> -v
<span class="token comment"># 出现相应node版本即可</span>
node -v

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果你需要同时存在多个 node 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm<OutboundLink/></a> 或者其他工具进行 Node.js 进行版本管理。</p>
<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3>
<h4 id="yarn-安装" tabindex="-1"><a class="header-anchor" href="#yarn-安装" aria-hidden="true">#</a> yarn 安装</h4>
<p>必须使用 <a href="https://github.com/yarnpkg/yarn" target="_blank" rel="noopener noreferrer">Yarn<OutboundLink/></a>进行依赖安装（若其他包管理器安装不了需要自行处理）。</p>
<p>如果未安装<code>yarn</code>，可以用下面命令来进行全局安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 全局安装yarn</span>
<span class="token function">npm</span> i -g <span class="token function">yarn</span>
<span class="token comment"># 验证</span>
<span class="token function">yarn</span> -v <span class="token comment"># 出现对应版本号即代表安装成功</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="依赖安装命令" tabindex="-1"><a class="header-anchor" href="#依赖安装命令" aria-hidden="true">#</a> 依赖安装命令</h4>
<p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token comment"># 安装依赖</span>
  <span class="token string">"bootstrap"</span><span class="token builtin class-name">:</span> <span class="token string">"yarn install"</span>,
  <span class="token comment"># 运行项目</span>
  <span class="token string">"serve"</span><span class="token builtin class-name">:</span> <span class="token string">"npm run dev"</span>,
  <span class="token comment"># 运行项目</span>
  <span class="token string">"dev"</span><span class="token builtin class-name">:</span> <span class="token string">"vite"</span>,
  <span class="token comment"># 构建项目</span>
  <span class="token string">"build"</span><span class="token builtin class-name">:</span> <span class="token string">"vite build &amp;&amp; esno ./build/script/postBuild.ts"</span>,
  <span class="token comment"># 清空缓存后构建项目</span>
  <span class="token string">"build:no-cache"</span><span class="token builtin class-name">:</span> <span class="token string">"yarn clean:cache &amp;&amp; npm run build"</span>,
  <span class="token comment"># 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看</span>
  <span class="token string">"report"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env REPORT=true npm run build"</span>,
  <span class="token comment"># 类型检查</span>
  <span class="token string">"type:check"</span><span class="token builtin class-name">:</span> <span class="token string">"vue-tsc --noEmit --skipLibCheck"</span>,
  <span class="token comment"># 预览打包后的内容（先打包在进行预览）</span>
  <span class="token string">"preview"</span><span class="token builtin class-name">:</span> <span class="token string">"npm run build &amp;&amp; vite preview"</span>,
  <span class="token comment"># 直接预览本地 dist 文件目录</span>
  <span class="token string">"preview:dist"</span><span class="token builtin class-name">:</span> <span class="token string">"vite preview"</span>,
  <span class="token comment"># 删除缓存</span>
  <span class="token string">"clean:cache"</span><span class="token builtin class-name">:</span> <span class="token string">"rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite"</span>,
  <span class="token comment"># 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)</span>
  <span class="token string">"clean:lib"</span><span class="token builtin class-name">:</span> <span class="token string">"rimraf node_modules"</span>,
  <span class="token comment"># 执行 eslint 校验，并修复部分问题</span>
  <span class="token string">"lint:eslint"</span><span class="token builtin class-name">:</span> <span class="token string">"eslint <span class="token entity" title="\&quot;">\"</span>{src,mock}/**/*.{vue,ts,tsx}<span class="token entity" title="\&quot;">\"</span> --fix"</span>,
  <span class="token comment"># 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）</span>
  <span class="token string">"lint:prettier"</span><span class="token builtin class-name">:</span> <span class="token string">"prettier --write --loglevel warn <span class="token entity" title="\&quot;">\"</span>src/**/*.{js,json,tsx,css,less,scss,vue,html,md}<span class="token entity" title="\&quot;">\"</span>"</span>,
  <span class="token comment"># 执行 stylelint 格式化</span>
  <span class="token string">"lint:stylelint"</span><span class="token builtin class-name">:</span> <span class="token string">"stylelint --fix <span class="token entity" title="\&quot;">\"</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\&quot;">\"</span> --cache --cache-location node_modules/.cache/stylelint/"</span>,
  <span class="token string">"lint:lint-staged"</span><span class="token builtin class-name">:</span> <span class="token string">"lint-staged -c ./.husky/lintstagedrc.js"</span>,
  <span class="token string">"lint:pretty"</span><span class="token builtin class-name">:</span> <span class="token string">"pretty-quick --staged"</span>,
  <span class="token comment"># 重新安装依赖，见下方说明</span>
  <span class="token string">"reinstall"</span><span class="token builtin class-name">:</span> <span class="token string">"rimraf yarn.lock &amp;&amp; rimraf package.lock.json &amp;&amp; rimraf node_modules &amp;&amp; npm run bootstrap"</span>,
<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="重新安装依赖" tabindex="-1"><a class="header-anchor" href="#重新安装依赖" aria-hidden="true">#</a> 重新安装依赖</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<p>该命令会先删除 <code>node_modules</code>、<code>yarn.lock</code>、<code>package.lock.json</code> 后再进行依赖重新安装（安装速度会明显变慢）。</p>
<p>接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。</p>
<h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token builtin class-name">.</span>
├── build <span class="token comment"># 打包脚本相关</span>
│   ├── config <span class="token comment"># 配置文件</span>
│   ├── generate <span class="token comment"># 生成器</span>
│   ├── script <span class="token comment"># 脚本</span>
│   └── vite <span class="token comment"># vite配置</span>
├── mock <span class="token comment"># mock文件夹</span>
├── public <span class="token comment"># 公共静态资源目录</span>
├── src <span class="token comment"># 主目录</span>
│   ├── api <span class="token comment"># 接口文件</span>
│   ├── assets <span class="token comment"># 资源文件</span>
│   │   ├── icons <span class="token comment"># icon sprite 图标文件夹</span>
│   │   ├── images <span class="token comment"># 项目存放图片的文件夹</span>
│   │   └── svg <span class="token comment"># 项目存放svg图片的文件夹</span>
│   ├── components <span class="token comment"># 公共组件</span>
│   ├── design <span class="token comment"># 样式文件</span>
│   ├── directives <span class="token comment"># 指令</span>
│   ├── enums <span class="token comment"># 枚举/常量</span>
│   ├── hooks <span class="token comment"># hook</span>
│   │   ├── component <span class="token comment"># 组件相关hook</span>
│   │   ├── core <span class="token comment"># 基础hook</span>
│   │   ├── event <span class="token comment"># 事件相关hook</span>
│   │   ├── setting <span class="token comment"># 配置相关hook</span>
│   │   └── web <span class="token comment"># web相关hook</span>
│   ├── layouts <span class="token comment"># 布局文件</span>
│   │   ├── default <span class="token comment"># 默认布局</span>
│   │   ├── iframe <span class="token comment"># iframe布局</span>
│   │   └── page <span class="token comment"># 页面布局</span>
│   ├── locales <span class="token comment"># 多语言</span>
│   ├── logics <span class="token comment"># 逻辑</span>
│   ├── main.ts <span class="token comment"># 主入口</span>
│   ├── router <span class="token comment"># 路由配置</span>
│   ├── settings <span class="token comment"># 项目配置</span>
│   │   ├── componentSetting.ts <span class="token comment"># 组件配置</span>
│   │   ├── designSetting.ts <span class="token comment"># 样式配置</span>
│   │   ├── encryptionSetting.ts <span class="token comment"># 加密配置</span>
│   │   ├── localeSetting.ts <span class="token comment"># 多语言配置</span>
│   │   ├── projectSetting.ts <span class="token comment"># 项目配置</span>
│   │   └── siteSetting.ts <span class="token comment"># 站点配置</span>
│   ├── store <span class="token comment"># 数据仓库</span>
│   ├── utils <span class="token comment"># 工具类</span>
│   └── views <span class="token comment"># 页面</span>
├── types <span class="token comment"># 类型文件</span>
├── vite.config.ts <span class="token comment"># vite配置文件</span>
└── windi.config.ts <span class="token comment"># windcss配置文件</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div></template>
