import Vue from 'vue'
Vue.mixin({
    methods: {
        inValid(value) {
            if (value === undefined ||value === null ||(typeof value === "object" && Object.keys(value).length === 0) ||(typeof value === "string" && value.trim().length === 0)) {
                return false;
            } else {
                return true;
            }
        },
        lcFilter(contentString){

            console.log(contentString);
        },

        capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)

    }


})