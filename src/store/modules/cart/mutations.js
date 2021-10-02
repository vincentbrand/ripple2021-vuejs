module.exports = {
    ADD_TO_CART(state, payload) => {
        state.cart.products =  payload
    },
    REMOVE_FROM_CART(state, payload) => {
        state.cart.products =  payload
    }

}