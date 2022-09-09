import { App, Component, ExtractPropTypes, DefineComponent } from 'vue'
export interface ConfiType {
	preImg?: string | JSX.Element | Component
	errImg?: string | JSX.Element | Component
	retryLoad?: number
}

declare const lazyloadImgInit: {
	install: (app: App, config?: ConfiType) => void
}
export default lazyloadImgInit


export declare const LazyloadImg: DefineComponent<{
	src: string
	class?: string
	title?: string
	preSrc?: Component | JSX.Element | object | undefined
	errSrc?: Component | JSX.Element | object | undefined
}, {}, any>

