import { App } from 'vue'
import LazyloadImg from './lazyloadImg/index.vue';
import lazyloadImgConfig, { confiType } from './lazyloadImg/lazyloadImgConfig';


const lazyloadImgComponent = {
    install: (app: App, config: confiType) => {
        lazyloadImgConfig(config)
        app.component('lazyload-img', LazyloadImg)
    }
}

export default lazyloadImgComponent
export { LazyloadImg }