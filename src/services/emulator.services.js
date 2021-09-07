import ApiService from './api.services';

export default {
    async emulatorConfig (params = {}) {
        const requestData = {
            method: "GET",
            url: '/backend/app/config/1',
            params
        }
        const response = await ApiService.request(requestData);
        return response.data
    },
}