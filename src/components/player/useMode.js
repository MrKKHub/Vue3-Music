import { computed } from 'vue'
import { useStore } from 'vuex'
import { PLAY_MODE } from '@/assets/js/constant.js'

export default function useMode () {
  const store = useStore()
  const playMode = computed(() => store.state.playMode)

  const modeIcon = computed(() => {
    const playModeVal = playMode.value
    return playModeVal === PLAY_MODE.sequence ? 'icon-sequence' : (playModeVal === PLAY_MODE.loop ? 'icon-loop' : 'icon-random')
  })

  function changeMode () {
    const mode = (playMode.value + 1) % 3
    store.dispatch('changeMode', mode)
  }
  return {
    modeIcon,
    changeMode
  }
}