import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import App from './App'
// import lazyloadImgInit, { LazyloadImg } from "../public/lib/lazyload-img.es.js"
// import lazyloadImgInit, { LazyloadImg } from "./export"
import lazyloadImgInit, { LazyloadImg } from "vue3-lazyload-img"

const app = createApp(App)
app.use(lazyloadImgInit
    // , {
    //     retryLoad: 5,
    // }
)

app.mount('#app')



