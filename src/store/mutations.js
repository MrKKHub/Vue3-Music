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
  // 设置收藏歌曲
  setFavoriteList (state, list) {
    state.favoriteList = list
  },
  // 保存歌词
  addSongLyric (state, { song, lyric }) {
    state.sequenceList.map(item => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  }
}

export default mutations
