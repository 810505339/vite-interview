# unocss配置

```ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--primary-color)', //在:root配置主题
    }
  }, //主题配置以后可以使用<div bg-primary></div> 
  shortcuts: [
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['btn', 'px-4 py-2 bg-blue-500 rounded text-sm mx2'],

  ], //声明class集合 <div btn icon-btn></div>
  presets: [
    presetUno({ dark: 'class' }), //unocss预设
    presetAttributify(), //UnoCSS 的归因模式 例如可以使用<div text-sm></div>
    presetIcons({    // 配置图标
      scale: 1.2,
      warn: true,
      extraProperties: {  //配置图标的默认css
        'display': 'inline-block',
      }
    }),
    presetTypography(),

    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(), //UnoCSS 转换器 、 和指令@apply @screen theme()
    transformerVariantGroup(),//变体
    //<div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>  
    // <div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
  ],
  safelist: [
    'p-1', 'p-2', 'p-3', 'p-4'
  ]  // 添加以下配置, safelist 是预生成,不管是否使用了unocss 都会打包 
})



```
