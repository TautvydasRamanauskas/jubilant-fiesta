import callApi from './call-service';

export default {
    login(response) {
        return callApi(`/user/`, 'POST', {
            ...response,
            picture: response.picture.data.url,
        });
    },

    logout() {
        return callApi(`/user/`, 'DELETE');
    },

    updateOptions(options) {
        return callApi(`/user/options/`, 'PUT', {...options});
    },
}
