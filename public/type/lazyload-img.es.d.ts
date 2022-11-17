
export interface ConfiType {
	preImg?: string | JSX.Element | import("vue").Component
	errImg?: string | JSX.Element | import("vue").Component
	retryLoad?: number
}

declare const lazyloadImgInit: {
	install: (app: import("vue").App, config?: ConfiType) => void
}
export default lazyloadImgInit

declare const LazyloadImg: {
	new(...args: any[]): {
			$: import("vue").ComponentInternalInstance;
			$data: {};
			$props: Partial<{
					title: string;
					class: string;
					src: string;
					preSrc: Record<string, any>;
					errSrc: Record<string, any>;
			}> & Omit<Readonly<import("vue").ExtractPropTypes<{
					/**图片链接 */
					src: {
							type: StringConstructor;
							default: string;
					};
					/**自定义样式 */
					class: {
							type: StringConstructor;
							default: string;
					};
					title: {
							type: StringConstructor;
							default: string;
					};
					preSrc: {
							type: ObjectConstructor;
							default: any;
					};
					errSrc: {
							type: ObjectConstructor;
							default: any;
					};
			}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "class" | "src" | "preSrc" | "errSrc">;
			$attrs: {
					[x: string]: unknown;
			};
			$refs: {
					[x: string]: unknown;
			};
			$slots: Readonly<{
					[name: string]: import("vue").Slot;
			}>;
			$root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
			$parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
			$emit: (event: string, ...args: any[]) => void;
			$el: any;
			$options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
					/**图片链接 */
					src: {
							type: StringConstructor;
							default: string;
					};
					/**自定义样式 */
					class: {
							type: StringConstructor;
							default: string;
					};
					title: {
							type: StringConstructor;
							default: string;
					};
					preSrc: {
							type: ObjectConstructor;
							default: any;
					};
					errSrc: {
							type: ObjectConstructor;
							default: any;
					};
			}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
					title: string;
					class: string;
					src: string;
					preSrc: Record<string, any>;
					errSrc: Record<string, any>;
			}> & {
					beforeCreate?: (() => void) | (() => void)[];
					created?: (() => void) | (() => void)[];
					beforeMount?: (() => void) | (() => void)[];
					mounted?: (() => void) | (() => void)[];
					beforeUpdate?: (() => void) | (() => void)[];
					updated?: (() => void) | (() => void)[];
					activated?: (() => void) | (() => void)[];
					deactivated?: (() => void) | (() => void)[];
					beforeDestroy?: (() => void) | (() => void)[];
					beforeUnmount?: (() => void) | (() => void)[];
					destroyed?: (() => void) | (() => void)[];
					unmounted?: (() => void) | (() => void)[];
					renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
					renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
					errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
			};
			$forceUpdate: () => void;
			$nextTick: typeof import("vue").nextTick;
			$watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
	} & Readonly<import("vue").ExtractPropTypes<{
			/**图片链接 */
			src: {
					type: StringConstructor;
					default: string;
			};
			/**自定义样式 */
			class: {
					type: StringConstructor;
					default: string;
			};
			title: {
					type: StringConstructor;
					default: string;
			};
			preSrc: {
					type: ObjectConstructor;
					default: any;
			};
			errSrc: {
					type: ObjectConstructor;
					default: any;
			};
	}>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
	__isFragment?: never;
	__isTeleport?: never;
	__isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
	/**图片链接 */
	src: {
			type: StringConstructor;
			default: string;
	};
	/**自定义样式 */
	class: {
			type: StringConstructor;
			default: string;
	};
	title: {
			type: StringConstructor;
			default: string;
	};
	preSrc: {
			type: ObjectConstructor;
			default: any;
	};
	errSrc: {
			type: ObjectConstructor;
			default: any;
	};
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
	title: string;
	class: string;
	src: string;
	preSrc: Record<string, any>;
	errSrc: Record<string, any>;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
	$slots: any;
});
export { LazyloadImg }


