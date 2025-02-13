import { toTypeString } from '../base'

/**
 * Check is window
 * 判断是否是 window 对象
 *
 * @param {any} any object
 * @returns {boolean} true/false
 *
 * @category Is
 */
// @ts-ignore
export const isWindow = (v: any): boolean => typeof window !== 'undefined' && toTypeString(v) === '[object Window]'

/**
 * Check in browser
 * 判断是否在浏览器环境中
 * @returns {boolean} true/false
 *
 * @category Is
 */
// @ts-ignore
export const inBrowser = typeof window !== 'undefined'

/**
 * Check in wechat browser
 * 判断是否在微信浏览器环境中
 * @returns {boolean} true/false
 *
 * @category Is
 */
// @ts-ignore
export const isWechatBrowser = (): boolean => (navigator?.userAgent.toLowerCase() as string).includes('micromessenger')

/**
 * navigator.userAgent
 *
 * @category Is
 */
// @ts-ignore
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
/**
 * isIE
 *
 * @category Is
 */
export const isIE = UA && /msie|trident/.test(UA)
/**
 * isIE9
 *
 * @category Is
 */
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
/**
 * isEdge
 *
 * @category Is
 */
export const isEdge = UA && UA.indexOf('edge/') > 0
/**
 * isChrome
 *
 * @category Is
 */
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
/**
 * isPhantomJS
 *
 * @category Is
 */
export const isPhantomJS = UA && /phantomjs/.test(UA)
/**
 * isFF
 *
 * @category Is
 */
export const isFF = UA && UA.match(/firefox\/(\d+)/)
