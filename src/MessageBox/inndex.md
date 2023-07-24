---
title: MessageBox 弹框
nav:
  title: 通用
  path: /component
group:
  path: /component
---

# MessageBox 弹框

> 模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

### 基本用法

> MessageBox 组件的基本用法

<code src="./demo/index1.tsx" />

### 自定义内容

> 设置 message 和 title 自定义标题和内容

<code src="./demo/index2.tsx" />

### 内容是否是 html 标签

> 通过设置 useHTMLString 判断是否用 html 解析内容

<code src="./demo/index3.tsx" />

### 自定义事件

> 通过 handleSubmit 绑定自定义事件，提交时触发

<code src="./demo/index4.tsx" />

### 参数说明

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| type | 链接类型 | `string` | primary` /`danger`/ `warning`/ `success`/`info`/ `text primary | `primary` |
| underline | 设置下划线 | `boolean` | —— | `true` |
| disabled | 是否禁用 | `boolean` | —— | `false` |
| href | 链接跳转地址 | `string` | —— | `/` |
