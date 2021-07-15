<template>
  <div class="singer" v-loading="!singerList.length">
    <index-list :data="singerList" @select="selectSinger"></index-list>
  </div>
  <router-view v-slot="{ Component }">
    <transition appear name="slide">
      <component :is="Component" :singer="selectedSinger"></component>
    </transition>
  </router-view>
</template>

<script>
import { getSingerList } from '@/service/singer'
import indexList from '@/components/indexList/indexList'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'
export default {
  name: 'singer',
  components: { indexList },
  data () {
    return {
      singerList: [],
      selectedSinger: null
    }
  },
  async created () {
    const result = await getSingerList()
    this.singerList = result.singers
  },
  methods: {
    selectSinger (item) {
      this.selectedSinger = item
      this.cacheSinger(item)
      this.$router.push({
        path: `/singer/${item.mid}`
      })
    },
    cacheSinger (val) {
      storage.session.set(SINGER_KEY, val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
