---
title: Button按钮
nav:
  title: 通用
  path: /component
group:
  path: /component
---

# Buttoon 按钮

> 常用的 button 按钮

### 基础用法

> 基本使用 button 组件用法

<code src="./demo/index1.tsx" />

### 设置宽高

> 可以通过设置 width 和 height 设置按钮宽高

<code src="./demo/index2.tsx" />

### 设置圆角

> 可以通过设置 radius 设置按钮圆角

<code src="./demo/index3.tsx" />

### 文本按钮

> 可以通过设置 radius 设置按钮圆角

<code src="./demo/index4.tsx" />

### 禁用按钮

> 可以通过设置 forbidden 设置按钮状态

<code src="./demo/index5.tsx" />

### 设置事件

> 可以通过设置 handleClick 绑定自定义事件

<code src="./demo/index6.tsx" />

---

### 参数说明

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| type | 按钮类型 | `string` | `primary` / `danger` / `warning` / `success` / `info` / `text ` | `primary` |
| width | 宽度 | `string` /`number` | —— | `100px` |
| height | 高度 | `string` /`number` | —— | `45px` |
| radius | 圆角 | `string` /`number` | —— | —— |
| disabled | 是否禁用 | `boolean` | —— | `false` |

### 事件说明

|    参数     |   说明   |    类型    | 可选值 | 默认值 |
| :---------: | :------: | :--------: | :----: | :----: |
| handleClick | 点击事件 | `funtcion` |   ——   |   ——   |
