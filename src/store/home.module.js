import HomeServices from '@/services/home.services'

const state = {
  dashboard: null
}

const mutations= {
  SET_HOME_CARD_DATA (state, data) {
    state.dashboard = data.dashboard
  }
}

const actions= {
  getHomeCardData ({ commit }) {
    HomeServices.homeCardData().then((result) => {
      commit('SET_HOME_CARD_DATA', result)
    })
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
