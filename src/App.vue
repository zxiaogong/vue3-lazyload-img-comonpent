<script setup lang="ts">
import { ref,onMounted } from "vue"
const getUrl = (url: string) => {
  console.log(new URL(url, import.meta.url))
  return new URL(url, import.meta.url).href
}
const img = ref('https://v3.cn.vuejs.org/logo.png')
const aax = ref<number[]>([])
const bbx: number[] = []
for (let i = 0; i < 50; i++) {
  bbx.push(i)
}
aax.value = bbx
onMounted(()=>{
  setTimeout(() => {
    img.value="https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
  }, 7000);
})
</script>

<template>
  <div>
    <!-- <a href="https://vuejs.org/" target="_blank">
      <lazyload-img  src='/src/asasets/vue.svg' class="logo"  />
    </a> -->
    <a href="https://vuejs.org/" v-for="item, index in aax" :key="index" target="_blank">
      <lazyload-img :src="img" class="logo" title="This is the title" />
    </a>
  </div>
</template>

<style lang="css" scoped>
.logo {
  width: 800px;
  height: 200px;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
