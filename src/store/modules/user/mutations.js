module.exports = {
    SET_LOGIN_STATUS: (state, status) => {
        state.isLoggedIn = status
    },
    SET_USER_DATA: (state, user) => {
        state.userData = user
    },
    SET_ACCOUNT_ID: (state , id) => {
        state.accountID = id
    },
    SET_ACCOUNT_NAME: (state , name) => {
        state.accountName = name
    },
    SET_USER_ID: (state , id) => {
        state.userID = id
    },
    SET_USER_NAME: (state , name) => {
        state.userName = name
    },
}