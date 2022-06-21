# Message 自定义消息提示组件( vue3.x + tsx )
/**
 * 
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
