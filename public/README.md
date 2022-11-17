
# vue3-lazyload-img

vue3 图片懒加载

```
注: 1. 如果出现图片不按比例铺满空间或者修改src后没有更新图片的情况，请删除并重新拉取组件或者升级版本到 0.1.0 及以上即可解决。
```

## install
```bash
  yarn add vue3-lazyload-img
  npm i vue3-lazyload-img
```
## example

Vue:
```
<template>
  <div>
   <lazyload-img src="https://v3.cn.vuejs.org/logo.png" class="logo" title="This is the title"/>
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
app.use(lazyloadImgInit,{
  //支持图片url、jsx、vue模板(非必填，有默认样式)
  preImg: ...,
  //支持图片url、jsx、vue模板(非必填，有默认样式)
  errImg: ...,
  //重试次数(非必填，默认5次)
  retryLoad: ...
})
app.mount('#app')
```

## API 

#### LazyloadImg 


| key | describe     | type                |
| :-------- | :------- | :------------------------- |
| `src` | pictures linking | `string` |
| `class` | style | `string` |
| `title` | element title | `string` |
| `preSrc` | preload content | `string/JSX.Element/Component` |
| `errSrc` | Load failed content | `string/JSX.Element/Component` |

```
 !注： 如果需要修改指定的某一张图片的预载或者失败时的显示，可以使用preSrc、errSrc

示例： import test from "./test.vue"
      <lazyload-img  preSrc='https://pre.jpg' :errSrc="test" src='https://v3.cn.vuejs.org/logo.png' />

```

#### lazyloadImgConfig


| key | describe     | type                | default  | must
| :-------- | :------- | :------------------------- | :---| :---|
| `preImg` | preload content | `string/JSX.Element/Component`  |  | no |
| `errImg` | Load failed content | `string/JSX.Element/Component` |  | no |
| `retryLoad` | Number of reload attempts | `number` | 5 | no |



