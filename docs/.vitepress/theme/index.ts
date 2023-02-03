import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress';
export default {
  ...DefaultTheme,
  setup() { //全局md文件注入
    const route = useRoute()
    const init = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    }
    onMounted(() => {
      init()
    })
    watch(() => route.path,
      () => nextTick(() => init())
    )
  },
}
