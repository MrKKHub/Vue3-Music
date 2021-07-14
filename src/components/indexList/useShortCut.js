import { ref, computed } from 'vue'
export default function useShortCut (props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const scrollRef = ref(null)
  const shortcutList = computed(() => {
    return props.data.map(item => item.title)
  })

  const touch = {}
  function onShortcutTouchStart (el) {
    const anchorIndex = parseInt(el.target.dataset.index) // 触摸起始点的当前索引
    touch.anchorIndex = anchorIndex
    touch.y1 = el.touches[0].pageY // 获取触摸起始点纵坐标位置
    scrollTo(anchorIndex)
  }
  function onShortcutTouchMove (el) {
    touch.y2 = parseInt(el.touches[0].pageY)
    const delData = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0
    scrollTo(delData + touch.anchorIndex)
  }

  function scrollTo (index) {
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const scrollEle = groupRef.value.children[index] // 得到歌手列表需要滑动到的锚点对应列表
    const scroll = scrollRef.value.scroll
    scroll.scroll.value.scrollToElement(scrollEle, 0)
  }
  return {
    shortcutList,
    onShortcutTouchStart,
    onShortcutTouchMove,
    scrollRef
  }
}
