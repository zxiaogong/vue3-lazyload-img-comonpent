
# vue3-lazyload-img-comonpent

基于vue3实现的自带 预载、加载失败效果的 图片懒加载组件

## npm安装

```bash
  yarn add vue3-lazyload-img
  npm i vue3-lazyload-img
```
## 用法
文档：https://github.com/zxiaogong/vue3-lazyload-img-comonpent/blob/master/public/README.md

## 启动
### start

```bash
  yarn install
```
```bash
  yarn run dev
```
### build

```bash
  yarn run build （打包后需要在lazyload-img.es.js中手动引入css）
```

### 生成.d.ts

```bash
  yarn global  add dtsmake
```
```bash
   dtsmake -s ./public/lib/lazyload-img.es.js
```