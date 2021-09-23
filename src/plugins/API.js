import axios from 'axios';
import store  from '@/store'
export default () => {
    return axios.create({
        // baseURL:  `https://${store.getters.getCurrentHost}.livecom.cn`
    })
}
