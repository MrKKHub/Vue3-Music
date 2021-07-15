import { PLAY_MODE } from '@/assets/js/constant.js'

const state = {
  sequenceList: [], // 歌单顺序列表
  playList: [], // 播放列表
  playing: false, // 播放状态
  playMode: PLAY_MODE.sqeuence, // 播放方式
  currentIndex: 0, // 当前播放索引
  fullScreen: false // 是否全屏播放
}

export default state
