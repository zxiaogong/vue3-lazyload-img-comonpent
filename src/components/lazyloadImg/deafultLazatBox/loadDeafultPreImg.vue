<!-- 懒加载--预加载模块 -->
<script lang="ts" setup>
/**预加载的图片 */
import { defineProps, ref, watch } from "vue";
import "./loadDeafultPreImg.less";

const props = defineProps({
  boxSize: {
    type: Number,
    default: 30,
  },
});


const setPreSize = (newSize: number): any => {
  const seatSize = newSize * 0.7;
  const fontSize = newSize * 0.12;

  return {
    width: seatSize + "px",
    height: seatSize + "px",
    'font-size':fontSize+'px'
  };
};
const preImgSize = ref(setPreSize(props.boxSize));

watch(
  () => props.boxSize,
  /**通过最小宽/高计算预加载样式（大小） */
  (newSize, preSize) => {
    preImgSize.value = setPreSize(props.boxSize);
  }
);
</script>
<template>
  <div class="pre-root">
    <!-- 默认预加载显示的内容 -->
    <div
      :class="['spinner-grow', 'loadColor']"
      :style="preImgSize"
      role="status"
    ></div>
    <div
      :class="['spinner-border', 'loadColor']"
      :style="preImgSize"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "./loadDeafultPreImg.less";
</style>