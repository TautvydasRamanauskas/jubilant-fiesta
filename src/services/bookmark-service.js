import callApi from './call-service';

export default {
    retrieveBookmarks() {
        return callApi(`/bookmark`, 'GET');
    },

    addBookmark(entry) {
        return callApi(`/bookmark`, 'POST', {...entry});
    },

    removeBookmark(entry) {
        return callApi(`/bookmark`, 'DELETE', {...entry});
    },
}
