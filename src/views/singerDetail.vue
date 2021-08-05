<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic" :loading="loading" ></music-list>
  </div>
</template>

<script>
  // import MusicList from '@/components/musicList/musicList'
  import createDetailComponent from '@/assets/js/createDetailComponent'
  import { getSingerDetail } from '@/service/singer'
  // import { processSongs } from '@/service/song'
  // import storage from 'good-storage'
  import { SINGER_KEY } from '@/assets/js/constant'
  export default createDetailComponent('singerDetail', SINGER_KEY, getSingerDetail)
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
