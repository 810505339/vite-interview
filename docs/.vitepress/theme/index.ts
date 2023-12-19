import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style/var.css'
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress';
import 'uno.css'
import HomeSponsors from './components/HomeSponsors.vue'
import HomeImage from './components/HomeImage.vue';
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {

      'home-hero-image':()=>h(HomeImage)
    })
  },
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
