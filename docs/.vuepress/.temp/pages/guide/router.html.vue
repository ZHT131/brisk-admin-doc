<template><h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1>
<p>项目路由配置存放于 <a href="https://github.com/ZHT131/brisk-admin/blob/main/src/router" target="_blank" rel="noopener noreferrer">src/router<OutboundLink/></a> 下面。路由实现了动态路由加载功能，路由配置完全交给后端，后端只需返回对应用户权限对应的路由数组即可实现动态加载路由！！！</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="mock-动态路由说明" tabindex="-1"><a class="header-anchor" href="#mock-动态路由说明" aria-hidden="true">#</a> mock 动态路由说明</h3>
<p>在 <a href="https://github.com/ZHT131/brisk-admin/blob/main/mock/data/user.js" target="_blank" rel="noopener noreferrer">mock/data/user.js<OutboundLink/></a> 中提供了 admin 和 edit 两个用户不同的路由数据，后台只需返回对应格式的数据即可实现动态加载各自用户对应权限的路由菜单！</p>
<p>路由模块包含以下结构：</p>
<ol>
<li>当你一个路由下面的 children 声明的路由大于 1 个时，自动会变成嵌套的模式</li>
<li>只有一个时，会将那个子路由当做根路由显示在侧边栏--如首页</li>
<li>若你想不管路由下面的 children 声明的个数都显示你的根路由，你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由</li>
<li>对于返回的路由数据不想显示在侧边栏菜单中，可以设置 hidden: true</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">"/dashboard"</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"app"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"dashboard"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"dashboard/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"dashboard"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"dashboard"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/profile"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">"/profile/index"</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"profile"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"profile"</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    hidden<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"profile/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"profileIndex"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"profileIndex"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/auth"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"auth"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"auth"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"admin/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"adminLog"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"adminLog/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"adminLog"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"adminLog"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"adminGroup"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"adminGroup/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"adminGroup"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"adminGroup"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"adminRule"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"adminRule/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"adminRule"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"adminRule"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/error_page"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"error_page"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"error_page"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"401"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"401/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"page401"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"page401"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"404"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"404/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"page404"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"page404"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//嵌套路由示例</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/nested"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"nested"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"nested"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"noComponent"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> <span class="token string">"menu2/index.vue"</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> <span class="token string">"menu3/index.vue"</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"menu1/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br></div></div><h3 id="多级路由" tabindex="-1"><a class="header-anchor" href="#多级路由" aria-hidden="true">#</a> 多级路由</h3>
<div class="custom-container warning"><p class="custom-container-title">注意事项</p>
<ul>
<li>整个项目所有路由 <code>name</code> 不能重复</li>
<li>除了 layout 对应的 path 和 redirect 前面需要加 <code>/</code>，其余子路由都不要以<code>/</code>开头</li>
<li>redirect 不不需要时就设置为 null</li>
<li>component 不需要组件时就设置为 noComponent</li>
</ul>
</div>
<p><strong>示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">//嵌套路由示例</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">"/nested"</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">"layout/index.vue"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"nested"</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"nested"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"noComponent"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> <span class="token string">"menu2/index.vue"</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu2"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> <span class="token string">"menu3/index.vue"</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu3"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">"menu1/index.vue"</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">"menu1"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"el-icon-menu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        alwaysShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="meta-配置说明" tabindex="-1"><a class="header-anchor" href="#meta-配置说明" aria-hidden="true">#</a> Meta 配置说明</h3>
<p>title 需要设置为语言包内设置的对应属性名，菜单渲染语言包格式为 $t(item.name + &quot;.&quot; + item.meta.title) ,所以我们设置对应语言包时就要用: 路由 name:{meta.title:&quot;&quot;} ,如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// en</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//这里是路由name对应值</span>
  admin<span class="token operator">:</span> <span class="token punctuation">{</span>
    admin<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span> <span class="token comment">//这里是路由meta.title对应值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2>
<p>为了简化使用，暂时只使用了element-plus内置图标，没有内置其他自定义图标库，有需要的可以自己集成！后期会考虑内置一套！</p>
<h2 id="路由刷新" tabindex="-1"><a class="header-anchor" href="#路由刷新" aria-hidden="true">#</a> 路由刷新</h2>
<p>项目中采用的是动态加载加<strong>重定向</strong>方式，刚加载的路由会执行重定向到当前打开页以确保打开最新加载页，顶部导航栏加入了刷新按钮，可以点击执行当前页面重载！</p>
<h2 id="外联" tabindex="-1"><a class="header-anchor" href="#外联" aria-hidden="true">#</a> 外联</h2>
<p>在侧边栏中配置一个外链，暂时未实现，下一个版本将加入！</p>
</template>
