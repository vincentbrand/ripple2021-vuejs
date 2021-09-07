import axios from 'axios'
import TokenService from './token.services';
export default {
    init(baseUrl = process.env.VUE_APP_DOMAIN_NAME) {
      axios.defaults.baseURL = baseUrl
    },
  
    setHeader(tokenType = 'Bearer') {
      axios.defaults.headers.Authorization = `${tokenType} ${TokenService.getToken()}`
    },
  
    request(data) {
      return axios(data)
    }
}