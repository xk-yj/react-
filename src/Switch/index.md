---
title: Switch单选框
nav:
  title: 通用
  path: /component
group:
  path: /component
---

# Switch 单选框

> 常用的开关组件

### 基本用法

> switch 开关的基本用法 value 可以设置状态

<code src="./demo/index1.tsx" />

### 设置宽高

> 设置 width 和 height 控制开关宽高

<code src="./demo/index2.tsx" />

### 是否禁用

> 通过 disabled 设置开关是否禁用

<code src="./demo/index3.tsx" />

### 设置事件

> 通过 handleClick 设置自定义事件 <code src="./demo/index4.tsx" />

### 参数说明

|   参数   |       说明       |        类型         | 可选值 | 默认值  |
| :------: | :--------------: | :-----------------: | :----: | :-----: |
|  value   |   设置开关状态   |      `boolean`      |   ——   | `false` |
|  width   |     设置宽度     | `string` / `number` |   ——   | `70px`  |
|  height  |     设置高度     | `string` / `number` |   ——   | `35px`  |
| disabled | 控制开关是否禁用 |      `boolean`      |   ——   | `false` |

### 事件说明

|    参数     |     说明     |    类型    | 可选值 | 默认值 |
| :---------: | :----------: | :--------: | :----: | :----: |
| handleClick | 点击开关事件 | `funticon` |   ——   |   ——   |
