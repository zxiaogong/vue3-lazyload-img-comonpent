// Type definitions for ./public/lib/lazyload-img.es.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// _export_sfc.!0
import LazyloadImgInitType from "../lib/lazyload-img.es.js";
declare const lazyloadImgInit: LazyloadImgInitType;
export default lazyloadImgInit;


export interface confiType {
    preImg?: string | JSX.Element | Component
    errImg?: string | JSX.Element | Component
    retryLoad?: number
}

/**
 * 
 */
export declare var index: string;

import { Component } from "vue"
/**
 * 
 * @param initConfig 
 */
declare function initLazyConfig(initConfig:confiType): void;

/**
 * 
 */
export declare var loadDeafultErrImg_vue_vue_type_style_index_0_scoped_true_lang: string;

/**
 * 
 * @param sfc 
 * @param props 
 * @return  
 */
declare function _export_sfc(sfc: 0, props: 1):  any;

/**
 * 
 * @param n 
 */
declare function _withScopeId$1(n: 0): void;

/**
 * 
 */
export declare var _hoisted_1$4: Array<string>;

/**
 * 
 */
export declare var _hoisted_4: Array</* ?,? */ any>;

/**
 * 
 */
declare var LoadErrImg: {
}

/**
 * 
 */
export declare var loadErr_vue_vue_type_style_index_0_scoped_true_lang: string;

/**
 * 
 */
export declare var _hoisted_1$3: Array<string>;

/**
 * 
 */
export declare var loadDeafultPreImg: string;

/**
 * 
 */
export declare var loadDeafultPreImg_vue_vue_type_style_index_0_scoped_true_lang: string;

/**
 * 
 * @param n 
 */
declare function _withScopeId(n: 0): void;

/**
 * 
 */
declare var _hoisted_1$2: {

	/**
	 * 
	 */
	class: string;
}

/**
 * 
 */
export declare var _hoisted_3: Array<any>;

/**
 * 
 */
export declare var loadPre_vue_vue_type_style_index_0_scoped_true_lang: string;

/**
 * 
 */
export declare var _hoisted_1$1: Array<string>;

/**
 * 
 */
export declare var index_vue_vue_type_style_index_0_scoped_true_lang: string;

/**
 * 
 */
declare var _hoisted_1: {

	/**
	 * 
	 */
	class: string;
}

/**
 * 
 */
export declare var _hoisted_2: Array<string>;

/**
 * 
 */
declare namespace lazyloadImgComponent {

	/**
	 * 
	 * @param app 
	 * @param config 
	 */
	function install(app: any, config: confiType): void;
}

/**
 * 
 */
export declare var loadErr:  any;

/**
 * 
 */
export declare var LoadPreImg:  any;

/**
 * 
 */
export declare var loadPre:  any;

/**
 * 
 */
export declare var LazyloadImg:  Component;

