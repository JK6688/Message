import { ref, defineComponent, PropType, onMounted } from 'vue'
import './messageStyle.scss'
interface MessagePropsTypes {
  text: String
  type?: 'warning' | 'error' | 'info' | 'success'
  position?: 'center' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'
}
export { MessagePropsTypes }
export default defineComponent({
  name: 'MessageUI',
  props: {
    text: {
      type: String as PropType<String>,
      default: '',
    },
    type: {
      type: String as PropType<String>,
      default: 'warning',
    },
    position: {
      type: String as PropType<String>,
      default: 'top',
    },
  },
  setup(props: any) {
    const style = {
      warning: {
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)',
      },
      error: {
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)',
      },
      success: {
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)',
      },
      info: {
        color: '#999',
        backgroundColor: '#f5f5f5',
        borderColor: '#e4e4e4',
      },
    }
    const isShow = ref(false)
    onMounted(() => {
      isShow.value = true
    })
    const initTipsIconType = (name: string): Element[] | any => {
      if (name == 'warning') {
        return [<div class="MessagetipsIcon Messagewarning">!</div>]
      } else if (name == 'error') {
        return [<div class="MessagetipsIcon Messageerror">×</div>]
      } else if (name == 'info') {
        return [
          <div class="MessagetipsIcon Messageinfo" style="font-style:oblique;">
            i
          </div>,
        ]
      } else if (name == 'success') {
        return [<div class="Messagechecked Messagesuccess"></div>]
      }
    }
    const initStyle = (type: string | any, position: string | any) => {
      let sty: any = {}
      if (type) {
        sty = { ...sty, ...style[type] }
      }
      if (position) {
        if (position == 'top' || position == 'center') {
          sty.animation = 'topMove 0.38s linear forwards'
        } else if (position == 'bottom') {
          sty.animation = 'bottomMove 0.38s linear forwards'
        } else if (position == 'topLeft' || position == 'bottomLeft') {
          sty.animation = 'leftMove 0.38s linear forwards'
        } else if (position == 'topRight' || position == 'bottomRight') {
          sty.animation = 'rightMove 0.38s linear forwards'
        }
      }
      return sty
    }
    // dom
    return () => (
      <>
        <div class={`Message Message${props.position}`} style={initStyle(props.type, props.position)} v-show={isShow}>
          {initTipsIconType(props.type)}
          <span>{props.text}</span>
        </div>
      </>
    )
  },
})
