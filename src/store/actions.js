import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '@/assets/js/utils'

export function selectPlay ({ commit }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sequence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
}

export function randomPlay ({ commit }, list) {
  commit('setPlayMode', PLAY_MODE.random)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', shuffle(list))
  commit('setCurrentIndex', 0)
}

export function changeMode ({ commit, state, getters }, mode) {
  const currentId = getters.currentSong.id
  if (mode === PLAY_MODE.random) {
    commit('setPlayList', shuffle(state.sequenceList))
  } else {
    commit('setPlayList', state.sequenceList)
  }
  const index = state.playList.findIndex(item => {
    return item.id === currentId
  })
  commit('setCurrentIndex', index)
  commit('setPlayMode', mode)
}

export function removeSong ({ commit, state }, song) {
  const sequenceList = state.sequenceList.slice()
  const playList = state.playList.slice()

  const sequenceIndex = findIndex(sequenceList, song)
  const playListIndex = findIndex(playList, song)

  sequenceList.splice(sequenceIndex, 1)
  playList.splice(playListIndex, 1)
  if (sequenceIndex < 0 || playListIndex < 0) return

  let currentIndex = state.currentIndex
  if (playListIndex < currentIndex || currentIndex === playList.length) {
    currentIndex--
  }
  commit('setSequenceList', sequenceList)
  commit('setPlayList', playList)
  commit('setCurrentIndex', currentIndex)
  if (!playList.length) {
    commit('setPlayingState', false)
  }
}
export function clearSongList ({ commit }) {
  commit('setSequenceList', [])
  commit('setPlayList', [])
  commit('setCurrentIndex', 0)
  commit('setPlayingState', false)
}

function findIndex (list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}
