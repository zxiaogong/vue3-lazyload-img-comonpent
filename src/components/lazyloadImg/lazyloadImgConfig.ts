import { Component } from "vue"

/**懒加载初始化配置 */
export interface confiType {
    /**预加载显示 */
    preImg?: string | JSX.Element | Component
    /**加载失败显示 */
    errImg?: string | JSX.Element | Component
    /**失败重试次数,默认5次 */
    retryLoad?: number
}

let lazayConfig: confiType = {
    retryLoad: 5
}

const initLazyConfig = (initConfig: confiType) => {
    lazayConfig = {
        ...lazayConfig,
        ...initConfig,
    }
}

export default initLazyConfig
export { lazayConfig }