<script lang="ts" setup>
import LoadErrImg from "./loadDeafultErrImg.vue";
import { defineProps, ref, watch } from "vue";
import { lazayConfig } from "../lazyloadImgConfig";
const props = defineProps({
  /**自定义样式 */
  boxSize: {
    type: Number,
    default: 0,
  },
  specialErrSrc: {
    type: Object || undefined,
    default: undefined,
  }
});
const CustomErrCom = props.specialErrSrc || lazayConfig.errImg
</script>

<template>
  <img v-if="typeof CustomErrCom === 'string'" :src="CustomErrCom" class="defalut-img" />
  <LoadErrImg v-else-if="!CustomErrCom" :box-size="props.boxSize"></LoadErrImg>
  <CustomErrCom v-else></CustomErrCom>
</template>
<style lang="less" scoped>
@import "../index.less";
</style>