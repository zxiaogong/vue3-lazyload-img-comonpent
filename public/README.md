
# vue3-lazyload-img

vue3 图片懒加载

```
如果你只需要一个简单的图片懒加载组件，那么这个组件应该可以满足你的需求。
占用空间小，已封装好预载、失败两种状态对应的显示，引入使用即可。
```

## install
```bash
  yarn add vue3-lazyload-img
  npm i vue3-lazyload-img
```
## example

Vue: 
```html
<template>
  <div>
   <LazyloadImg src="https://v3.cn.vuejs.org/logo.png" class="logo" title="This is the title"/>
  </div>
</template>
```

tsx:
```
import { LazyloadImg } from "vue3-lazyload-img"

export default () => {
  return (
    <div class="layout-root">
      <LazyloadImg src={'https://v3.cn.vuejs.org/logo.png'} class="logo" title={"This is the title"}/>
    </div>
  )
}

```
main.ts
```
import {createApp} from 'vue'
import App from './App.vue'
import lazyloadImgInit, { LazyloadImg } from "vue3-lazyload-img"
const app = createApp(App)

//全局引入
app.use(lazyloadImgInit)

app.mount('#app')
```

## API 

```
如果需要自定义某一张图片预载、失败显示。请参考下面api

示例： import ErrComponent from "./ErrComponent.vue"
      <lazyload-img  preSrc='https://pre.jpg' :errSrc="ErrComponent" src='https://v3.cn.vuejs.org/logo.png' />

```
#### LazyloadImg 


| key | describe     | type                | must|
| :-------- | :------- | :------------------------- | :---| 
| `src` | 图片 | `string` | 必填 |
| `class` | 样式 | `string` | 非必填 |
| `title` | 元素标题 | `string` | 非必填 |
| `preSrc` | 预载 | `string/JSX.Element/Component` | 非必填 |
| `errSrc` | 加载失败 | `string/JSX.Element/Component` | 非必填 |


```
如果需要全局设置，请参考下面api。

示例： 
      app.use(lazyloadImgInit,{
           //支持图片url、jsx、vue模板(非必填，有默认样式)
            preImg: ...,
            //支持图片url、jsx、vue模板(非必填，有默认样式)
            errImg: ...,
            //重试次数(非必填，默认5次)
            retryLoad: ...
      })

```
#### lazyloadImgConfig

| key | describe     | type                | default  | must
| :-------- | :------- | :------------------------- | :---| :---|
| `preImg` | 预载 | `string/JSX.Element/Component`  |  | 非必填 |
| `errImg` | 加载失败 | `string/JSX.Element/Component` |  | 非必填 |
| `retryLoad` | 失败重试次数 | `number` | 5 | 非必填 |
