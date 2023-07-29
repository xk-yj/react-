---
title: InfiniteScroll 无线滚动
nav:
  title: 通用
  path: /component
group:
  path: /component
---

# InfiniteScroll 无线滚动

## 基本使用

加上 scrollDistance 属性，控制滚动条到底距离实现滚动加载 <code src="./demo/index1.tsx" />

## 禁用加载

禁用加载实现方式有两种:

<p>一种是直接添加 scrollDisabled 属性，可以直接禁用加载。</p>
<p>另一种是添加 frequency 属性，它可以让无限滚动功能执行 frequency 次后执行</p>
<h3>注意:两种属性只能存在一个</h3>
<code src="./demo/index2.tsx" />

<API>
