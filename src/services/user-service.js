import callApi from './call-service';

export default {
    login(userId, token) {
        return callApi(`/user/`, 'POST', {userId, token});
    },

    logout() {
        return callApi(`/user/`, 'DELETE');
    },

    updateOptions(options) {
        return callApi(`/user/options/`, 'PUT', {...options});
    },
}
