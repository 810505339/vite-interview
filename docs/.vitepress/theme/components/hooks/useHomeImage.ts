import { useToggle } from "@vueuse/core"
import lottie, { AnimationItem } from "lottie-web"
import { Ref, onMounted, ref, watch } from "vue"
type IProps = {
  lavContainer: Ref<HTMLElement | null>,
  animationData: any
}
export default function useHomeImage({ lavContainer, animationData }: IProps) {
  const [value, toggle] = useToggle()
  const lottieRef = ref<AnimationItem>()
  watch(() => value.value, (newVal) => {
    newVal ? lottieRef.value?.pause() : lottieRef.value!.play()

    // 副作用函数
  }, { immediate: false })

  onMounted(() => {
    if (lavContainer.value) {
      lottieRef.value = lottie.loadAnimation({
        container: lavContainer.value, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData // the path to the animation json
      });
    }
  })
  return {
    toggle,
    lottieRef
  }
}
