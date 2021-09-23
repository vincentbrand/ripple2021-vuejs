import Vue from 'vue'
// const momentTz = require('moment-timezone');
// import Cookies from './Cookies'


// used on clients page
Vue.filter('clientCutOff', (str) => {
    if (str.length < 18) return str
    return str.slice(0, 18)
})

Vue.filter('cutOffInbox', (str) => {
    if(str){
        if (str.length < 200) return str
        return str.slice(0, 200) + '...'
    }else{
        return ''
    }
})

Vue.filter('cutOffDot', (str) => {
    if(str){
        if (str.length < 20) return str
        return str.slice(0, 20) + '...'
    }else{
        return ''
    }
})

Vue.filter('cutOffClean', (str) => {
    if (str.length < 10) return str
    return str.slice(0, 10) + '...'
})

Vue.filter('capitalize', (str) => {
    if (!str) return ''
    str = str.toString()
    return str.charAt(0).toUpperCase() + str.slice(1)
})

Vue.filter('lowercase', (value) => {
    if (!value) return ''
    value = value.toString()
    return value.toLowerCase()
})

