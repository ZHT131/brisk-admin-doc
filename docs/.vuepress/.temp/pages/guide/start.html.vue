<template><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1>
<p>本文会帮助你从头启动项目</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<div class="custom-container tip"><p class="custom-container-title">关于组件</p>
<p>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p>
</div>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<p>本地环境需要安装 <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<OutboundLink/></a>、<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<OutboundLink/></a></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>建议使用<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<OutboundLink/></a>，否则依赖可能安装不上。</li>
<li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a> 版本要求<code>12.x</code>以上，且不能为<code>13.x</code>版本，这里推荐 <code>14.x</code> 及以上。</li>
</ul>
</div>
<h2 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2>
<p>如果您使用的 IDE 是<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode<OutboundLink/></a>(推荐)的话，可以安装以下工具来提高开发效率及代码格式化</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans" target="_blank" rel="noopener noreferrer">Chinese<OutboundLink/></a> - vscode 中文（简体）语言包</li>
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
<span class="token function">git</span> clone https://github.com/ZHT131/brisk-admin.git

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="从-gitee-获取代码" tabindex="-1"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3>
<p>如果从 github clone 代码较慢的话，可以尝试用 <a href="https://gitee.com/zht131/brisk-admin" target="_blank" rel="noopener noreferrer">Gitee<OutboundLink/></a> 同步代码到自己的仓库，再 clone 下来即可。</p>
<p>也可以通过下方地址进行 clone</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/zht131/brisk-admin.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3>
<p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a>，请安装它。</p>
<p><strong>验证</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 出现相应npm版本即可</span>
<span class="token function">npm</span> -v
<span class="token comment"># 出现相应node版本即可</span>
node -v

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果你需要同时存在多个 node 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm<OutboundLink/></a> 或者其他工具进行 Node.js 进行版本管理。</p>
<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3>
<h4 id="npm-安装" tabindex="-1"><a class="header-anchor" href="#npm-安装" aria-hidden="true">#</a> npm 安装</h4>
<p>必须使用 [npm]进行依赖安装（若其他包管理器安装不了需要自行处理）。</p>
<h4 id="依赖安装命令" tabindex="-1"><a class="header-anchor" href="#依赖安装命令" aria-hidden="true">#</a> 依赖安装命令</h4>
<p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">"dev"</span><span class="token builtin class-name">:</span> <span class="token string">"vite"</span>, //调试模式 <span class="token function">npm</span> run dev
  <span class="token string">"build"</span><span class="token builtin class-name">:</span> <span class="token string">"vite build"</span>, //调试模式 <span class="token function">npm</span> run build
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="重新安装依赖" tabindex="-1"><a class="header-anchor" href="#重新安装依赖" aria-hidden="true">#</a> 重新安装依赖</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<p>该命令会先删除 <code>node_modules</code>、<code>package.lock.json</code> 后再进行依赖重新安装（安装速度会明显变慢）。</p>
<p>接下来你可以修改代码进行业务开发了。我们内建了模拟数据、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。</p>
<h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token builtin class-name">.</span>
├── mock <span class="token comment"># mock文件夹</span>
├── public <span class="token comment"># 公共静态资源目录</span>
├── src <span class="token comment"># 主目录</span>
│   ├── api <span class="token comment"># 接口文件</span>
│   ├── assets <span class="token comment"># 资源文件</span>
│   │   └── images <span class="token comment"># 项目存放图片的文件夹</span>
│   ├── components <span class="token comment"># 公共组件</span>
│   ├── lang <span class="token comment"># 语言包文件</span>
│   ├── router <span class="token comment"># 路由配置</span>
│   ├── settings <span class="token comment"># 应用配置</span>
│   │   ├── settings.js <span class="token comment"># 应用配置</span>
│   │   └── skin.js   <span class="token comment"># 皮肤配置</span>
│   ├── store <span class="token comment"># 数据仓库</span>
│   ├── style <span class="token comment"># elementui主题文件</span>
│   ├── utils <span class="token comment"># 工具类</span>
│   ├── vendor <span class="token comment"># 扩展组件</span>
│   ├── views <span class="token comment"># 页面</span>
│   │   ├── layout <span class="token comment"># 布局文件</span>
│   │   └── <span class="token punctuation">..</span>.   <span class="token comment"># 其他页面文件</span>
│   ├── App.vue <span class="token comment">#主入口</span>
│   └── main.js <span class="token comment">#应用js</span>
├── .env <span class="token comment"># 环境配置</span>
├── package.json <span class="token comment"># 依赖</span>
└── vite.config.js <span class="token comment"># vite配置</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>
