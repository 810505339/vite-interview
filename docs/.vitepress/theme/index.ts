import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress';
import HomeSponsors from './components/HomeSponsors.vue'
import HomeKinesisElement from './components/HomeKinesisElement.vue'
import HomeImage from './components/HomeImage.vue';
import '@unocss/reset/normalize.css'
import 'uno.css'
import './style/var.css'
import Layout from './Layout.vue'
export default {
  Layout() {
    return h(Layout, null, {
      'home-hero-image': () => h(HomeImage),
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
