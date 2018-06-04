import callApi from './call-service';

export default {
    fetchLimits() {
        return callApi(`/admin/limits/`, 'GET');
    },

    fetchUsers() {
        return callApi(`/admin/users/`, 'GET');
    },

    updateLevel(userId, level) {
        return callApi(`/admin/level/`, 'POST', {userId, level});
    },

    fetchSearches() {
        return callApi(`/admin/searches/`, 'GET');
    },

    cleanCache(keyword) {
        return callApi(`/admin/searches/${keyword}`, 'DELETE');
    },

    fetchLinksCount() {
        return callApi(`/admin/links/`, 'GET');
    },

    deleteLinks() {
        return callApi(`/admin/links/`, 'DELETE');
    },

    fetchBookmarksCount() {
        return callApi(`/admin/bookmarks/`, 'GET');
    },

    deleteBookmarks() {
        return callApi(`/admin/bookmarks/`, 'DELETE');
    },
}
