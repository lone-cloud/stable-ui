import { ref, computed, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'

export function useMobileScrollHide({
  mobileWidth = 768,
  hideAfterDistanceFromTop = 100,
  hideAfterScroll = 100,
} = {}) {
  const { width } = useWindowSize()
  const isMobile = computed(() => width.value <= mobileWidth)
  const isVisible = ref(true)

  const { y } = useScroll(window)

  let lastScrollY = y.value
  let scrollDistance = 0

  watch(y, (newY) => {
    if (!isMobile.value) return

    const scrollDeltaY = newY - lastScrollY
    lastScrollY = newY

    if (scrollDeltaY > 0 && newY > hideAfterDistanceFromTop) {
      scrollDistance += scrollDeltaY

      if (scrollDistance >= hideAfterScroll) {
        isVisible.value = false
        scrollDistance = 0
      }
      return
    }

    if (scrollDeltaY < 0) {
      scrollDistance = 0
      isVisible.value = true
    }
  })

  return { isVisible, isMobile }
}