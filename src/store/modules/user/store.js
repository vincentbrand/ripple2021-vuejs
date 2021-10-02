import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters'
const state = {
    isLoggedIn: false,
    userData: {},
    userName: 'Vince',
    userID: 1,
    accountName: 'Ripple',
    accountID: 1
}
export default {
    state,
    actions,
    mutations,
    getters,
}