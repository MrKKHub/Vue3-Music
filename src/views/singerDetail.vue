<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic" :loading="loading"></music-list>
  </div>
</template>

<script>
  import MusicList from '@/components/musicList/musicList'
  import { getSingerDetail } from '@/service/singer'
  import { processSongs } from '@/service/song'
  import storage from 'good-storage'
  import { SINGER_KEY } from '@/assets/js/constant'
  export default {
    name: 'singerDetail',
    components: {
      MusicList
    },
    props: {
      singer: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        songs: []
      }
    },
    computed: {
      computedSinger () {
        let result = null
        const singer = this.singer
        if (singer) {
          result = singer
        } else {
          const cached = storage.session.get(SINGER_KEY)
          if (cached && (cached.mid || cached.id + '') === this.$route.query.id) {
            result = cached
          }
        }
        return result
      },
      title () {
        const singer = this.computedSinger
        return singer && singer.name
      },
      pic () {
        const singer = this.computedSinger
        return singer && singer.pic
      },
      loading () {
        return !this.songs.length
      }
    },
    async created () {
      const result = await getSingerDetail(this.singer)
      this.songs = await processSongs(result.songs)
    }
  }
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
