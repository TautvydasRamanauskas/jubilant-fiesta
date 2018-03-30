import callApi from './call-service';

export default {
    search(keyword) {
        return callApi(`/search/${keyword}`, 'POST');
    },

    retrieveBookmarks() {
        return callApi(`/bookmark`, 'GET');
    },

    addBookmark(entry) {
        return callApi(`/bookmark`, 'POST', {...entry});
    },

    removeBookmark(entry) {
        return callApi(`/bookmark`, 'DELETE', {...entry});
    },

    generatedLink(results) {
        return callApi(`/link/`, 'POST', results);
    },

    link(link) {
        return callApi(`/link/${link}`, 'GET');
    },
}
