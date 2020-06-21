export const state = () => ({
  isInitialized: false,
  isHoverMusic: false,
  isHoverTechnology: false,
  isMusicSelected: false,
  isTechnologySelected: false,
  comeFromTop: false,
  musicPlaying: false,
  musicPaused: false
})

export const actions = {
  updateInitialized({ commit }) {
    commit('updateInitialized', true)
  },
  musicHovered({ commit }) {
    commit('updateHover', { music: true, technology: false })
  },
  technologyHovered({ commit }) {
    commit('updateHover', { music: false, technology: true })
  },
  leaveMouse({ commit }) {
    commit('updateHover', { music: false, technology: false })
  },
  selectMusic({ commit }) {
    commit('updateSelection', { music: true, technology: false })
  },
  selectTechnology({ commit }) {
    commit('updateSelection', { music: false, technology: true })
  },
  clearSelection({ commit }) {
    commit('clearSelection')
  },
  comeFromTop({ commit }) {
    commit('setComeFromTop')
  },
  updateMusicPlaying({ commit }, status) {
    commit('toggleMusicPlaying', status)
  },
  updateMusicPause({ commit }, status) {
    commit('toggleMusicPause', status)
  }
}

export const mutations = {
  updateInitialized(state) {
    state.isInitialized = true
  },
  updateHover(state, value) {
    state.isHoverMusic = value.music
    state.isHoverTechnology = value.technology
  },
  updateSelection(state, value) {
    state.isMusicSelected = value.music
    state.isTechnologySelected = value.technology
    state.isHoverMusic = false
    state.isHoverTechnology = false
  },
  clearSelection(state) {
    state.isMusicSelected = false
    state.isTechnologySelected = false
  },
  setComeFromTop(state) {
    state.comeFromTop = true
  },
  toggleMusicPlaying(state, value) {
    state.musicPlaying = value
  },
  toggleMusicPause(state, value) {
    state.musicPaused = value
  }
}
