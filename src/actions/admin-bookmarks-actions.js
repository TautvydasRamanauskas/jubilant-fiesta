import AdminService from '../services/admin-service';

export const fetchBookmarksCount = () => dispatch => {
    AdminService.fetchBookmarksCount()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "BOOKMARKS_COUNT_FETCHED",
                count: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to fetch bookmarks count');
            }
        });
};

export const deleteBookmarks = () => dispatch => {
    AdminService.deleteBookmarks()
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: "BOOKMARKS_COUNT_FETCHED",
                    count: 0,
                });
            } else {
                throw response;
            }
        })
        .catch(err => {
            if (err) {
                alert('Failed to delete bookmarks');
            }
        });
};

export const openBookmarksRemove = () => ({
    type: 'BOOKMARKS_REMOVE_OPEN',
});

export const closeBookmarksRemove = () => ({
    type: 'BOOKMARKS_REMOVE_CLOSE',
});
