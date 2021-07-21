const mutations = {
  // 设置播放状态
  setPlayingState (state, playing) {
    state.playing = playing
  },
  // 设置歌单列表
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  // 设置播放列表
  setPlayList (state, list) {
    state.playList = list
  },
  // 设置播放模式
  setPlayMode (state, playMode) {
    state.playMode = playMode
  },
  // 设置当前播放索引
  setCurrentIndex (state, currentIndex) {
    state.currentIndex = currentIndex
  },
  // 设置是否全屏播放
  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  },
  setFavoriteList (state, list) {
    state.favoriteList = list
  }
}

export default mutations
