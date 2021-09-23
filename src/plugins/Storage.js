let localStorage = window.localStorage
const Storage = {
    getItem: function (key) {
        try {
            let data = localStorage.getItem(key)
            return data
        } catch (e) {
            console.log(`unable to get data for ${key} , ${e}`)
        }
    },
    setItem: function (key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (e) {
            console.log(`unable to get data for ${key} , ${e}`)
        }
    },
    remove: function (key) {
        try {
            localStorage.removeItem(key)
        } catch (e) {
            console.log(`unable to remove localStorage item`)
        }
    },
    clearAll: function () {
        return localStorage.clear()
    }
}

export default Storage