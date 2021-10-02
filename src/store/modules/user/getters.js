module.exports = {
    /*
    getLoginStatus: (state) => {
        return state.isLoggedIn
    },
    getUserData: (state) => {
        return state.userData
    },
    getUserName: (state) => {
        return state.userName
    },
    getUserID: (state) => {
        return state.userID
    },
    getAcount: (state) => {
        return state.accountName
    },
    getAccountID: (state) =>{
        return state.accountID
    },
    */

    userAlerts: (state) => {
        return state.userAlerts
    },
    alertsCount:(state) => {
      return state.userAlerts.length
    },
    userCart: (state) => {
        return state.userCart
    },
    cartCount:(state) => {
        return state.userCart.length
    }
}