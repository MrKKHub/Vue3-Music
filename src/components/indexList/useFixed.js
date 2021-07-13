import { ref, watch, nextTick, computed } from 'vue'
export default function useFixed (props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(null)
  const currentIndex = ref(0)
  const distance = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value <= 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value // 偏移量
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0, ${diff}px, 0)`
    }
  })
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newVal) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newVal >= heightTop && newVal <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - newVal
      }
    }
  })

  function calculate () {
    const list = groupRef.value.children // 拿到ul所有的子元素li列表
    const listHeightsVal = listHeights.value
    let height = 0

    listHeightsVal.length = 0
    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }
  function groupScroll (height) {
    scrollY.value = -height
  }
  return {
    groupRef,
    groupScroll,
    fixedTitle,
    fixedStyle
  }
}
