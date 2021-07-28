import { useStore } from 'vuex'
import { computed } from 'vue'
import { FAVORITE_KEY } from '@/assets/js/constant'
import { save, remove } from '@/assets/js/arrayStore'
export default function useFavorite () {
  const store = useStore()
  const favoriteList = computed(() => store.state.favoriteList)
  const maxLen = 100

  function getFavoriteIcon (song) {
    return isFavorite(song) ? 'icon-favorite' : 'icon-not-favorite'
  }

  function toggelFavorite (song) {
    let list = favoriteList.value
    if (isFavorite(song)) {
      list = remove(FAVORITE_KEY, compare)
    } else {
      list = save(song, FAVORITE_KEY, compare, maxLen)
    }
    store.commit('setFavoriteList', list)

    function compare (item) {
      return item.id === song.id
    }
  }
  function isFavorite (song) {
    return favoriteList.value.some(item => item.id === song.id)
  }

  return {
    getFavoriteIcon,
    toggelFavorite
  }
}
