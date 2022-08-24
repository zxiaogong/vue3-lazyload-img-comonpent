
<script lang="ts" setup>
import "./index.less";
import { lazayConfig } from "./lazyloadImgConfig";
import { defineProps, ref, onMounted, Component } from "vue";
/**引入组件 laztload-preimg */
import { preImg } from "./deafultLazatBox/laztloadImg";
import loadErr from "./deafultLazatBox/loadErr.vue";
import loadPre from "./deafultLazatBox/loadPre.vue";
enum isLoadEnum {
  /**加载成功 */
  success,
  /**加载失败 */
  error,
  /**加载中 */
  load,
}

const imgBoxClass = ref<string>("img-equal");

const imgBoxRef = ref<any>(null);
const imgBoxSize = ref(0);
const loadState = ref<isLoadEnum>(isLoadEnum.load);
const imgSrc = ref("");
let retryLoadNum =
  lazayConfig.retryLoad && lazayConfig.retryLoad > 0
    ? lazayConfig.retryLoad
    : 1;

const props = defineProps({
  /**图片链接 */
  src: {
    type: String,
    default: "",
  },
  /**自定义样式 */
  class: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  preSrc: {
    type: Object || undefined,
    default: undefined,
  },
  errSrc: {
    type: Object || undefined,
    default: undefined,
  },
});

const loadImg = (): Promise<string> => {
  return new Promise((res, rej) => {
    try {
      const imgx = new Image();
      imgx.src = props.src;
      imgx.setAttribute("crossOrigin", "Anonymous");
      imgx.onload = (e) => {
        if (imgx.width > imgx.height) {
          imgBoxClass.value = "img-max-height";
        } else if (imgx.width < imgx.height) {
          imgBoxClass.value = "img-max-width";
        }

        loadState.value = isLoadEnum.success;
        retryLoadNum = 0;
        imgSrc.value = props.src;
        res(props.src);
      };
      imgx.onerror = (e) => {
        retryLoadNum -= 1;
        if (retryLoadNum) {
          setTimeout(async () => {
            await loadImg();
          }, 1000);
        } else {
          loadState.value = isLoadEnum.error;
          rej(`${props.src} Invalid picture URL`);
        }
      };
    } catch (error) {
      loadState.value = isLoadEnum.error;
      retryLoadNum = 0;
      rej(error);
    }
  });
};

const handleIntersect = () => {
  const oberver = new IntersectionObserver(
    (intersect) => {
      if (loadState.value === isLoadEnum.load && intersect[0].isIntersecting) {
        loadImg();
        oberver.unobserve(imgBoxRef.value);
      }
    },
    {
      threshold: 0,
    }
  );
  //挂载监听器
  oberver.observe(imgBoxRef.value);
};

/**组件挂载后 */
onMounted(() => {
  //页面总高度
  const totalHeigth = document.body.scrollHeight;
  //页面可视化高度
  const showViewHeight = document.documentElement.clientHeight;
  const oberver = new IntersectionObserver((intersect) => { });
  oberver.observe(imgBoxRef.value);
  /**当页面总高度小于等于可视化高度时，就不需要注册滚动时间的监听 */
  if (
    totalHeigth <= showViewHeight &&
    imgBoxRef?.value?.offsetTop <= showViewHeight + 300
  ) {
    loadImg();
  } else {
    /**注册滚动事件 */
    handleIntersect();
  }

  const imgHeight = parseInt(
    getComputedStyle(imgBoxRef?.value).getPropertyValue("height")
  );
  const imgWidth = parseInt(
    getComputedStyle(imgBoxRef?.value).getPropertyValue("width")
  );

  /**取宽高最小值 */
  if (imgWidth > imgHeight) {
    imgBoxSize.value = imgHeight;
  } else {
    imgBoxSize.value = imgWidth;
  }
});
</script>
<template>
  <div :class="[props.class || 'defalut-img-root']" ref="imgBoxRef" :title="props.title">
    <div class="defalut-img-box">
      <!-- 预加载显示的内容（可以自定义） -->
      <load-pre v-if="loadState === isLoadEnum.load" :box-size="imgBoxSize" :specialPreSrc="props.preSrc"></load-pre>
      <load-Err v-else-if="loadState === isLoadEnum.error" :box-size="imgBoxSize" :specialErrSrc="props.errSrc">
      </load-Err>
      <img v-else :class="[props.class ? imgBoxClass : 'lazyload-img']" :src="imgSrc" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>
