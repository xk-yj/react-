---
title: InputNumber计数器
nav:
  title: 通用
  path: /component
group:
  path: /component
---

# InputNumber 计数器

> 常用的 InputNumber 计数器

### 基础用法

> 基本使用 InputNumber 组件用法

<code src="./demo/index1.tsx" />

### 设置宽高

> 通过设置 width, height 控制组件宽高

<code src="./demo/index5.tsx" />

### 按钮位置

> 通过设置 controlsPosition 设置 InputNumber 组件按钮的位置

<code src="./demo/index2.tsx" />

### 禁用状态

> 设置 disabled 控制组件禁用状态

<code src="./demo/index3.tsx" />

### 自定义事件

> 可以设置 change, blur, focus 自定义事件

<code src="./demo/index4.tsx" />

### 参数说明

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| value | 初始值 | `number` | —— | `0` |
| min | 最小值 | `number` | —— | `0` |
| max | 最大值 | `number` | —— | `99999999` |
| width | 设置宽 | `string` / `number` | —— | `150px` |
| height | 设置高 | `string` / `number` | —— | `45px` |
| disabled | 控制是否禁用 | `boolean` | —— | `false` |
| controlsPosition | 控制组件按钮位置 | `string` | `left` / `rigth` / `center` | `center` |

### 事件说明

|  参数  |         说明         |    类型    | 可选值 | 默认值 |
| :----: | :------------------: | :--------: | :----: | :----: |
| change |    当值改变时触发    | `Function` |   ——   |   ——   |
| focus  | 输入框获取焦点时触发 | `Function` |   ——   |   ——   |
|  blur  | 输入框失去焦点时触发 | `Function` |   ——   |   ——   |
