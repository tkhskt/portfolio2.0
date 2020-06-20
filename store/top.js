export const state = () => ({
  isHoverMusic: false,
  isHoverTechnology: false,
  isMusicSelected: false,
  isTechnologySelected: false
})

export const actions = {
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
  }
}

export const mutations = {
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
  }
}
