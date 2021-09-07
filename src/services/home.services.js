import ApiService from './api.services';
// const baseUrl = process.env.VUE_APP_DOMAIN_NAME + '/api/v1'
export default {
    async homeCardData (params = {}) {
        const requestData = {
            method: "GET",
            url: '/auth/dashboard/1',
            params
        }
        const response = await ApiService.request(requestData);
        return response.data
    },
}