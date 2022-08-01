# koishi-plugin-footer

[![npm](https://img.shields.io/npm/v/koishi-plugin-footer?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-footer)

Extend the status bar at the bottom of the web console.

扩展控制台底部的状态栏。你可以用它来显示备案等信息。

## 使用示例

```yaml
plugins:
  footer:
    items:
      - text: 浙ICP备2021xxxxxx号-1
        link: https://beian.miit.gov.cn/
```

## 配置项

### items[].text

- 类型: `string`

要显示的文本内容。

### items[].link

- 类型: `string`

点击文本后跳转到的链接。
