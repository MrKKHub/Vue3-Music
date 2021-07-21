import { PLAY_MODE, FAVORITE_KEY } from '@/assets/js/constant.js'
import { load } from '@/assets/js/arrayStore'
const state = {
  sequenceList: [], // 歌单顺序列表
  playList: [], // 播放列表
  playing: false, // 播放状态
  playMode: PLAY_MODE.sequence, // 播放方式
  currentIndex: 0, // 当前播放索引
  fullScreen: false, // 是否全屏播放
  favoriteList: load(FAVORITE_KEY) // 收藏列表
}

export default state
