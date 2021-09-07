import BookingsServices from '@/services/bookings.services'

const state = {
  ListData: null
}

const mutations= {
  SET_BOOKINGS_DATA (state, data) {
    state.ListData = data
  }
}

const actions= {
  getBookingsData ({ commit }, params) {
    BookingsServices.allBookingsData(params).then((result) => {
      commit('SET_BOOKINGS_DATA', result)
    })
  },

  getBooking (_, id) {
    return BookingsServices.getBooking(id).then((result) => {
      return result;
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
