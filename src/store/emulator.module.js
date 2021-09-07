import EmulatorServices from '@/services/emulator.services'

const state = {
    appConfig: null
}

const mutations= {
  SET_EMULATOR_CONFIG (state, data) {
    state.appConfig = data.appconfig
  }
}

const actions= {
  getEmulatorConfig ({ commit }) {
    EmulatorServices.emulatorConfig().then((result) => {
      commit('SET_EMULATOR_CONFIG', result)
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
