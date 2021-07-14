<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
import useScroll from './useScroll'
export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emit: ['scroll'],
  setup (props, context) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props, context)
    return {
      rootRef,
      scroll
      // currentPosition
    }
  }
}
</script>
