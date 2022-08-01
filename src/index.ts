import { Context, Schema } from 'koishi'
import { DataService } from '@koishijs/plugin-console'
import { resolve } from 'path'

declare module '@koishijs/plugin-console' {
  namespace Console {
    interface Services {
      footer: FooterService
    }
  }
}

class FooterService extends DataService<FooterService.Item[]> {
  constructor(ctx: Context, private config: FooterService.Config) {
    super(ctx, 'footer')

    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  }

  async get(forced?: boolean) {
    return this.config.items
  }
}

namespace FooterService {
  export interface Item {
    text: string
    link?: string
  }

  export const Item: Schema<Item> = Schema.object({
    text: Schema.string().required().description('要显示的文本。'),
    link: Schema.string().role('link').description('点击文本后跳转到的链接。'),
  })

  export interface Config {
    items: Item[]
  }

  export const Config: Schema<Config> = Schema.object({
    items: Schema.array(Item),
  })
}

export default FooterService
