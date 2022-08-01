import { Context, store } from '@koishijs/client'
import { defineComponent, h, resolveComponent } from 'vue'
import {} from '../src'

export default function (ctx: Context) {
  ctx.slot({
    type: 'status-left',
    component: defineComponent(() => () => store.footer?.map((item) => {
      return h(resolveComponent('k-status'), {
        style: 'cursor: pointer',
        onClick() {
          open(item.link, '_blank')
        },
      }, [item.text])
    })),
  })
}
