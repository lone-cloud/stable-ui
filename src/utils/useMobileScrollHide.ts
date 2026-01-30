import { ref, computed, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'

export function useMobileScrollHide(threshold = 5) {
  const { width } = useWindowSize()
  const isMobile = computed(() => width.value <= 768)
  const isVisible = ref(true)

  const { y, directions } = useScroll(window)

  watch(y, () => {
    if (!isMobile.value) return

    if (directions.bottom && y.value > threshold) {
      isVisible.value = false
    } else if (directions.top) {
      isVisible.value = true
    }
  })

  return { isVisible, isMobile }
}