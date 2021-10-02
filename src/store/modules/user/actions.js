
// import * as _ from 'underscore'
// import Storage from '@/plugins/Storage'
// import router from '@/router/index'

/*
export const adminLogin = ({ rootState, commit, dispatch }, data) => {
}

export const updateQueueStatsAction = ({commit} , data) =>{
    // commit('SET_CHANNEL_STATS', data)
}
*/


import Axios from "axios";

const url = '';

export const getUserAlerts = ({ state, commit, dispatch }, payload) => {

    Axios.get(url).then(()=> {
        console.log(state)
        console.log(commit)
        console.log(dispatch)
        console.log(payload)
    })



    // axios.post()
}
