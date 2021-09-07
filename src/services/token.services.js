import { get, set } from 'js-cookie'

const TOKEN_KEY = 'RIPPLE_USER_TOKEN'

export default {
  setToken(token) {
    set(TOKEN_KEY, token)
  },

  getToken() {
    return get(TOKEN_KEY)
  }
}
