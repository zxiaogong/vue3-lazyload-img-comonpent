<!-- 懒加载--加载失败模块 -->
<script lang="ts" setup>
/**预加载的图片 */
import { defineProps, ref, watch } from "vue";
const props = defineProps({
  boxSize: {
    type: Number,
    default: 30,
  },
});
const setIconSize = (boxSize: number) => {
  return boxSize * 0.45;
};

const iconSize = ref(setIconSize(props.boxSize));

watch(
  () => props.boxSize,
  /**通过最小宽/高计算预加载样式（大小） */
  (newSize, preSize) => {
    iconSize.value = setIconSize(newSize);
  }
);
</script>
<template>
  <div class="err-root">
    <!-- 默认加载失败内容 -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="iconSize"
      :height="iconSize"
      fill="currentColor"
      class="bi bi-file-earmark-image-fill errColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
      />
      <path
        d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"
      />
    </svg>
  </div>
</template>
<style lang="less" scoped>
@import "./loadDeafultErrImg.less";
</style>