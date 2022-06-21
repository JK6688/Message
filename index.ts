import { createVNode, render } from 'vue'
import MessageUI, { MessagePropsTypes } from './message'
const container = document.createElement('div')
container.setAttribute('class', 'Meassage-container')
document.body.appendChild(container)
/**
 *  Message函数参数type
 * @property {string} text 消息文字，default: ''
 *
 * @property {string} type 提示主题类型，可选
 * warning 警告 |  error 错误 | success 成功 | info 信息，
 * default: 'warning'
 *
 * @property {string} position 元素位置，可选
 * 'center' 中 | 'top' 上 | 'topLeft' 上左 | 'topRight' 上右 | 'bottom' 下 | 'bottomLeft' 下左 | 'bottomRight' 下右
 * ，default: 'top'
 * 
 * @property {number} duration 持续时间，default:3000
 */
type MassageParamsInstance = {
  text: String
  type?: 'warning' | 'error' | 'info' | 'success'
  position?: 'center' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'
  duration?: number
}
let timer: any = null
/**
 *  Message渲染函数type
 */
type MessageFuncInstance = (params: MassageParamsInstance) => void
/** MessageUI组件props type */
interface MessagePropsInstance extends MessagePropsTypes {}
export { MassageParamsInstance, MessageFuncInstance, MessagePropsInstance }
/**
 * 自定义消息提示组件( vue3.x + tsx )
 *
 * @property {string} text 提示文字，default: ''
 *
 * @property {string} type type 提示主题类型，可选
 * warning 警告 |  error 错误 | success 成功 | info 信息，
 * default: 'warning'
 *
 * @property {string} position 元素位置，可选
 * 'center' 中 | 'top' 上 | 'topLeft' 上左 | 'topRight' 上右 | 'bottom' 下 | 'bottomLeft' 下左 | 'bottomRight' 下右
 * ，default: 'top'
 *
 * @property {number} duration 显示时间，default: 3000
 *
 * @example 文件路径 src/components/Message
 *
 * @example 引入函数组件 import Message from '@/components/Message'
 *
 * @example ts按需引入类型注解 import { MassageParamsInstance, MessageFuncInstance, MessagePropsInstance } from '@/components/Message'
 *
 * @example 使用函数组件 Message({ text: '登录失败', type: 'error' })  ||  Message.error('登录失败')
 *
 */
const renderMessageFunc: MessageFuncInstance = (params) => {
  const vnode = createVNode(MessageUI, { ...params })
  render(vnode, container)
  if (timer) {
    clearTimeout(timer)
    // render(null, container)
  }
  timer = setTimeout(
    () => {
      render(null, container)
    },
    params.duration ? params.duration : 3000,
  )
}
;['warning', 'error', 'info', 'success'].forEach((type) => {
  renderMessageFunc[type] = (options: string | any) => {
    if (typeof options === 'string') {
      options = {
        text: options,
      }
    }
    options.type = type
    return renderMessageFunc(options)
  }
})
export default renderMessageFunc
