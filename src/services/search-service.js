import callApi from './call-service';

export default {
    search(keyword) {
        return callApi(`/search/${keyword}`, 'POST');
    },

    addBookmark(title) {
        return callApi(`/bookmark`, 'POST', {title});
    },

    removeBookmark(title) {
        return callApi(`/bookmark`, 'DELETE', {title});
    },
}
