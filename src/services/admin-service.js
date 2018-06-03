import callApi from './call-service';

export default {
    fetchLimits() {
        return callApi(`/admin/limits/`, 'GET');
    },

    fetchUsers() {
        return callApi(`/admin/users/`, 'GET');
    },

    fetchSearches() {
        return callApi(`/admin/searches/`, 'GET');
    },

    updateLevel(userId, level) {
        return callApi(`/admin/level/`, 'POST', {userId, level});
    },
}
