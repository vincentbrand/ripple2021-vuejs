import ApiService from './api.services';

export default {
    async allBookingsData (params = {}) {
        const response = await ApiService.request({
            method: "GET",
            url: '/backend/bookings',
            params
        });
        return response.data
    },

    async getBooking (id, params = {}) {
        const response = await ApiService.request({
            method: "GET",
            url: `/backend/bookings/${id}`,
            params
        });
        return response.data
    }
}