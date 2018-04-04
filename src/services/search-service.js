import callApi from './call-service';

export default {
    search(keyword) {
        return callApi(`/search/${keyword}`, 'POST');
    },

    mostPopular() {
        return callApi(`/search/popular/`, 'GET');
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

    addVote(vote) {
        return callApi(`/vote/`, 'POST', vote);
    },

    removeVote(vote) {
        return callApi(`/vote/`, 'DELETE', vote);
    },

    generateReport(results) {
        return callApi(`/report/`, 'POST', results);
    },

    generatedLink(results) {
        return callApi(`/link/`, 'POST', results);
    },

    link(link) {
        return callApi(`/link/${link}`, 'GET');
    },
}
