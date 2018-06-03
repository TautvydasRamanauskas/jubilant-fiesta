import callApi from './call-service';

export default {
    fetchLimits() {
        return callApi(`/admin/limits/`, 'GET');
    },

    fetchUsers() {
        return callApi(`/admin/users/`, 'GET');
    },
}
