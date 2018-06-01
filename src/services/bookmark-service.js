import callApi from './call-service';

export default {
    retrieveBookmarks(userId) {
        return callApi(`/bookmark/${userId}`, 'GET');
    },

    addBookmark(entry, user) {
        return callApi(`/bookmark`, 'POST', {
            entry: {
                ...entry
            },
            user: {
                ...user
            },
        });
    },

    removeBookmark(entry, user) {
        return callApi(`/bookmark`, 'DELETE', {
            entry: {
                ...entry
            },
            user: {
                ...user
            },
        });
    },
}
