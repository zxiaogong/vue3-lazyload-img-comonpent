<script lang="ts" setup>
import LoadPreImg from "./loadDeafultPreImg.vue";
import { defineProps, ref, watch } from "vue";
import { lazayConfig } from "../lazyloadImgConfig";
const props = defineProps({
  /**自定义样式 */
  boxSize: {
    type: Number,
    default: 0,
  },
  specialPreSrc: {
    type: Object || undefined,
    default: undefined,
  }
});
const CustomPreCom = props.specialPreSrc || lazayConfig.preImg

// const SpecialPreCom = props.specialPreSrc


</script>

<template>
  <img v-if="typeof CustomPreCom === 'string'" :src="CustomPreCom" class="defalut-img" />
  <LoadPreImg v-else-if="!CustomPreCom" :box-size="props.boxSize"></LoadPreImg>
  <CustomPreCom v-else></CustomPreCom>
</template>
<style lang="less" scoped>
@import "../index.less";
</style>