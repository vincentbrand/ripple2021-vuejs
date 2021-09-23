import moment from 'moment';
const Cookies = {
    setCookie: function (key, value, expire) {
        try {
            var now = new Date();
            var time = now.getTime();
            // time += hours * 3600 * 1000;
            time += expire * 1000;
            now.setTime(time);
            document.cookie = `${key}=${value}; expires=' + ${now.toString()}; path=/`
        } catch (e) {
            console.log(`cannot set cookie for key ${key} with value ${value} due to error ${e}`)
        }
    },
    getCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    deleteCookie: function (name) {
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    clearCookies: function () {
        return new Promise((resolve, reject) => {
            try {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    var value = ''
                    var expiry = moment().subtract(1, 'hours');
                    document.cookie = `${name}=${value}; expires=' + ${expiry}; Max-Age=0; path=/`
                }
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
}
export default Cookies