
<script lang="ts" setup>
import "./index.less";
import { lazayConfig } from "./lazyloadImgConfig";
import { defineProps, ref, onMounted, watch } from "vue";
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
let imgWidth = 0
let imgHeight = 0
/**配置 */
let retryLoadNum =
  lazayConfig.retryLoad && lazayConfig.retryLoad > 0
    ? lazayConfig.retryLoad
    : 1;

/**是否开启监听 */
let isOpenMmonitor = false

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
})

/**计算图片宽高 */
const calculationImgSize = (width: number, height: number) => {
  if (width > height) {
    imgBoxClass.value = "img-max-width"
  } else if (width < height) {
    imgBoxClass.value = "img-max-height"
  } else {
    if (imgWidth > imgHeight) {
      imgBoxClass.value = "img-max-height"
    } else if (imgWidth < imgHeight) {
      imgBoxClass.value = "img-max-width"
    }
  }
}
const getImgBase64 = (imgx: any): Promise<string> => {
  return new Promise((res, rej) => {
    calculationImgSize(imgx.width, imgx.height)
    retryLoadNum = 0;
    const canvas = document.createElement("canvas");
    canvas.width = imgx.width;
    canvas.height = imgx.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(imgx, 0, 0, imgx.width, imgx.height);
    const ext = imgx.src.substring(imgx.src.lastIndexOf(".") + 1).toLowerCase();
    const imgBase64 = canvas.toDataURL("image/" + ext, 1);
    res(imgBase64)
  })
}

const loadImg = (): Promise<string> => {
  return new Promise((res, rej) => {
    try {
      const imgx = createImgElement(props.src)
      imgx.onload = (e) => {
        getImgBase64(imgx).then((imgBase64: string) => {
          loadState.value = isLoadEnum.success;
          imgSrc.value = imgBase64
          res(imgBase64)
        })
      };
      imgx.onerror = (e) => {
        retryLoadNum -= 1;
        if (retryLoadNum) {
          let timer: number | null = setTimeout(async () => {
            await loadImg();
            clearTimeout(timer as number)
            timer = null
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
        /**卸载监听器 */
        oberver.unobserve(imgBoxRef.value);
        isOpenMmonitor = false
      }
    },
    {
      threshold: 0,
    }
  );
  //挂载监听器
  oberver.observe(imgBoxRef.value);
  isOpenMmonitor = true
};

const createImgElement = (imgUrl: string): HTMLImageElement => {
  const imgx = new Image()
  imgx.src = imgUrl
  imgx.setAttribute("crossOrigin", "Anonymous");
  return imgx
}

/**组件挂载后 */
onMounted(() => {
  //页面总高度
  const totalHeigth = document.body.scrollHeight;
  //页面可视化高度
  const showViewHeight = document.documentElement.clientHeight;
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

  imgHeight = parseInt(
    getComputedStyle(imgBoxRef?.value).getPropertyValue("height")
  );
  imgWidth = parseInt(
    getComputedStyle(imgBoxRef?.value).getPropertyValue("width")
  );

  /**取宽高最小值 */
  if (imgWidth > imgHeight) {
    imgBoxSize.value = imgHeight;
  } else {
    imgBoxSize.value = imgWidth;
  }
});

watch(
  () => props.src,
  /**通过最小宽/高计算预加载样式（大小） */
  (nextSrc: string) => {
    const imgx = createImgElement(nextSrc)
    if (imgx.complete) {
      calculationImgSize(imgx.width, imgx.height)
      getImgBase64(imgx).then((imgBase64: string) => {
        imgSrc.value = imgBase64
        loadState.value = isLoadEnum.success
      })

    } else {
      loadState.value = isLoadEnum.load
      retryLoadNum =
        lazayConfig.retryLoad && lazayConfig.retryLoad > 0
          ? lazayConfig.retryLoad
          : 1;
      if (!isOpenMmonitor) {
        handleIntersect()
      }
    }
  }
);

</script>
<template>
  <div :class="[props.class || 'defalut-img-root']" ref="imgBoxRef" :title="props.title">
    <div class="defalut-img-box">
      <!-- 预加载显示的内容（可以自定义） -->
      <loadPre v-if="loadState === isLoadEnum.load" :box-size="imgBoxSize" :specialPreSrc="props.preSrc" />
      <loadErr v-else-if="loadState === isLoadEnum.error" :box-size="imgBoxSize" :specialErrSrc="props.errSrc" />
      <img v-else :class="[props.class ? imgBoxClass : 'lazyload-img']" :src="imgSrc" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>
